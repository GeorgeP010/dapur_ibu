const fs = require('fs');
let content = fs.readFileSync('js/app.js', 'utf8');

const replacements = [
  // Snacks
  ["id: 'sa1', name: 'Saté Ayam (kip)', price: 6.50, desc: 'Gegrilde kipsaté met huisgemaakte pindasaus.', spicy: 0, tags: ['Noten', 'Gluten', \"Pinda's\"]", "id: 'sa1', name: 'Saté Ayam (kip)', price: 6.50, desc: 'Gegrilde kipsaté met huisgemaakte pindasaus.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten', \"Pinda's\"]"],
  ["id: 'sn1_2', name: 'Loempia Semarang', price: 2.75, desc: 'Krokante Indonesische loempia gevuld met kip, groenten en bamboescheuten.', spicy: 0, tags: ['Gluten']", "id: 'sn1_2', name: 'Loempia Semarang', price: 2.75, desc: 'Krokante Indonesische loempia gevuld met kip, groenten en bamboescheuten.', spicy: 0, tags: ['Kip', 'Gluten']"],
  ["id: 'sn3', name: 'Pastei', price: 2.75, desc: 'Gebakken Indonesische pastei met een rijke vulling van kip, groenten en authentieke kruiden, omhuld door een heerlijk krokante bladerdeegkorst.', spicy: 0, tags: ['Gluten', 'Eieren', 'Selderij']", "id: 'sn3', name: 'Pastei', price: 2.75, desc: 'Gebakken Indonesische pastei met een rijke vulling van kip, groenten en authentieke kruiden, omhuld door een heerlijk krokante bladerdeegkorst.', spicy: 0, tags: ['Kip', 'Gluten', 'Eieren', 'Selderij']"],
  ["id: 'sn2', name: 'Risolles (Normaal)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten.', spicy: 0, tags: ['Gluten', 'Melk', 'Eieren', 'Selderij']", "id: 'sn2', name: 'Risolles (Normaal)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten.', spicy: 0, tags: ['Kip', 'Gluten', 'Melk', 'Eieren', 'Selderij']"],
  ["id: 'sn2_p', name: 'Risolles (Pittig)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten, pittig gekruid.', spicy: 1, tags: ['Gluten', 'Melk', 'Eieren', 'Selderij']", "id: 'sn2_p', name: 'Risolles (Pittig)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten, pittig gekruid.', spicy: 1, tags: ['Kip', 'Gluten', 'Melk', 'Eieren', 'Selderij']"],
  ["id: 'sn4', name: 'Kroket', price: 3.00, desc: 'Krokante kroket gevuld met gekruide kip en aardappel.', spicy: 0, tags: ['Soja', 'Eieren', 'Selderij']", "id: 'sn4', name: 'Kroket', price: 3.00, desc: 'Krokante kroket gevuld met gekruide kip en aardappel.', spicy: 0, tags: ['Kip', 'Soja', 'Eieren', 'Selderij']"],
  ["id: 'sn7', name: 'Bapao Kip', price: 3.00, desc: 'Gestoomd gevuld broodje met kip.', spicy: 0, tags: ['Gluten', 'Melk']", "id: 'sn7', name: 'Bapao Kip', price: 3.00, desc: 'Gestoomd gevuld broodje met kip.', spicy: 0, tags: ['Kip', 'Gluten', 'Melk']"],
  ["id: 'sn7_p', name: 'Bapao Kip Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittige kip.', spicy: 1, tags: ['Gluten', 'Melk']", "id: 'sn7_p', name: 'Bapao Kip Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittige kip.', spicy: 1, tags: ['Kip', 'Gluten', 'Melk']"],
  ["id: 'sn7_r', name: 'Bapao Rund', price: 3.00, desc: 'Gestoomd gevuld broodje met rundvlees.', spicy: 0, tags: ['Gluten', 'Melk']", "id: 'sn7_r', name: 'Bapao Rund', price: 3.00, desc: 'Gestoomd gevuld broodje met rundvlees.', spicy: 0, tags: ['Rund', 'Gluten', 'Melk']"],
  ["id: 'sn7_rp', name: 'Bapao Rund Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittig rundvlees.', spicy: 1, tags: ['Gluten', 'Melk']", "id: 'sn7_rp', name: 'Bapao Rund Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittig rundvlees.', spicy: 1, tags: ['Rund', 'Gluten', 'Melk']"],
  ["id: 'sn8', name: 'Lemper', price: 2.75, desc: 'Kleefrijstrol gevuld met gekruide kip.', spicy: 0, tags: ['Eieren']", "id: 'sn8', name: 'Lemper', price: 2.75, desc: 'Kleefrijstrol gevuld met gekruide kip.', spicy: 0, tags: ['Kip', 'Eieren']"],

  // Gerechten met Rijst
  ["id: 'gr2', name: 'Soto Ayam', price: 9.50, desc: 'Kippensoep met rijst, tauge en gebakken uitjes.', spicy: 0, tags: ['Eieren']", "id: 'gr2', name: 'Soto Ayam', price: 9.50, desc: 'Kippensoep met rijst, tauge en gebakken uitjes.', spicy: 0, tags: ['Kip', 'Eieren']"],
  ["id: 'gr3', name: 'Rawon', price: 11.00, desc: 'Zwarte rundvleessoep met keluak. Oost-Javaans.', spicy: 0, tags: []", "id: 'gr3', name: 'Rawon', price: 11.00, desc: 'Zwarte rundvleessoep met keluak. Oost-Javaans.', spicy: 0, tags: ['Rund']"],

  // Vleesgerechten
  ["id: 'k1', name: 'Ayam Cashew', price: 2.95, desc: 'Kip met cashewnoten in een zoet-pittige saus.', spicy: 0, tags: ['Noten', 'Gluten', 'Schaaldieren']", "id: 'k1', name: 'Ayam Cashew', price: 2.95, desc: 'Kip met cashewnoten in een zoet-pittige saus.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten', 'Schaaldieren']"],
  ["id: 'k2', name: 'Ayam Cashew Ketjap', price: 2.95, desc: 'Kip in zoete ketjapsaus met cashewnoten.', spicy: 0, tags: ['Noten', 'Gluten']", "id: 'k2', name: 'Ayam Cashew Ketjap', price: 2.95, desc: 'Kip in zoete ketjapsaus met cashewnoten.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten']"],
  ["id: 'k3', name: 'Ayam Roedjak', price: 2.95, desc: 'Kip in pittige roejaksaus.', spicy: 2, tags: []", "id: 'k3', name: 'Ayam Roedjak', price: 2.95, desc: 'Kip in pittige roejaksaus.', spicy: 2, tags: ['Kip']"],
  ["id: 'k4', name: 'Ayam Opor', price: 2.95, desc: 'Kip in milde kokossaus met kemiri.', spicy: 0, tags: ['Noten']", "id: 'k4', name: 'Ayam Opor', price: 2.95, desc: 'Kip in milde kokossaus met kemiri.', spicy: 0, tags: ['Kip', 'Noten']"],
  ["id: 'k6', name: 'Ayam Smoor', price: 2.95, desc: 'Kip gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Gluten']", "id: 'k6', name: 'Ayam Smoor', price: 2.95, desc: 'Kip gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Kip', 'Gluten']"],
  ["id: 'r1', name: 'Daging Smoor', price: 2.95, desc: 'Rundvlees gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Gluten']", "id: 'r1', name: 'Daging Smoor', price: 2.95, desc: 'Rundvlees gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Rund', 'Gluten']"],
  ["id: 'r2', name: 'Daging Rendang', price: 2.95, desc: 'Rundvlees langzaam gegaard in rijke kokossaus met kruiden.', spicy: 1, tags: ['Schaaldieren']", "id: 'r2', name: 'Daging Rendang', price: 2.95, desc: 'Rundvlees langzaam gegaard in rijke kokossaus met kruiden.', spicy: 1, tags: ['Rund', 'Schaaldieren']"],
  ["id: 'r3', name: 'Daging Bali', price: 2.95, desc: 'Rundvlees in Balinese saus met tomaat en kruiden.', spicy: 1, tags: []", "id: 'r3', name: 'Daging Bali', price: 2.95, desc: 'Rundvlees in Balinese saus met tomaat en kruiden.', spicy: 1, tags: ['Rund']"],
  ["id: 'r4', name: 'Daging Blado', price: 2.95, desc: 'Rundvlees in pittige rode saus met Spaanse peper.', spicy: 2, tags: ['Schaaldieren']", "id: 'r4', name: 'Daging Blado', price: 2.95, desc: 'Rundvlees in pittige rode saus met Spaanse peper.', spicy: 2, tags: ['Rund', 'Schaaldieren']"],
  ["id: 'v1', name: 'Babi Ketjap', price: 2.95, desc: 'Varkensvlees in zoete ketjapsaus.', spicy: 0, tags: ['Gluten', 'Schaaldieren']", "id: 'v1', name: 'Babi Ketjap', price: 2.95, desc: 'Varkensvlees in zoete ketjapsaus.', spicy: 0, tags: ['Varken', 'Gluten', 'Schaaldieren']"]
];

replacements.forEach(([find, replace]) => {
  content = content.replace(find, replace);
});

fs.writeFileSync('js/app.js', content, 'utf8');
console.log('done');
