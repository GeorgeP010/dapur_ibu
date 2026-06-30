const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'catering.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Change title
content = content.replace("<title>Catering — Dapur Ibu | Authentieke Indonesische Keuken</title>", "<title>Catering Menu's — Dapur Ibu | Authentieke Indonesische Keuken</title>");

// 2. Betaalmethodes
const oldBetaal = `<select id="catering-betaal" name="betaalmethode" class="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none cursor-pointer">
                <option value="ideal">iDEAL</option>
                <option value="contant">Contant bij bezorging</option>
                <option value="pin">Pin bij bezorging</option>
                <option value="rekening">Op rekening</option>
              </select>`;

const newBetaal = `<select id="catering-betaal" name="betaalmethode" class="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none cursor-pointer">
                <option value="ideal">Direct betalen (iDEAL)</option>
                <option value="tikkie">Betalen via Tikkie (2 dagen voor levering)</option>
                <option value="contant">Contant bij levering</option>
              </select>`;

content = content.replace(oldBetaal, newBetaal);

// 3. Grid for Menu Cards
// Replace the big flex container with a grid layout
const menuCardsRegex = /<!-- Menu Cards List \(Luxury Toko Manisan Style\) -->[\s\S]*?<\/div>    <\/div>\n  <\/section>/;

const newMenuCards = `<!-- Menu Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">

      <!-- ============ MENU A ============ -->
      <div class="bg-rice-paper rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-secondary/10 flex flex-col transition-all duration-300 card-hover group h-full">
        <div class="aspect-video relative overflow-hidden shrink-0">
          <img src="img/menu_a_catering.png" alt="Menu A Klassiek Basis" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4 gap-2">
            <div>
              <p class="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">Klassiek Basis</p>
              <h3 class="font-headline-sm text-headline-sm text-on-surface" style="font-family: 'Playfair Display';">Menu A</h3>
            </div>
            <div class="text-right bg-primary/10 px-3 py-1.5 rounded-lg shrink-0">
              <span class="font-headline-sm text-headline-sm text-primary" style="font-family: 'Playfair Display';">€15,50</span>
              <span class="font-label-md text-[10px] text-on-surface-variant block">/persoon</span>
            </div>
          </div>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
            1 basis (Witte rijst), 2 vlees, 2 groenten p.p. Inclusief atjar en kroepoek.
          </p>
          
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-secondary text-[16px]">group</span>
            <span class="font-label-md text-label-md text-secondary">Vanaf 25 p.</span>
          </div>

          <button type="button" data-select-menu="A" class="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 mt-auto">
            Selecteer
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- ============ MENU B ============ -->
      <div class="bg-rice-paper rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-secondary/10 flex flex-col transition-all duration-300 card-hover group h-full">
        <div class="aspect-video relative overflow-hidden shrink-0">
          <img src="img/menu_b_catering.png" alt="Menu B Uitgebreid Genieten" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4 gap-2">
            <div>
              <p class="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">Uitgebreid Genieten</p>
              <h3 class="font-headline-sm text-headline-sm text-on-surface" style="font-family: 'Playfair Display';">Menu B</h3>
            </div>
            <div class="text-right bg-primary/10 px-3 py-1.5 rounded-lg shrink-0">
              <span class="font-headline-sm text-headline-sm text-primary" style="font-family: 'Playfair Display';">€17,50</span>
              <span class="font-label-md text-[10px] text-on-surface-variant block">/persoon</span>
            </div>
          </div>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
            2 basis, 2 vlees, 2 groenten, 1 kipsaté p.p. Inclusief atjar en kroepoek.
          </p>
          
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-secondary text-[16px]">group</span>
            <span class="font-label-md text-label-md text-secondary">Vanaf 20 p.</span>
          </div>

          <button type="button" data-select-menu="B" class="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 mt-auto">
            Selecteer
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- ============ MENU C ============ -->
      <div class="bg-rice-paper rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border-2 border-sunset-orange/40 flex flex-col transition-all duration-300 relative group h-full transform scale-[1.02]">
        <div class="absolute top-4 left-0 z-10 bg-sunset-orange text-white font-label-md text-[10px] px-3 py-1 rounded-r-full shadow-md flex items-center gap-1 uppercase tracking-wider">
          <span class="material-symbols-outlined text-[14px] icon-filled">star</span> Populair
        </div>
        <div class="aspect-video relative overflow-hidden shrink-0">
          <img src="img/menu_c_catering.png" alt="Menu C Luxe Rijsttafel" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4 gap-2">
            <div>
              <p class="font-label-md text-label-md text-sunset-orange uppercase tracking-wider mb-1">Luxe Rijsttafel</p>
              <h3 class="font-headline-sm text-headline-sm text-on-surface" style="font-family: 'Playfair Display';">Menu C</h3>
            </div>
            <div class="text-right bg-sunset-orange/10 px-3 py-1.5 rounded-lg shrink-0">
              <span class="font-headline-sm text-headline-sm text-sunset-orange" style="font-family: 'Playfair Display';">€21,50</span>
              <span class="font-label-md text-[10px] text-on-surface-variant block">/persoon</span>
            </div>
          </div>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
            2 basis, 3 vlees, 3 groenten, 2 kipsaté p.p. Inclusief atjar en kroepoek.
          </p>
          
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-sunset-orange text-[16px]">group</span>
            <span class="font-label-md text-label-md text-sunset-orange">Vanaf 10 p.</span>
          </div>

          <button type="button" data-select-menu="C" class="w-full inline-flex items-center justify-center gap-2 bg-sunset-orange text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-sunset-orange/90 transition-all duration-300 mt-auto">
            Selecteer
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- ============ TUMPENG ============ -->
      <div class="bg-rice-paper rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-secondary/10 flex flex-col transition-all duration-300 card-hover group h-full">
        <div class="aspect-video relative overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
          <!-- Placeholder until Tumpeng image is available -->
          <span class="material-symbols-outlined text-primary/30 text-[64px]">cake</span>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4 gap-2">
            <div>
              <p class="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">Feestelijke Kegelrijst</p>
              <h3 class="font-headline-sm text-headline-sm text-on-surface" style="font-family: 'Playfair Display';">Tumpeng</h3>
            </div>
            <div class="text-right bg-primary/10 px-3 py-1.5 rounded-lg shrink-0">
              <span class="font-headline-sm text-headline-sm text-primary" style="font-family: 'Playfair Display';">€22,50</span>
              <span class="font-label-md text-[10px] text-on-surface-variant block">/persoon</span>
            </div>
          </div>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
            Gele rijst kegel omringd met Ayam Goreng, Tempeh Kering, Oerap-Oerap, Dadar Telor, Frikadel Jawa en Rendang.
          </p>
          
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-secondary text-[16px]">group</span>
            <span class="font-label-md text-label-md text-secondary">Vanaf 20 p.</span>
          </div>

          <button type="button" data-select-menu="TUMPENG" class="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 mt-auto">
            Selecteer
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- ============ BROODJES ============ -->
      <div class="bg-rice-paper rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-secondary/10 flex flex-col transition-all duration-300 card-hover group h-full">
        <div class="aspect-video relative overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
          <span class="material-symbols-outlined text-primary/30 text-[64px]">bakery_dining</span>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4 gap-2">
            <div>
              <p class="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">Diverse Broodjes</p>
              <h3 class="font-headline-sm text-headline-sm text-on-surface" style="font-family: 'Playfair Display';">Broodjes</h3>
            </div>
            <div class="text-right bg-primary/10 px-3 py-1.5 rounded-lg shrink-0">
              <span class="font-headline-sm text-headline-sm text-primary" style="font-family: 'Playfair Display';">€5,50</span>
              <span class="font-label-md text-[10px] text-on-surface-variant block">/persoon</span>
            </div>
          </div>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
            Een mix van warme en verse broodjes (vlees en vega), warm geleverd voor uw evenement of meeting.
          </p>
          
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-secondary text-[16px]">group</span>
            <span class="font-label-md text-label-md text-secondary">Vanaf 50 p.</span>
          </div>

          <button type="button" data-select-menu="BROODJES" class="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 mt-auto">
            Selecteer
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

    </div>
  </section>`;

content = content.replace(menuCardsRegex, newMenuCards);

// 4. Update the MENU_INFO in catering.html to match app.js
const oldMenuInfo = `const MENU_INFO = {
      A: { label: 'Menu A — Klassiek Basis', price: '€15,50 p.p.', minPersons: 25, basis: 1, vlees: 2, groenten: 2 },
      B: { label: 'Menu B — Uitgebreid Genieten', price: '€17,50 p.p.', minPersons: 20, basis: 2, vlees: 2, groenten: 2 },
      C: { label: 'Menu C — Luxe Rijsttafel', price: '€21,50 p.p.', minPersons: 10, basis: 2, vlees: 3, groenten: 3 }
    };`;

const newMenuInfo = `const MENU_INFO = {
      A: { label: 'Menu A — Klassiek Basis', price: '€15,50 p.p.', minPersons: 25, basis: 0, vlees: 2, groenten: 2, basisFixed: 'Witte Rijst' },
      B: { label: 'Menu B — Uitgebreid Genieten', price: '€17,50 p.p.', minPersons: 20, basis: 2, vlees: 2, groenten: 2 },
      C: { label: 'Menu C — Luxe Rijsttafel', price: '€21,50 p.p.', minPersons: 10, basis: 2, vlees: 3, groenten: 3 },
      TUMPENG: { label: 'Tumpeng — Feestelijke Kegelrijst', price: '€22,50 p.p.', minPersons: 20, basis: 0, vlees: 0, groenten: 0, basisFixed: 'Vast Menu (Geen keuze nodig)' },
      BROODJES: { label: 'Broodjes Catering', price: '€5,50 p.p.', minPersons: 50, basis: 0, vlees: 0, groenten: 0, basisFixed: 'Mix van warme broodjes' }
    };`;

content = content.replace(oldMenuInfo, newMenuInfo);

// 5. Update render Dish Choices logic to handle basisFixed
const selectMenuRegex = /if \(dishSection\) \{[\s\S]*?gekuzen\`;\n      \}/;
const newSelectMenu = `if (dishSection) {
        if (info.basisFixed) {
          // If the menu has no choices (fixed) or fixed basis
          dishSection.classList.remove('hidden');
          dishSection.style.animation = 'fadeSlideIn 0.4s ease-out';
          
          if (info.vlees === 0 && info.groenten === 0) {
             // Fully fixed menu (like Tumpeng/Broodjes)
             dishSection.innerHTML = \`<div class="bg-primary/10 text-primary p-4 rounded-xl font-label-md flex items-center gap-2"><span class="material-symbols-outlined">info</span> \${info.basisFixed}. U hoeft geen gerechten te kiezen.</div>\`;
          } else {
             // Menu A (fixed basis, choice of meat/veg)
             dishSection.innerHTML = \`<div class="bg-primary/10 text-primary p-4 rounded-xl font-label-md flex items-center gap-2 mb-4"><span class="material-symbols-outlined">info</span> Basisgerecht staat vast op \${info.basisFixed}.</div>
             <div id="vlees-choices-container" class="bg-surface-container/30 rounded-xl p-4 border border-secondary/10 mb-4">
               <div class="flex items-center justify-between mb-3">
                 <span class="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
                   <span class="material-symbols-outlined text-[16px] text-primary">kebab_dining</span> Vleesgerechten
                 </span>
                 <span class="font-label-md text-label-md text-on-surface-variant" id="vlees-counter">0 / \${info.vlees} gekozen</span>
               </div>
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="vlees-choices"></div>
             </div>
             <div id="groenten-choices-container" class="bg-surface-container/30 rounded-xl p-4 border border-secondary/10">
               <div class="flex items-center justify-between mb-3">
                 <span class="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
                   <span class="material-symbols-outlined text-[16px] text-paddy-green">eco</span> Groentegerechten
                 </span>
                 <span class="font-label-md text-label-md text-on-surface-variant" id="groenten-counter">0 / \${info.groenten} gekozen</span>
               </div>
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="groenten-choices"></div>
             </div>\`;
             renderDishChoices('vlees-choices', DISHES.vlees, info.vlees, 'vlees');
             renderDishChoices('groenten-choices', DISHES.groenten, info.groenten, 'groenten');
          }
        } else {
          // Standard menu with choices
          dishSection.innerHTML = \`<div class="flex items-center gap-2 mb-1">
              <span class="material-symbols-outlined text-primary text-[20px]">checklist</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface text-[16px]" style="font-family: 'Playfair Display'">Kies uw gerechten</h3>
            </div>
            <div class="bg-surface-container/30 rounded-xl p-4 border border-secondary/10 mb-4">
              <div class="flex items-center justify-between mb-3">
                <span class="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-primary">rice_bowl</span> Basisgerechten
                </span>
                <span class="font-label-md text-label-md text-on-surface-variant" id="basis-counter">0 / \${info.basis} gekozen</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="basis-choices"></div>
            </div>
            <div class="bg-surface-container/30 rounded-xl p-4 border border-secondary/10 mb-4">
              <div class="flex items-center justify-between mb-3">
                <span class="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-primary">kebab_dining</span> Vleesgerechten
                </span>
                <span class="font-label-md text-label-md text-on-surface-variant" id="vlees-counter">0 / \${info.vlees} gekozen</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="vlees-choices"></div>
            </div>
            <div class="bg-surface-container/30 rounded-xl p-4 border border-secondary/10">
              <div class="flex items-center justify-between mb-3">
                <span class="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-paddy-green">eco</span> Groentegerechten
                </span>
                <span class="font-label-md text-label-md text-on-surface-variant" id="groenten-counter">0 / \${info.groenten} gekozen</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="groenten-choices"></div>
            </div>\`;
          
          dishSection.classList.remove('hidden');
          dishSection.style.animation = 'fadeSlideIn 0.4s ease-out';
          renderDishChoices('basis-choices', DISHES.basis, info.basis, 'basis');
          renderDishChoices('vlees-choices', DISHES.vlees, info.vlees, 'vlees');
          renderDishChoices('groenten-choices', DISHES.groenten, info.groenten, 'groenten');
        }
      }`;

content = content.replace(selectMenuRegex, newSelectMenu);

fs.writeFileSync(filePath, content);
console.log('Catering page patched successfully.');
