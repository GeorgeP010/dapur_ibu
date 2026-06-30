    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "surface-container": "#ffe9e7",
            "primary-container": "#a21e2a",
            "on-background": "#261818",
            "on-secondary": "#ffffff",
            "tertiary": "#00434e",
            "primary": "#7f0017",
            "secondary": "#745b0d",
            "outline-variant": "#e1bfbd",
            "deep-charcoal": "#1A1A1A",
            "on-tertiary-fixed": "#001f25",
            "on-secondary-container": "#775d10",
            "tertiary-fixed": "#a8edfe",
            "on-secondary-fixed": "#241a00",
            "error-container": "#ffdad6",
            "surface-container-low": "#fff0ef",
            "outline": "#8d706f",
            "sunset-orange": "#DF5518",
            "surface-container-high": "#fce2e1",
            "background": "#fff8f7",
            "on-primary": "#ffffff",
            "surface-variant": "#f6dddb",
            "inverse-on-surface": "#ffedeb",
            "on-surface": "#261818",
            "on-tertiary": "#ffffff",
            "on-tertiary-fixed-variant": "#004e5a",
            "secondary-fixed": "#ffdf94",
            "on-primary-container": "#ffb5b3",
            "inverse-primary": "#ffb3b1",
            "tertiary-fixed-dim": "#8dd1e1",
            "on-surface-variant": "#594140",
            "on-primary-fixed-variant": "#8f0d1f",
            "surface-dim": "#edd4d3",
            "surface-container-highest": "#f6dddb",
            "on-tertiary-container": "#8ed2e2",
            "secondary-fixed-dim": "#e5c36d",
            "tertiary-container": "#005c6a",
            "error": "#ba1a1a",
            "on-secondary-fixed-variant": "#594400",
            "on-error-container": "#93000a",
            "surface-tint": "#b12a33",
            "secondary-container": "#fdd981",
            "on-error": "#ffffff",
            "on-primary-fixed": "#410007",
            "primary-fixed": "#ffdad8",
            "paddy-green": "#2D4C28",
            "inverse-surface": "#3c2d2c",
            "surface-bright": "#fff8f7",
            "surface-container-lowest": "#ffffff",
            "primary-fixed-dim": "#ffb3b1",
            "surface": "#fff8f7",
            "rice-paper": "#F9F7F2"
          },
          borderRadius: {
            DEFAULT: "0.125rem",
            lg: "0.25rem",
            xl: "0.5rem",
            full: "0.75rem"
          },
          spacing: {
            "container-max": "1280px",
            "stack-md": "16px",
            "stack-sm": "8px",
            "margin-desktop": "64px",
            gutter: "24px",
            "stack-lg": "32px",
            "margin-mobile": "20px",
            "section-gap": "120px"
          },
          fontFamily: {
            "headline-lg-mobile": ["Playfair Display"],
            "body-lg": ["Plus Jakarta Sans"],
            "label-lg": ["Plus Jakarta Sans"],
            "label-md": ["Plus Jakarta Sans"],
            "headline-sm": ["Playfair Display"],
            "headline-md": ["Playfair Display"],
            "headline-lg": ["Playfair Display"],
            "body-md": ["Plus Jakarta Sans"],
            "display-lg": ["Playfair Display"]
          },
          fontSize: {
            "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
            "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
            "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
            "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.03em", fontWeight: "500" }],
            "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
            "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
            "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
            "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
            "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }]
          }
        }
      }
    }
    // ========================
    // MENU CONFIG
    // ========================
    const MENU_INFO = {
      A: { label: 'Menu A — Klassiek Basis', price: '€15,50 p.p.', basePrice: 15.50, minPersons: 25, basis: 0, vlees: 2, groenten: 2, basisFixed: 'Witte Rijst' },
      B: { label: 'Menu B — Uitgebreid Genieten', price: '€17,50 p.p.', basePrice: 17.50, minPersons: 20, basis: 2, vlees: 2, groenten: 2 },
      C: { label: 'Menu C — Luxe Rijsttafel', price: '€21,50 p.p.', basePrice: 21.50, minPersons: 10, basis: 2, vlees: 3, groenten: 3 },
      TUMPENG: { label: 'Tumpeng — Feestelijke Kegelrijst', price: '€22,50 p.p.', basePrice: 22.50, minPersons: 20, basis: 0, vlees: 0, groenten: 0, basisFixed: 'Vast Menu (Geen keuze nodig)' },
      BROODJES: { label: 'Broodjes Catering', price: '€5,50 p.p.', basePrice: 5.50, minPersons: 50, basis: 0, vlees: 0, groenten: 0, basisFixed: 'Mix van warme broodjes' },
      BORRELHAPJES: { label: 'Indonesische Borrelhapjes', price: 'Vanaf €6,00 p.p.', basePrice: 6.00, minPersons: 20, basis: 0, vlees: 0, groenten: 0, snacks: 3 }
    };

    // Dish data from MENU_DATA
    // Dish data from MENU_DATA
    const DISHES = {
      basis: (MENU_DATA.basis?.items || []).map(i => ({ name: i.name, spicy: i.spicy, img: i.img, desc: i.desc })),
      vlees: (MENU_DATA.vlees?.items || []).map(i => ({ name: i.name, spicy: i.spicy, img: i.img, desc: i.desc })),
      groenten: (MENU_DATA.groenten?.items || [])
                 .filter(i => i.name !== 'Atjar Ketimoen' && i.name !== 'Telor Goreng')
                 .map(i => ({ name: i.name, spicy: i.spicy, img: i.img, desc: i.desc })),
      snacks: (MENU_DATA.snacks?.items || []).map(i => ({ name: i.name, spicy: i.spicy, price: i.price, img: i.img, desc: i.desc }))
    };

    let currentMenuKey = null;

    function renderVisualDishChoices(containerId, dishes, maxChoices, category) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = dishes.map((d, i) => {
        const id = `dish-${category}-${i}`;
        const defaultImg = 'img/placeholder_vlees_1780398974766.png'; // fallback
        const imgSrc = d.img || defaultImg;
        return `
          <label for="${id}" class="dish-card-label relative block bg-white rounded-xl overflow-hidden border-2 border-transparent shadow-sm hover:shadow-md cursor-pointer transition-all duration-300" data-category="${category}">
            <input type="checkbox" id="${id}" name="${category}[]" value="${d.name}" class="dish-checkbox sr-only" data-category="${category}" data-max="${maxChoices}">
            
            <div class="aspect-[4/3] relative overflow-hidden bg-surface-variant">
              <img src="${imgSrc}" alt="${d.name}" class="absolute inset-0 w-full h-full object-cover">
              <!-- Checked Overlay -->
              <div class="checked-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-[48px] icon-filled drop-shadow-md">check_circle</span>
              </div>
            </div>
            
            <div class="p-3">
              <div class="font-label-lg text-label-lg text-on-surface leading-snug flex items-start justify-between gap-1">
                <span>${d.name}</span>
                ${d.spicy > 0 ? `<span class="material-symbols-outlined icon-filled text-[16px] text-sunset-orange shrink-0">local_fire_department</span>` : ''}
              </div>
              <p class="font-label-md text-[11px] text-on-surface-variant mt-1 line-clamp-2">${d.desc || ''}</p>
            </div>
            
            <!-- Checkmark Indicator top right -->
            <div class="check-indicator absolute top-2 right-2 w-6 h-6 rounded-full bg-white shadow-sm border border-secondary/20 flex items-center justify-center opacity-0 transition-opacity duration-300">
               <span class="material-symbols-outlined text-primary text-[16px] icon-filled">check_circle</span>
            </div>
          </label>
        `;
      }).join('');

      container.querySelectorAll('.dish-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
          updateCardStyles(cb);
          if (category !== 'snacks') {
            enforceVisualMax(category, maxChoices);
          } else {
            const checked = document.querySelectorAll(`.dish-checkbox[data-category="snacks"]:checked`);
            const counter = document.getElementById('visual-snacks-counter');
            if (counter) counter.textContent = checked.length + ' geselecteerd';
          }
          if (typeof updateVisualPrice === 'function') updateVisualPrice();
        });
      });
    }

    function updateCardStyles(checkbox) {
       const label = checkbox.closest('label');
       const overlay = label.querySelector('.checked-overlay');
       const indicator = label.querySelector('.check-indicator');
       
       if (checkbox.checked) {
          label.classList.remove('border-transparent');
          label.classList.add('border-primary', 'ring-2', 'ring-primary/20');
          if (overlay) overlay.classList.remove('opacity-0');
          if (indicator) indicator.classList.remove('opacity-0');
       } else {
          label.classList.add('border-transparent');
          label.classList.remove('border-primary', 'ring-2', 'ring-primary/20');
          if (overlay) overlay.classList.add('opacity-0');
          if (indicator) indicator.classList.add('opacity-0');
       }
    }

    function enforceVisualMax(category, max) {
      const checkboxes = document.querySelectorAll(`.dish-checkbox[data-category="${category}"]`);
      const checked = [...checkboxes].filter(cb => cb.checked);
      const counter = document.getElementById(`visual-${category}-counter`);

      if (counter) {
        counter.textContent = `${checked.length}/${max} geselecteerd`;
        counter.className = checked.length === max
          ? 'font-label-md text-label-md text-primary'
          : 'font-label-md text-label-md text-on-surface-variant';
      }

      checkboxes.forEach(cb => {
        if (!cb.checked) {
          cb.disabled = checked.length >= max;
          cb.closest('label').style.opacity = checked.length >= max ? '0.5' : '1';
          cb.closest('label').style.cursor = checked.length >= max ? 'not-allowed' : 'pointer';
        }
      });
    }

    function updateVisualPrice() {
      if (!currentMenuKey) return;
      const info = MENU_INFO[currentMenuKey];
      const personsInput = document.getElementById('visual-personen');
      let persons = parseInt(personsInput.value) || 0;
      if (persons < info.minPersons) persons = info.minPersons;
      
      let baseTotal = persons * (info.basePrice || 0);
      
      const bestekCheckbox = document.getElementById('visual-bestek');
      let bestekTotal = 0;
      if (bestekCheckbox && bestekCheckbox.checked && !document.getElementById('visual-bestek-section').classList.contains('hidden')) {
        bestekTotal = persons * 2.00;
        baseTotal += bestekTotal;
      }
      
      if (currentMenuKey === 'BORRELHAPJES') {
         const checkedSnacks = document.querySelectorAll('.dish-checkbox[data-category="snacks"]:checked');
         if (checkedSnacks.length > 3) {
            baseTotal += (checkedSnacks.length - 3) * persons * 2.00;
         }
      }
      
      const orderSummary = document.getElementById('visual-order-summary');
      const orderBasePrice = document.getElementById('visual-order-baseprice');
      if (orderSummary) orderSummary.innerHTML = `${persons} &times; ${info.label.split('—')[0].trim()}`;
      if (orderBasePrice) orderBasePrice.textContent = '€' + (persons * (info.basePrice || 0)).toFixed(2).replace('.', ',');

      const bestekRow = document.getElementById('visual-order-bestek');
      const bestekPrice = document.getElementById('visual-bestek-price');
      if (bestekRow && bestekPrice) {
         if (bestekCheckbox && bestekCheckbox.checked) {
             bestekRow.classList.remove('hidden');
             bestekPrice.textContent = '€' + bestekTotal.toFixed(2).replace('.', ',');
         } else {
             bestekRow.classList.add('hidden');
         }
      }

      const orderTotal = document.getElementById('visual-order-total');
      if (orderTotal) {
         orderTotal.textContent = '€' + baseTotal.toFixed(2).replace('.', ',');
      }
    }

    function changeVisualPersons(delta) {
       const input = document.getElementById('visual-personen');
       const min = parseInt(input.min) || 10;
       let val = parseInt(input.value) || min;
       val += delta;
       if (val < min) val = min;
       input.value = val;
       updateVisualPrice();
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('visual-bestek')?.addEventListener('change', updateVisualPrice);
    });

    document.querySelectorAll('[data-select-menu]').forEach(btn => {
      btn.addEventListener('click', () => selectMenu(btn.dataset.selectMenu, btn));
    });

    function selectMenu(menuKey, clickedBtn) {
      const info = MENU_INFO[menuKey];
      if (!info) return;
      currentMenuKey = menuKey;

      const hiddenInput = document.getElementById('catering-menu-keuze');
      if (hiddenInput) hiddenInput.value = menuKey;

      const menuSelectie = document.getElementById('menu-selectie');
      const interactiveUI = document.getElementById('interactive-dish-selection');
      
      if (menuSelectie && interactiveUI) {
          menuSelectie.classList.add('hidden');
          interactiveUI.classList.remove('hidden');
          interactiveUI.style.animation = 'fadeSlideIn 0.4s ease-out';
      }

      // Populate Sidebar
      const sidebarImg = document.getElementById('sidebar-menu-img');
      const sidebarIcon = document.getElementById('sidebar-menu-icon');
      const cardImg = clickedBtn.closest('.rounded-2xl').querySelector('img');
      
      if (cardImg) {
          sidebarImg.src = cardImg.src;
          sidebarImg.classList.remove('hidden');
          sidebarIcon.classList.add('hidden');
      } else {
          sidebarImg.classList.add('hidden');
          sidebarIcon.classList.remove('hidden');
          // Update icon based on menu
          if(menuKey === 'TUMPENG') sidebarIcon.textContent = 'cake';
          else if(menuKey === 'BROODJES') sidebarIcon.textContent = 'bakery_dining';
          else sidebarIcon.textContent = 'restaurant';
      }

      document.getElementById('sidebar-menu-subtitle').textContent = info.label.split('—')[1] ? info.label.split('—')[1].trim() : info.label;
      document.getElementById('sidebar-menu-title').textContent = info.label.split('—')[0].trim();
      document.getElementById('sidebar-menu-price').textContent = info.price.split(' ')[0];

      // Describe items
      const cMenu = CATERING_MENUS[menuKey];
      const descUl = document.getElementById('sidebar-menu-desc');
      if (cMenu && descUl) {
          descUl.innerHTML = cMenu.items.map(i => `
             <li class="flex items-start gap-2">
               <span class="material-symbols-outlined text-primary text-[16px] mt-0.5">check</span>
               <span>${i.name}</span>
             </li>
          `).join('');
      } else if (descUl) {
          descUl.innerHTML = `<li class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-[16px] mt-0.5">info</span><span>${info.label}</span></li>`;
      }

      const persInput = document.getElementById('visual-personen');
      if (persInput) {
        persInput.min = info.minPersons;
        persInput.value = info.minPersons;
      }

      const bestekContainer = document.getElementById('visual-bestek-section');
      if (['A', 'B', 'C', 'TUMPENG'].includes(menuKey)) {
        bestekContainer.classList.remove('hidden');
      } else {
        bestekContainer.classList.add('hidden');
        document.getElementById('visual-bestek').checked = false;
      }

      // Hide all sections first
      document.getElementById('visual-basis-section').classList.add('hidden');
      document.getElementById('visual-vlees-section').classList.add('hidden');
      document.getElementById('visual-groenten-section').classList.add('hidden');
      document.getElementById('visual-snacks-section').classList.add('hidden');
      document.getElementById('visual-inclusief-section').classList.add('hidden');

      if (info.basis === 0 && info.vlees === 0 && info.groenten === 0 && !info.snacks) {
         // No dish selection needed
      } else {
          if (menuKey === 'BORRELHAPJES') {
             document.getElementById('visual-snacks-section').classList.remove('hidden');
             renderVisualDishChoices('visual-snacks-choices', DISHES.snacks, 99, 'snacks');
             document.getElementById('visual-snacks-counter').textContent = '0 geselecteerd';
          } else {
             if (info.basis > 0) {
                 document.getElementById('visual-basis-section').classList.remove('hidden');
                 document.getElementById('visual-basis-rule').textContent = `Kies ${info.basis}`;
                 renderVisualDishChoices('visual-basis-choices', DISHES.basis, info.basis, 'basis');
             }
             if (info.vlees > 0) {
                 document.getElementById('visual-vlees-section').classList.remove('hidden');
                 document.getElementById('visual-vlees-rule').textContent = `Kies ${info.vlees}`;
                 renderVisualDishChoices('visual-vlees-choices', DISHES.vlees, info.vlees, 'vlees');
             }
             if (info.groenten > 0) {
                 document.getElementById('visual-groenten-section').classList.remove('hidden');
                 document.getElementById('visual-groenten-rule').textContent = `Kies ${info.groenten}`;
                 renderVisualDishChoices('visual-groenten-choices', DISHES.groenten, info.groenten, 'groenten');
             }
             
             // Inclusief
             const incSection = document.getElementById('visual-inclusief-section');
             const incItems = document.getElementById('visual-inclusief-items');
             incSection.classList.remove('hidden');
             
             let inclusiefHtml = `
                <div class="bg-surface-variant/30 rounded-xl p-3 flex items-center gap-3 border border-secondary/10">
                   <div class="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 shadow-sm"><img src="img/placeholder_vega_1780398987858.png" class="w-full h-full object-cover"></div>
                   <div class="font-label-md text-label-md text-on-surface">Atjar</div>
                </div>
                <div class="bg-surface-variant/30 rounded-xl p-3 flex items-center gap-3 border border-secondary/10">
                   <div class="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 shadow-sm"><img src="img/placeholder_snack_1780399002346.png" class="w-full h-full object-cover"></div>
                   <div class="font-label-md text-label-md text-on-surface">Kroepoek</div>
                </div>
             `;
             incItems.innerHTML = inclusiefHtml;
          }
      }
      
      updateVisualPrice();
      interactiveUI.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function clearMenuSelection() {
      currentMenuKey = null;
      document.getElementById('catering-menu-keuze').value = '';

      const menuSelectie = document.getElementById('menu-selectie');
      const interactiveUI = document.getElementById('interactive-dish-selection');
      const formSection = document.getElementById('catering-form');
      
      if (menuSelectie && interactiveUI) {
          interactiveUI.classList.add('hidden');
          formSection.classList.add('hidden');
          menuSelectie.classList.remove('hidden');
          menuSelectie.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function proceedToCheckout() {
       // Check if requirements are met
       const info = MENU_INFO[currentMenuKey];
       if (info) {
           let valid = true;
           let errors = [];
           if (info.basis > 0) {
               const checked = document.querySelectorAll('.dish-checkbox[data-category="basis"]:checked').length;
               if(checked < info.basis) { valid = false; errors.push(`Kies nog ${info.basis - checked} basisgerecht(en).`); }
           }
           if (info.vlees > 0) {
               const checked = document.querySelectorAll('.dish-checkbox[data-category="vlees"]:checked').length;
               if(checked < info.vlees) { valid = false; errors.push(`Kies nog ${info.vlees - checked} vleesgerecht(en).`); }
           }
           if (info.groenten > 0) {
               const checked = document.querySelectorAll('.dish-checkbox[data-category="groenten"]:checked').length;
               if(checked < info.groenten) { valid = false; errors.push(`Kies nog ${info.groenten - checked} groentegerecht(en).`); }
           }
           if (info.snacks && info.snacks > 0) {
               const checked = document.querySelectorAll('.dish-checkbox[data-category="snacks"]:checked').length;
               if(checked < info.snacks) { valid = false; errors.push(`Kies minimaal ${info.snacks} snacks. (Nog ${info.snacks - checked} te gaan)`); }
           }
           
           if (!valid) {
               alert("Maak uw menu compleet:\\n- " + errors.join('\\n- '));
               return;
           }
       }
       
       // Copy visual persons and bestek to actual form inputs
       const formPersonen = document.getElementById('catering-personen');
       const formBestek = document.getElementById('catering-bestek');
       if (formPersonen) formPersonen.value = document.getElementById('visual-personen').value;
       if (formBestek) formBestek.checked = document.getElementById('visual-bestek').checked;

       // Show form, scroll
       const interactiveUI = document.getElementById('interactive-dish-selection');
       const formSection = document.getElementById('catering-form');
       
       interactiveUI.classList.add('hidden');
       formSection.classList.remove('hidden');
       formSection.style.animation = 'fadeSlideIn 0.4s ease-out';
       formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
