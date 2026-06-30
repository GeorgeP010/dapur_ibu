const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Cart.addCustom to accept customPrice
const oldAddCustom = `  addCustom(baseItemId, optionsText) {
    const fakeId = baseItemId + '_' + Date.now();
    let found = null;
    for (const cat of Object.values(MENU_DATA)) {
      found = cat.items.find(i => i.id === baseItemId);
      if (found) break;
    }
    if (found) {
      this.items.push({ id: fakeId, name: found.name, price: found.price, qty: 1, options: optionsText });
      this.save();
    }
  }`;

const newAddCustom = `  addCustom(baseItemId, optionsText, customPrice = null) {
    const fakeId = baseItemId + '_' + Date.now();
    let found = null;
    for (const cat of Object.values(MENU_DATA)) {
      found = cat.items.find(i => i.id === baseItemId);
      if (found) break;
    }
    if (found) {
      const finalPrice = customPrice !== null ? customPrice : found.price;
      this.items.push({ id: fakeId, name: found.name, price: finalPrice, qty: 1, options: optionsText });
      this.save();
    }
  }`;

content = content.replace(oldAddCustom, newAddCustom);

// 2. Define openWeightModal function
const weightModalCode = `
function openWeightModal(itemId) {
  let found = null;
  for (const cat of Object.values(MENU_DATA)) {
    found = cat.items.find(i => i.id === itemId);
    if (found) break;
  }
  if (!found) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = \`
    <div class="modal-content !max-w-md !p-6 !text-left relative">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2" style="font-family: 'Playfair Display'">Kies gewicht</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4">\${found.name} (\\u20AC\${found.price.toFixed(2).replace('.', ',')} per 100g)</p>
      
      <div class="flex items-center justify-center gap-6 my-6">
        <button id="weight-minus" type="button" class="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-on-surface hover:bg-error/10 hover:text-error transition-colors">
          <span class="material-symbols-outlined text-[24px]">remove</span>
        </button>
        <div class="text-center w-24">
          <span id="weight-value" class="font-headline-md text-[24px] text-on-surface block">100g</span>
          <span id="weight-price" class="font-label-md text-primary block mt-1">\\u20AC\${found.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <button id="weight-plus" type="button" class="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined text-[24px]">add</span>
        </button>
      </div>

      <button id="weight-submit" type="button" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors">
        Toevoegen aan bestelling
      </button>
    </div>
  \`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  let currentWeight = 100;
  const valEl = modal.querySelector('#weight-value');
  const priceEl = modal.querySelector('#weight-price');

  function updateDisplay() {
    valEl.textContent = currentWeight + 'g';
    const currentPrice = (currentWeight / 100) * found.price;
    priceEl.textContent = '\\u20AC' + currentPrice.toFixed(2).replace('.', ',');
  }

  modal.querySelector('#weight-minus').addEventListener('click', () => {
    if (currentWeight > 100) {
      currentWeight -= 50;
      updateDisplay();
    }
  });

  modal.querySelector('#weight-plus').addEventListener('click', () => {
    if (currentWeight < 3000) {
      currentWeight += 50;
      updateDisplay();
    }
  });

  modal.querySelector('#weight-submit').addEventListener('click', () => {
    const currentPrice = (currentWeight / 100) * found.price;
    cart.addCustom(itemId, \`Gewicht: \${currentWeight}g\`, currentPrice);
    modal.remove();
  });
}
`;

content = content.replace('function openFrisModal', weightModalCode + '\nfunction openFrisModal');

// 3. Update renderAfhaalMenu
const renderMenuRegex = /function renderAfhaalMenu\(container\) \{[\s\S]*?container\.innerHTML = html;\n\}/;
const renderMenuCode = `function renderAfhaalMenu(container) {
  let html = '';
  let isFirst = true;
  for (const [catKey, category] of Object.entries(MENU_DATA)) {
    const hiddenClass = isFirst ? '' : 'hidden';
    html += \`
      <section id="cat-\${catKey}" class="category-section \${hiddenClass}">
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-3 border-b border-secondary/10 pb-2" style="font-family: 'Playfair Display'">\${category.label}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    \`;
    for (const item of category.items) {
      const spicyHtml = item.spicy > 0 ? \`<span class="text-sunset-orange flex items-center gap-0.5">\${'<span class="material-symbols-outlined icon-filled text-[14px]">local_fire_department</span>'.repeat(item.spicy)}</span>\` : '';
      const vegHtml = item.tags && item.tags.includes('Vegetarisch') ? \`<span class="material-symbols-outlined text-paddy-green text-[14px]">eco</span>\` : '';

      const imgHtml = item.img ? \`<img src="\${item.img}" alt="\${item.name}" class="w-14 h-14 object-cover rounded-lg border border-secondary/10 shrink-0">\` : '';

      let qtyHtml = '';
      if (SCHOTEL_RULES[item.id]) {
        qtyHtml = \`
          <button onclick="openSchotelModal('\${item.id}')" aria-label="Samenstellen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-[18px]">add</span>
          </button>
        \`;
      } else if (item.isWeight) {
        qtyHtml = \`
          <button onclick="openWeightModal('\${item.id}')" aria-label="Kiezen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-[18px]">scale</span>
          </button>
        \`;
      } else if (item.id === 'dr4') {
        qtyHtml = \`
          <button onclick="openFrisModal('\${item.id}')" aria-label="Kiezen" class="shrink-0 bg-primary/10 text-primary font-label-md px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors whitespace-nowrap">
            Kiezen
          </button>
        \`;
      } else {
        const cartItem = cart.items.find(c => c.id === item.id);
        qtyHtml = cartItem ? \`
          <div class="qty-group shrink-0 scale-90">
            <button onclick="cart.updateQty('\${item.id}', \${cartItem.qty - 1})" aria-label="Minder">−</button>
            <span class="qty-value">\${cartItem.qty}</span>
            <button onclick="cart.updateQty('\${item.id}', \${cartItem.qty + 1})" aria-label="Meer">+</button>
          </div>
        \` : \`
          <button onclick="cart.add('\${item.id}')" aria-label="Toevoegen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-[18px]">add</span>
          </button>
        \`;
      }

      const priceDisplay = item.isWeight ? \`\\u20AC\${item.price.toFixed(2).replace('.', ',')} <span class="text-[10px] text-on-surface-variant font-normal">/100g</span>\` : \`\\u20AC\${item.price.toFixed(2).replace('.', ',')}\`;

      html += \`
        <div class="bg-rice-paper rounded-lg border border-secondary/15 px-3 py-2.5 flex gap-3 items-center group hover:shadow-sm hover:border-secondary/30 transition-all">
          \${imgHtml}
          <div class="flex-grow min-w-0">
            <div class="flex justify-between items-center gap-2">
              <h4 class="font-label-lg text-label-lg text-on-surface leading-snug truncate text-[14px]">\${item.name}</h4>
              <span class="font-label-lg text-label-lg text-primary whitespace-nowrap shrink-0 text-[14px]">\${priceDisplay}</span>
            </div>
            <div class="flex items-center gap-1.5 mt-0.5">
              <p class="font-body-md text-body-md text-on-surface-variant text-[12px] truncate leading-tight">\${item.desc}</p>
              \${spicyHtml}\${vegHtml}
            </div>
          </div>
          \${qtyHtml}
        </div>
      \`;
    }
    html += \`</div></section>\`;
    isFirst = false;
  }
  container.innerHTML = html;
}`;

content = content.replace(renderMenuRegex, renderMenuCode);

fs.writeFileSync(filePath, content);
console.log('Weight features added successfully.');
