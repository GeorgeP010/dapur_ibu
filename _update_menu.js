const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

const newMenuData = `const MENU_DATA = {
  favorieten: {
    label: 'Favorieten',
    items: [
      { id: 's1', name: 'Nasi Rames (witte rijst)', price: 13.00, desc: '2 soorten vlees, 3 soorten groentegerechten naar keuze + 1 ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'sa1', name: 'Saté Ayam (kip)', price: 6.50, desc: 'Gegrilde kipsaté met huisgemaakte pindasaus.', spicy: 0, tags: ['Noten'], img: 'img/sate_ayam_1780400601631.png' },
      { id: 'sn1', name: 'Loempia Semarang', price: 2.75, desc: 'Krokant gefrituurde loempia.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  snacks: {
    label: 'Snacks (per stuk)',
    items: [
      { id: 'sn1_2', name: 'Loempia Semarang', price: 2.75, desc: 'Krokant gefrituurde loempia.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn3', name: 'Pastei', price: 2.75, desc: 'Gevuld pasteitje met kip/vlees.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn2', name: 'Risolles (Normaal)', price: 2.75, desc: 'Gevuld flensje.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn2_p', name: 'Risolles (Pittig)', price: 2.75, desc: 'Gevuld flensje, pittig gekruid.', spicy: 1, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn4', name: 'Kroket', price: 3.00, desc: 'Indonesische kroket.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn5', name: 'Frikadel Lombok', price: 2.75, desc: 'Pittige frikadel.', spicy: 1, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn10', name: 'Frikadel Jagung', price: 2.75, desc: 'Maiskoekje.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn6', name: 'Martabak', price: 2.75, desc: 'Gevulde Indonesische pannenkoek.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn7', name: 'Bapao Kip', price: 3.00, desc: 'Gestoomd gevuld broodje met kip.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn7_r', name: 'Bapao Rund', price: 3.00, desc: 'Gestoomd gevuld broodje met rundvlees.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn8', name: 'Lemper', price: 2.75, desc: 'Kleefrijst met kip in bananenblad.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  mini_schotels: {
    label: 'Mini-Schotels',
    items: [
      { id: 'ms1', name: 'Mini Nasi Rames', price: 9.00, desc: '1 vlees, 1 groentegerecht naar keuze + 1 ei. Met witte rijst.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'ms2', name: 'Mini Nasi Goreng Rames', price: 10.00, desc: '1 vlees, 1 groentegerecht naar keuze + 1 ei. Met gebakken rijst.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'ms3', name: 'Mini Nasi Goreng Jawa Rames', price: 11.00, desc: '1 vlees, 1 groentegerecht naar keuze + 1 ei. Extra pittig!', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png' }
    ]
  },
  schotels: {
    label: 'Rames Schotels',
    items: [
      { id: 's1_2', name: 'Nasi Rames (witte rijst)', price: 13.00, desc: '2 soorten vlees, 3 soorten groentegerechten naar keuze + 1 ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's2', name: 'Nasi Goreng Rames', price: 13.75, desc: 'Met Nasi, Bami, Mihoen, Nasi Kuning of Lontong. 2 vlees, 3 groenten + 1 ei.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's3', name: 'Nasi Goreng Jawa Rames', price: 14.75, desc: 'Met pittige Nasi of pittige Bami. 2 vlees, 3 groenten + 1 ei.', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's4', name: 'Nasi Rames Vega (witte rijst)', price: 12.75, desc: '5 soorten groentegerechten naar keuze + 1 ei.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's5', name: 'Nasi Goreng Jawa Rames Vega', price: 14.25, desc: 'Met pittige Nasi of pittige Bami. 5 groentegerechten + 1 ei.', spicy: 2, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's6', name: 'Lontong Compleet (kleefrijst)', price: 13.75, desc: 'Met kleefrijst, 2 vlees, 3 groenten + 1 ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's7', name: 'Schotel Speciaal (meerprijs)', price: 3.25, desc: 'Meerprijs: met 2 stokjes kipsaté óf kroepoek bij elke schotel.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' }
    ]
  },
  rijsttafels: {
    label: 'Rijsttafel (voor 2 personen)',
    items: [
      { id: 'rt1', name: 'Rijsttafel', price: 38.50, desc: '2 basisgerechten, 3 soorten vlees, 3 soorten groenten naar keuze. Inclusief: 2 eieren, 4 stokjes saté ayam, atjar ketimoen en kroepoek.', spicy: 0, tags: [], img: '' }
    ]
  },
  gerechten_rijst: {
    label: 'Gerechten met Rijst',
    items: [
      { id: 'gr2', name: 'Soto Ayam', price: 9.50, desc: 'Kippensoep met rijst, tauge en gebakken uitjes.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'gr3', name: 'Rawon', price: 11.00, desc: 'Zwarte rundvleessoep met keluak. Oost-Javaans.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'gr4', name: 'Gule Kambing', price: 12.00, desc: 'Lamssoep in kruidige bouillon.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'gr1', name: 'Gado-Gado', price: 9.50, desc: 'Groenten met pindasaus, geserveerd met witte rijst of lontong.', spicy: 0, tags: ['Vegetarisch', 'Noten'], img: 'img/placeholder_vega_1780398987858.png' }
    ]
  },
  broodjes: {
    label: 'Broodjes',
    items: [
      { id: 'b1', name: 'Broodje Vlees', price: 5.50, desc: 'Keuze uit alle vleesgerechten.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'b2', name: 'Broodje Vega', price: 5.00, desc: 'Keuze uit alle groentegerechten.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'b3', name: 'Broodje Garnalen', price: 6.25, desc: 'Met garnalen.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  basis: {
    label: 'Basis (per 100 gram)',
    items: [
      { id: 'bg1', name: 'Witte rijst', price: 1.50, desc: 'Witte rijst.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg2', name: 'Lontong', price: 1.75, desc: 'Compacte rijst (kleefrijst).', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg4', name: 'Nasi', price: 1.95, desc: 'Gebakken rijst.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg6', name: 'Bami', price: 1.95, desc: 'Gebakken noodles.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg8', name: 'Mihoen', price: 1.95, desc: 'Gebakken rijstvermicelli.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg3', name: 'Nasi kuning', price: 1.75, desc: 'Gele rijst met kurkuma.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg5', name: 'Nasi Jawa', price: 2.00, desc: 'Gebakken rijst, zeer pikant.', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg7', name: 'Bami Jawa', price: 2.00, desc: 'Gebakken noodles, zeer pikant.', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true }
    ]
  },
  groenten: {
    label: 'Groenten (per 100 gram)',
    items: [
      { id: 'g1', name: 'Sajoer Lodeh', price: 2.35, desc: 'Groenten in kokosbouillon.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g2', name: 'Sambal Goreng Boontjes', price: 2.35, desc: 'Sperziebonen in sambalsaus.', spicy: 1, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g3', name: 'Tahoe Bali', price: 2.50, desc: 'Tofu in Balinese saus.', spicy: 1, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g4', name: 'Tempeh Blado met Pete', price: 2.50, desc: 'Tempeh met petehbonen in blado saus.', spicy: 2, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g5', name: 'Oerap-Oerap', price: 2.75, desc: 'Groenten met geraspte kokos.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g6', name: 'Tempeh Kering', price: 2.75, desc: 'Krokante zoete tempeh.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g7', name: 'Tumis Kacang Panjang', price: 2.75, desc: 'Geroerbakte kousenband.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g8', name: 'Tjaptjoi', price: 2.75, desc: 'Gemengde groenten.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g9', name: 'Terong Belado', price: 2.75, desc: 'Aubergine in pittige saus.', spicy: 2, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g10', name: 'Atjar Ketimoen', price: 2.35, desc: 'Zoetzure komkommer.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g11', name: 'Mais boontjes', price: 2.35, desc: 'Mais met boontjes.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'dv3', name: 'Telor Goreng', price: 1.35, desc: 'Ei in pittige sambalsaus. (Per stuk)', spicy: 1, tags: [], img: 'img/placeholder_vega_1780398987858.png', isWeight: false }
    ]
  },
  vlees: {
    label: 'Vlees (per 100 gram)',
    items: [
      { id: 'k1', name: 'Ayam Cashew', price: 2.95, desc: 'Kip met cashewnoten in een zoet-pittige saus.', spicy: 1, tags: ['Noten'], img: 'img/placeholder_snack_1780399002346.png', isWeight: true },
      { id: 'k2', name: 'Ayam Cashew Ketjap', price: 2.95, desc: 'Kip in zoete ketjapsaus met cashewnoten.', spicy: 0, tags: ['Noten'], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'k3', name: 'Ayam Roedjak', price: 2.95, desc: 'Kip in pittige roejaksaus.', spicy: 2, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'k4', name: 'Ayam Opor', price: 2.95, desc: 'Kip in milde kokossaus.', spicy: 0, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'k5', name: 'Kipfilet Balado', price: 2.95, desc: 'Kipfilet in pittige rode saus.', spicy: 2, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'k6', name: 'Kipfilet Kecap', price: 2.95, desc: 'Kipfilet in zoete ketjapsaus.', spicy: 0, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'r1', name: 'Daging Smoor', price: 2.95, desc: 'Rundvlees gestoofd in zoete ketjapsaus.', spicy: 0, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'r2', name: 'Daging Rendang', price: 2.95, desc: 'Rundvlees langzaam gegaard in rijke kokossaus met kruiden.', spicy: 1, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'r3', name: 'Daging Bali', price: 2.95, desc: 'Rundvlees in Balinese saus met tomaat en kruiden.', spicy: 1, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'r4', name: 'Daging Blado', price: 2.95, desc: 'Rundvlees in pittige rode saus met Spaanse peper.', spicy: 2, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'v1', name: 'Babi Ketjap', price: 2.95, desc: 'Varkensvlees in zoete ketjapsaus.', spicy: 0, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: true },
      { id: 'vi2', name: 'Sambal goreng Oedang Peteh', price: 4.00, desc: 'Garnalen met petehbonen in sambal.', spicy: 2, tags: [], img: 'img/placeholder_vis_1780399025403.png', isWeight: true },
      { id: 'sa1_2', name: 'Sate ayam', price: 6.50, desc: 'Gegrilde kipsaté met huisgemaakte pindasaus. (4 stuks)', spicy: 0, tags: ['Noten'], img: 'img/sate_ayam_1780400601631.png', isWeight: false },
      { id: 'sa2', name: 'Sate kambing', price: 8.00, desc: 'Gegrilde lams saté met ketjapsaus. (4 stuks)', spicy: 0, tags: [], img: 'img/placeholder_vlees_1780398974766.png', isWeight: false }
    ]
  },
  kroepoek: {
    label: 'Kroepoek',
    items: [
      { id: 'kr1', name: 'Emping', price: 2.50, desc: 'Vegetarische kroepoek van melindjonoot.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr2', name: 'Kerupuk Udang', price: 2.50, desc: 'Garnalenkroepoek.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr3', name: 'Borrel Kerupuk', price: 2.50, desc: 'Kleine kroepoekjes voor bij de borrel.', spicy: 0, tags: [], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  sambal: {
    label: 'Sambal',
    items: [
      { id: 'sb1', name: 'Sambal Bajak', price: 5.50, desc: 'Huisgemaakte sambal.', spicy: 2, tags: ['Vegetarisch'], img: 'img/placeholder_vega_1780398987858.png' },
      { id: 'sb2', name: 'Sambal Terasi', price: 6.50, desc: 'Sambal met garnalenpasta.', spicy: 2, tags: [], img: 'img/placeholder_vega_1780398987858.png' }
    ]
  },
  drinken: {
    label: 'Dranken',
    items: [
      { id: 'dr1', name: 'Teh Botol (IJsthee) - 330ml', price: 2.50, desc: 'Verfrissende Indonesische ijsthee, zoet en licht.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr2', name: 'Es Jeruk (Sinaasappelsap) - 330ml', price: 3.00, desc: 'Vers geperst sinaasappelsap met ijs.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr3', name: 'Bier (Bintang) - 330ml', price: 3.50, desc: 'Indonesisch pilsener, koud geserveerd.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr4', name: 'Frisdrank - 330ml', price: 2.00, desc: 'Keuze uit Cola, Fanta, Sprite.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png', isCustom: true },
      { id: 'dr5', name: 'Water', price: 1.50, desc: 'Plat of bruisend mineraalwater.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr6', name: 'Kopi Tubruk (Indonesische Koffie)', price: 2.50, desc: 'Sterke Indonesische koffie, ongefiltreerd.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' }
    ]
  },
  desserts: {
    label: 'Desserts',
    items: [
      { id: 'ds1', name: 'IJs Tjendol', price: 4.00, desc: 'Kokosmelk met gula melaka en groene cendol-jelly.', spicy: 0, tags: [], img: 'img/ijs_tjendol_1780313005672.png' },
      { id: 'ds2', name: 'IJs Kelapa Muda', price: 4.25, desc: 'IJs met jonge kokosnoot.', spicy: 0, tags: [], img: 'img/placeholder_dessert_1780399046308.png' },
      { id: 'ds3', name: 'IJs Tjampur', price: 4.25, desc: 'Gemengd ijs dessert.', spicy: 0, tags: [], img: 'img/placeholder_dessert_1780399046308.png' }
    ]
  }
};`;

const newCatIcons = `  const catIcons = {
    favorieten: 'favorite', snacks: 'tapas', mini_schotels: 'lunch_dining',
    schotels: 'dinner_dining', rijsttafels: 'table_restaurant', gerechten_rijst: 'ramen_dining',
    broodjes: 'bakery_dining', basis: 'rice_bowl', groenten: 'eco',
    vlees: 'kebab_dining', kroepoek: 'cookie', sambal: 'local_fire_department',
    drinken: 'local_cafe', desserts: 'icecream'
  };`;

const newShortLabels = `  const shortLabels = {
    favorieten: 'Favorieten', snacks: 'Snacks', mini_schotels: 'Mini-Schotels',
    schotels: 'Schotels', rijsttafels: 'Rijsttafel', gerechten_rijst: 'Rijstgerechten',
    broodjes: 'Broodjes', basis: 'Basis', groenten: 'Groenten',
    vlees: 'Vlees', kroepoek: 'Kroepoek', sambal: 'Sambal',
    drinken: 'Dranken', desserts: 'Desserts'
  };`;

const newCatGroups = `  const catGroups = [
    { header: 'Uitgelicht', icon: 'star', cats: ['favorieten', 'snacks', 'broodjes'] },
    { header: 'Maaltijden', icon: 'dinner_dining', cats: ['mini_schotels', 'schotels', 'rijsttafels', 'gerechten_rijst'] },
    { header: 'Losse Gerechten', icon: 'kitchen', cats: ['basis', 'groenten', 'vlees'] },
    { header: 'Extras & Drank', icon: 'add_circle', cats: ['kroepoek', 'sambal', 'drinken', 'desserts'] }
  ];`;

// Replace MENU_DATA
content = content.replace(/const MENU_DATA = \{[\s\S]*?\n\};\n\n\/\/ ========================\n\/\/ CATERING DATA/, newMenuData + '\n\n// ========================\n// CATERING DATA');

// Replace catIcons
content = content.replace(/const catIcons = \{[\s\S]*?\n  \};\n/, newCatIcons + '\n');

// Replace shortLabels
content = content.replace(/const shortLabels = \{[\s\S]*?\n  \};\n/, newShortLabels + '\n');

// Replace catGroups
content = content.replace(/const catGroups = \[[\s\S]*?\n  \];\n/, newCatGroups + '\n');

fs.writeFileSync(filePath, content);
console.log('MENU_DATA successfully updated.');
