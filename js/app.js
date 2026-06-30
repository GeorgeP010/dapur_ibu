/* ============================================
   Dapur Ibu — Shared JavaScript
   Cart system, navigation, ordering logic, UI
   ============================================ */

// ========================
// MENU DATA
// ========================
const MENU_DATA = {
  favorieten: {
    label: 'Favorieten',
    items: [
      { id: 's1', name: 'Nasi Rames (witte rijst)', price: 13.00, desc: '2 soorten vlees, 3 soorten groentegerechten naar keuze + 1 ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'sa1', name: 'Saté Ayam (kip)', price: 6.50, desc: 'Gegrilde kipsaté met huisgemaakte pindasaus.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten', "Pinda's"], img: 'img/Foto\'s/Dapur Ibu_  Sate ayam.jpg' },
      { id: 'sn1', name: 'Loempia Semarang', price: 2.75, desc: 'Krokant gefrituurde loempia.', spicy: 0, tags: ['Gluten'], img: 'img/Foto\'s/Dapur Ibu_  Loempia.jpg' }
    ]
  },
  snacks: {
    label: 'Snacks',
    items: [
      { id: 'sn1_2', name: 'Loempia Semarang', price: 2.75, desc: 'Krokante Indonesische loempia gevuld met kip, groenten en bamboescheuten.', spicy: 0, tags: ['Kip', 'Gluten'], img: 'img/Foto\'s/Dapur Ibu_  Loempia.jpg' },
      { id: 'sn3', name: 'Pastei', price: 2.75, desc: 'Gebakken Indonesische pastei met een rijke vulling van kip, groenten en authentieke kruiden, omhuld door een heerlijk krokante bladerdeegkorst.', spicy: 0, tags: ['Kip', 'Gluten', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Pastei.jpg' },
      { id: 'sn2', name: 'Risolles (Normaal)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten.', spicy: 0, tags: ['Kip', 'Gluten', 'Melk', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Risoles.jpg' },
      { id: 'sn2_p', name: 'Risolles (Pittig)', price: 2.75, desc: 'Een krokante, goudbruin gefrituurde pannenkoekrol gevuld met romige kipragout en groenten, pittig gekruid.', spicy: 1, tags: ['Kip', 'Gluten', 'Melk', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Risoles pedis.jpg' },
      { id: 'sn4', name: 'Kroket', price: 3.00, desc: 'Krokante kroket gevuld met gekruide kip en aardappel.', spicy: 0, tags: ['Kip', 'Soja', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Kroket.jpg' },
      { id: 'sn5', name: 'Frikadel Lombok', price: 2.75, desc: 'Pittige frikadel.', spicy: 1, tags: ['Gluten', 'Eieren'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn10', name: 'Frikadel Jagung', price: 2.75, desc: 'Goudbruin gebakken maïskoekje met authentieke Indonesische kruiden.', spicy: 0, tags: ['Vegetarisch', 'Gluten', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Frikandel jagung.jpg' },
      { id: 'sn6', name: 'Martabak', price: 2.75, desc: 'Krokant gebakken deeg gevuld met ei, gekruid gehakt en Indonesische kruiden.', spicy: 0, tags: ['Gluten', 'Eieren', 'Selderij'], img: 'img/Foto\'s/Dapur Ibu_  Martabak telor.jpg' },
      { id: 'sn7', name: 'Bapao Kip', price: 3.00, desc: 'Gestoomd gevuld broodje met kip.', spicy: 0, tags: ['Kip', 'Gluten', 'Melk'], img: 'img/Foto\'s/Dapur Ibu_  Bapao.jpg' },
      { id: 'sn7_p', name: 'Bapao Kip Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittige kip.', spicy: 1, tags: ['Kip', 'Gluten', 'Melk'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn7_r', name: 'Bapao Rund', price: 3.00, desc: 'Gestoomd gevuld broodje met rundvlees.', spicy: 0, tags: ['Rund', 'Gluten', 'Melk'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn7_rp', name: 'Bapao Rund Pedis', price: 3.00, desc: 'Gestoomd gevuld broodje met pittig rundvlees.', spicy: 1, tags: ['Rund', 'Gluten', 'Melk'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'sn8', name: 'Lemper', price: 2.75, desc: 'Kleefrijstrol gevuld met gekruide kip.', spicy: 0, tags: ['Kip', 'Eieren'], img: 'img/Foto\'s/Dapur Ibu_  Lemper.jpg' }
    ]
  },
  mini_schotels: {
    label: 'Mini-Schotels',
    items: [
      { id: 'ms1', name: 'Mini Nasi Rames', price: 9.00, desc: '1 vlees, 1 groentegerecht naar keuze. Inclusief ei. Met witte rijst.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'ms2', name: 'Mini Nasi Goreng Rames', price: 10.00, desc: '1 vlees, 1 groentegerecht naar keuze. Inclusief ei. Met gebakken rijst.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'ms3', name: 'Mini Nasi Goreng Jawa Rames', price: 11.00, desc: '1 vlees, 1 groentegerecht naar keuze. Inclusief ei. Extra pittig!', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png' }
    ]
  },
  schotels: {
    label: 'Rames Schotels',
    items: [
      { id: 's1_2', name: 'Nasi Rames (witte rijst)', price: 13.00, desc: '2 soorten vlees, 3 soorten groentegerechten naar keuze. Inclusief ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's2', name: 'Nasi Goreng Rames', price: 13.75, desc: 'Met Nasi, Bami, Mihoen, Nasi Kuning of Lontong. 2 vlees, 3 groenten. Inclusief ei.', spicy: 1, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's3', name: 'Nasi Goreng Jawa Rames', price: 14.75, desc: 'Met pittige Nasi of pittige Bami. 2 vlees, 3 groenten. Inclusief ei.', spicy: 2, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's4', name: 'Nasi Rames Vega (witte rijst)', price: 12.75, desc: '5 soorten groentegerechten naar keuze. Inclusief ei.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's5', name: 'Nasi Goreng Jawa Rames Vega', price: 14.25, desc: 'Met pittige Nasi of pittige Bami. 5 groentegerechten. Inclusief ei.', spicy: 2, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's6', name: 'Lontong Compleet (kleefrijst)', price: 13.75, desc: 'Met kleefrijst, 2 vlees, 3 groenten. Inclusief ei.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 's7', name: 'Schotel Speciaal (meerprijs)', price: 3.25, desc: 'Meerprijs: met 2 stokjes kipsaté óf kroepoek bij elke schotel.', spicy: 0, tags: [], img: 'img/placeholder_rijst_1780398963745.png' }
    ]
  },
  rijsttafels: {
    label: 'Rijsttafel (voor 2 personen)',
    items: [
      { id: 'rt1', name: 'Rijsttafel', price: 38.50, desc: '2 basisgerechten, 3 soorten vlees, 3 soorten groenten naar keuze. Inclusief: ei, atjar ketimoen, 4 stokjes saté ayam en kroepoek.', spicy: 0, tags: [], img: '' }
    ]
  },
  gerechten_rijst: {
    label: 'Gerechten met Rijst',
    items: [
      { id: 'gr2', name: 'Soto Ayam', price: 9.50, desc: 'Kippensoep met rijst, tauge en gebakken uitjes.', spicy: 0, tags: ['Kip', 'Eieren'], img: 'img/Foto\'s/Dapur Ibu_  Soto ayam.jpg' },
      { id: 'gr3', name: 'Rawon', price: 11.00, desc: 'Zwarte rundvleessoep met keluak. Oost-Javaans.', spicy: 0, tags: ['Rund'], img: 'img/Foto\'s/Dapur Ibu_  Rawon.jpg' },
      { id: 'gr4', name: 'Gule Kambing', price: 12.00, desc: 'Lamssoep in kruidige bouillon.', spicy: 1, tags: ['Soja'], img: 'img/placeholder_rijst_1780398963745.png' },
      { id: 'gr1', name: 'Gado-Gado', price: 9.50, desc: 'Groenten met pindasaus, geserveerd met witte rijst of lontong.', spicy: 0, tags: ['Vegetarisch', 'Noten', 'Gluten', 'Melk', 'Soja', 'Eieren', "Pinda's", 'Schaaldieren'], img: 'img/placeholder_vega_1780398987858.png' }
    ]
  },
  broodjes: {
    label: 'Broodjes',
    items: [
      { id: 'b1', name: 'Broodje Vlees', price: 5.50, desc: 'Keuze uit alle vleesgerechten.', spicy: 0, tags: ['Gluten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'b2', name: 'Broodje Vega', price: 5.00, desc: 'Keuze uit alle groentegerechten.', spicy: 0, tags: ['Vegetarisch', 'Gluten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'b3', name: 'Broodje Garnalen', price: 6.25, desc: 'Met garnalen.', spicy: 0, tags: ['Gluten', 'Schaaldieren'], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  basis: {
    label: 'Basisgerechten',
    items: [
      { id: 'bg1', name: 'Witte rijst', price: 1.50, desc: 'Luchtige gestoomde rijst.', spicy: 0, tags: ['Vegetarisch'], img: 'img/placeholder_rijst_1780398963745.png', isWeight: true },
      { id: 'bg2', name: 'Lontong', price: 1.75, desc: 'Samengeperste rijst met een zachte structuur en milde smaak.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_Lontong.jpg', isWeight: true },
      { id: 'bg4', name: 'Nasi Goreng', price: 1.95, desc: 'Een smaakvolle Indonesische klassieker van wokgebakken rijst, verse groenten, ei en aromatische kruiden.', spicy: 1, tags: ['Selderij', 'Gluten', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_Nasi goreng.jpg', isWeight: true },
      { id: 'bg6', name: 'Bami Goreng', price: 1.95, desc: 'Indonesische specialiteit van goudbruin gewokte noedels, verse groenten en specerijen.', spicy: 1, tags: ['Gluten'], img: 'img/Foto\'s/Dapur Ibu_ Bami goreng.jpg', isWeight: true },
      { id: 'bg8', name: 'Mihoen', price: 1.95, desc: 'Fijne rijstnoedels, gewokt met verse groenten, ei en kruiden.', spicy: 0, tags: ['Eieren'], img: 'img/Foto\'s/Dapur Ibu_ Mihoen.jpg', isWeight: true },
      { id: 'bg3', name: 'Nasi Kuning', price: 1.75, desc: 'Feestelijke gele rijst, gekleurd met kurkuma en gekookt in kokosmelk.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_Nasi Kuning.jpg', isWeight: true },
      { id: 'bg5', name: 'Nasi Jawa', price: 2.00, desc: 'Gebakken rijst, zeer pikant.', spicy: 2, tags: ['Gluten', 'Selderij', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_Nasi goreng jawa.jpg', isWeight: true },
      { id: 'bg7', name: 'Bami Jawa', price: 2.00, desc: 'Gebakken noodles, zeer pikant.', spicy: 2, tags: ['Gluten', 'Selderij', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_ Bami jawa.jpg', isWeight: true }
    ]
  },
  groenten: {
    label: 'Groentegerechten',
    items: [
      { id: 'g1', name: 'Sajoer Lodeh', price: 2.35, desc: 'Groenten in kokosbouillon.', spicy: 0, tags: ['Vegetarisch', 'Soja'], img: 'img/Foto\'s/Dapur Ibu_ Sayur lodeh.jpg', isWeight: true },
      { id: 'g2', name: 'Sambal Goreng Boontjes', price: 2.35, desc: 'Sperziebonen in sambalsaus.', spicy: 1, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Sambal boontjes.jpg', isWeight: true },
      { id: 'g3', name: 'Tahoe Bali', price: 2.50, desc: 'Tofu in Balinese saus.', spicy: 1, tags: ['Vegetarisch', 'Soja'], img: 'img/Foto\'s/Dapur Ibu_ Tahoe bali.jpg', isWeight: true },
      { id: 'g4', name: 'Tempeh Blado met Pete', price: 2.50, desc: 'Tempeh met petehbonen in blado saus.', spicy: 2, tags: ['Vegetarisch', 'Soja'], img: 'img/Foto\'s/Dapur Ibu_ Tempe blado.jpg', isWeight: true },
      { id: 'g5', name: 'Oerap-Oerap', price: 2.75, desc: 'Groenten met geraspte kokos.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Oerap.jpg', isWeight: true },
      { id: 'g6', name: 'Tempeh Kering', price: 2.75, desc: 'Krokante zoete tempeh.', spicy: 0, tags: ['Vegetarisch', 'Soja'], img: 'img/placeholder_vega_1780398987858.png', isWeight: true },
      { id: 'g7', name: 'Tumis Kacang Panjang', price: 2.75, desc: 'Geroerbakte kousenband.', spicy: 0, tags: ['Vegetarisch', 'Soja'], img: 'img/Foto\'s/Dapur Ibu_ Katjang panjang.jpg', isWeight: true },
      { id: 'g8', name: 'Tjaptjoi', price: 2.75, desc: 'Gemengde groenten.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Tjap tjoy.jpg', isWeight: true },
      { id: 'g9', name: 'Terong Belado', price: 2.75, desc: 'Aubergine in pittige saus.', spicy: 2, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Terong blado.jpg', isWeight: true },
      { id: 'g10', name: 'Atjar Ketimoen', price: 2.35, desc: 'Zoetzure komkommer.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Atjar.jpg', isWeight: true },
      { id: 'g11', name: 'Mais boontjes', price: 2.35, desc: 'Mais met boontjes.', spicy: 0, tags: ['Vegetarisch'], img: 'img/Foto\'s/Dapur Ibu_ Mais boontjes.jpg', isWeight: true },
      { id: 'dv3', name: 'Telor Goreng', price: 1.35, desc: 'Ei in pittige sambalsaus.', spicy: 1, tags: ['Eieren'], img: 'img/Foto\'s/Dapur Ibu_ Telor.jpg', isWeight: false }
    ]
  },
  
  vlees: {
    label: 'Vleesgerechten',
    items: [
      { id: 'k1', name: 'Ayam Cashew', price: 2.95, desc: 'Kip met cashewnoten in een zoet-pittige saus.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_ Kip cashew.jpg', isWeight: true },
      { id: 'k2', name: 'Ayam Cashew Ketjap', price: 2.95, desc: 'Kip in zoete ketjapsaus met cashewnoten.', spicy: 0, tags: ['Kip', 'Noten', 'Gluten'], img: 'img/Foto\'s/Dapur Ibu_ Kip cashew ketjap.jpg', isWeight: true },
      { id: 'k3', name: 'Ayam Roedjak', price: 2.95, desc: 'Kip in pittige roejaksaus.', spicy: 2, tags: ['Kip'], img: 'img/Foto\'s/Dapur Ibu_  Ayam rujak.jpg', isWeight: true },
      { id: 'k4', name: 'Ayam Opor', price: 2.95, desc: 'Kip in milde kokossaus met kemiri.', spicy: 0, tags: ['Kip', 'Noten'], img: 'img/Foto\'s/Dapur Ibu_  Ayam opor.jpg', isWeight: true },
      { id: 'k6', name: 'Ayam Smoor', price: 2.95, desc: 'Kip gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Kip', 'Gluten'], img: 'img/Foto\'s/Dapur Ibu_  Ayam semoor.jpg', isWeight: true },
      { id: 'r1', name: 'Daging Smoor', price: 2.95, desc: 'Rundvlees gestoofd in zoete ketjapsaus.', spicy: 0, tags: ['Rund', 'Gluten'], img: 'img/Foto\'s/Dapur Ibu_Daging Semoor.jpg', isWeight: true },
      { id: 'r2', name: 'Daging Rendang', price: 2.95, desc: 'Rundvlees langzaam gegaard in rijke kokossaus met kruiden.', spicy: 1, tags: ['Rund', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_ Daging rendang.jpg', isWeight: true },
      { id: 'r3', name: 'Daging Bali', price: 2.95, desc: 'Rundvlees in Balinese saus met tomaat en kruiden.', spicy: 1, tags: ['Rund'], img: 'img/Foto\'s/Dapur Ibu_ Daging bali.jpg', isWeight: true },
      { id: 'r4', name: 'Daging Blado', price: 2.95, desc: 'Rundvlees in pittige rode saus met Spaanse peper.', spicy: 2, tags: ['Rund', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_ Daging blado.jpg', isWeight: true },
      { id: 'v1', name: 'Babi Ketjap', price: 2.95, desc: 'Varkensvlees in zoete ketjapsaus.', spicy: 0, tags: ['Varken', 'Gluten', 'Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_  Babi ketjap.jpg', isWeight: true },
      { id: 'vi2', name: 'Sambal goreng Oedang Peteh', price: 4.00, desc: 'Garnalen met petehbonen in sambal.', spicy: 2, tags: ['Schaaldieren'], img: 'img/Foto\'s/Dapur Ibu_ Udang pete.jpg', isWeight: true }
    ]
  },
  kroepoek: {
    label: 'Kroepoek',
    items: [
      { id: 'kr1', name: 'Emping', price: 2.50, desc: 'Vegetarische kroepoek van melindjonoot.', spicy: 0, tags: ['Vegetarisch', 'Gluten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr3', name: 'Borrel Kerupuk', price: 2.50, desc: 'Kleine kroepoekjes voor bij de borrel.', spicy: 0, tags: ['Gluten', 'Schaaldieren'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr4', name: 'Kroepoek Siok', price: 3.00, desc: 'Krokante kroepoek siok.', spicy: 0, tags: ['Gluten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr5', name: 'Emping Blado', price: 4.00, desc: 'Emping met pittige blado saus.', spicy: 1, tags: ['Gluten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr6', name: 'Rempeyek', price: 4.00, desc: 'Krokante pinda- of anchoviskoekjes.', spicy: 0, tags: ['Noten'], img: 'img/placeholder_snack_1780399002346.png' },
      { id: 'kr7', name: 'Udang Mas Pedis', price: 2.25, desc: 'Pittige garnalenkroepoek.', spicy: 1, tags: ['Schaaldieren'], img: 'img/placeholder_snack_1780399002346.png' }
    ]
  },
  sambal: {
    label: 'Sambal',
    items: [
      { id: 'sb1', name: 'Sambal Bajak', price: 5.50, desc: 'Huisgemaakte zoet pittige sambal.', spicy: 2, tags: ['Schaaldieren'], img: 'img/placeholder_vega_1780398987858.png' },
      { id: 'sb2', name: 'Sambal Terasi', price: 6.50, desc: 'Sambal met garnalenpasta.', spicy: 2, tags: ['Schaaldieren'], img: 'img/placeholder_vega_1780398987858.png' }
    ]
  },
  drinken: {
    label: 'Dranken',
    items: [
      { id: 'dr1', name: 'Coca Cola', price: 2.50, desc: 'Coca Cola blikje.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr2', name: 'Coca Cola Zero', price: 2.50, desc: 'Coca Cola Zero blikje.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr3', name: 'Fanta', price: 2.50, desc: 'Fanta blikje.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr4', name: 'Sprite', price: 2.50, desc: 'Sprite blikje.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr5', name: 'Ice Tea Green', price: 2.50, desc: 'Groene ijsthee.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr6', name: 'Spa Blauw', price: 2.00, desc: 'Mineraalwater, plat.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr7', name: 'Spa Rood', price: 2.00, desc: 'Mineraalwater, bruisend.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr8', name: 'Teh Botol', price: 2.50, desc: 'Indonesische ijsthee.', spicy: 0, tags: [], img: 'img/placeholder_drink_1780399060095.png' },
      { id: 'dr9', name: 'Soda Gembira', price: 3.00, desc: 'Frisdrank met gecondenseerde melk en roze siroop.', spicy: 0, tags: ['Melk'], img: 'img/placeholder_drink_1780399060095.png' }
    ]
  },
  desserts: {
    label: 'Desserts',
    items: [
      { id: 'ds1', name: 'Kue Lapis', price: 4.00, desc: 'Traditionele Indonesische laagjestaart.', spicy: 0, tags: [], img: 'img/Foto\'s/Dapur Ibu_  Kue lapis.jpg' },
      { id: 'ds2', name: 'Spekkoek', price: 4.00, desc: 'Indonesische spekkoekcake met kaneel en kruidnagel.', spicy: 0, tags: [], img: 'img/Foto\'s/Dapur Ibu_  Spekkoek.jpg' },
      { id: 'ds3', name: 'IJs Tjendol', price: 4.00, desc: 'Kokosmelk met gula melaka en groene cendol-jelly.', spicy: 0, tags: [], img: 'img/ijs_tjendol_1780313005672.png' },
      { id: 'ds4', name: 'IJs Kelapa Muda', price: 4.25, desc: 'IJs met jonge kokosnoot.', spicy: 0, tags: [], img: 'img/placeholder_dessert_1780399046308.png' },
      { id: 'ds5', name: 'IJs Tjampur', price: 4.25, desc: 'Gemengd ijs dessert.', spicy: 0, tags: [], img: 'img/placeholder_dessert_1780399046308.png' }
    ]
  }
};

// ========================
// TAG RENDERING
// ========================
const TAG_ICONS = {
  'Kip': 'img/icons/icon_kip_1782777899911.png',
  'Rund': 'img/icons/icon_rund_1782777908434.png',
  'Varken': 'img/icons/icon_varken_1782777915289.png',
  'Schaaldieren': 'img/icons/icon_schaaldieren_1782777922566.png',
  'Tofu': 'img/icons/icon_tofu_1782777929361.png',
  'Soja': 'img/icons/icon_tofu_1782777929361.png',
  'Gluten': 'img/icons/icon_gluten_1782777937187.png',
  'Noten': 'img/icons/icon_noten_1782777946159.png',
  'Pinda\'s': 'img/icons/icon_noten_1782777946159.png',
  'Eieren': 'img/icons/icon_eieren.png',
  'Melk': 'img/icons/icon_melk.png',
  'Selderij': 'img/icons/icon_selderij.png'
};

function renderTag(t, useBg = false, iconOnly = false) {
  if (iconOnly) {
    if (TAG_ICONS[t]) {
      return `<img src="${TAG_ICONS[t]}" class="w-[18px] h-[18px] object-contain mix-blend-multiply shrink-0" title="${t}" alt="${t}">`;
    } else if (t === 'Vegetarisch') {
      return `<span class="text-paddy-green flex items-center shrink-0" title="${t}"><span class="material-symbols-outlined text-[18px]">eco</span></span>`;
    }
    return `<span class="text-secondary flex items-center shrink-0" title="${t}"><i class="fa-solid fa-circle-info text-[14px]"></i></span>`;
  }

  const baseClasses = useBg 
    ? 'bg-surface-variant/50 text-on-surface-variant border border-secondary/10' 
    : 'bg-primary/10 text-primary';
  const tagClass = `${baseClasses} px-2 py-1 rounded-full text-[12px] font-label-md flex items-center gap-1 shrink-0`;
  
  if (TAG_ICONS[t]) {
    return `<span class="${tagClass}"><img src="${TAG_ICONS[t]}" class="w-4 h-4 object-contain mix-blend-multiply" alt="${t}"> ${t}</span>`;
  } else if (t === 'Vegetarisch') {
    return `<span class="${tagClass}"><span class="material-symbols-outlined text-[16px]">eco</span> ${t}</span>`;
  } else if (t === 'Pittig') {
    return `<span class="${tagClass}">🌶️ ${t}</span>`;
  }
  return `<span class="${tagClass}"><i class="fa-solid fa-circle-info text-[12px]"></i>${t}</span>`;
}

// ========================
// CATEGORY GROUPINGS
// ========================
const catIcons = {
  favorieten: '<img src="img/icons/icon_favorieten_bw_1781731599119.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Favorieten">',
  snacks: '<img src="img/icons/icon_broodjes_bw_1781731642405.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Snacks">',
  mini_schotels: '<img src="img/icons/icon_mini_schotels_bw_1781731607425.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Mini Schotels">',
  schotels: '<img src="img/icons/icon_schotels_bw_1781731616275.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Schotels">',
  rijsttafels: '<img src="img/icons/icon_rijsttafels_bw_1781731624436.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Rijsttafels">',
  gerechten_rijst: '<img src="img/icons/icon_gerechten_rijst_bw_1781731633049.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Rijstgerechten">',
  broodjes: '<img src="img/icons/icon_broodjes_bw_1781731642405.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Broodjes">',
  basis: '<img src="img/icons/icon_basis_bw_1781731651202.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Basis">',
  groenten: '<img src="img/icons/icon_groenten_bw_1781731659590.png" class="w-5 h-5 object-contain mix-blend-multiply opacity-70" alt="Groenten">',
  vlees: '<i class="fa-solid fa-cow text-[14px] opacity-70"></i>',
  kroepoek: 'cookie', sambal: 'local_fire_department', drinken: 'local_cafe', 
  desserts: '<i class="fa-solid fa-glass-water text-[14px] opacity-70"></i>'
};

const shortLabels = {
  favorieten: 'Favorieten', snacks: 'Snacks', mini_schotels: 'Mini-Schotels',
  schotels: 'Schotels', rijsttafels: 'Rijsttafel', gerechten_rijst: 'Rijstgerechten',
  broodjes: 'Broodjes', basis: 'Basis', groenten: 'Groenten',
  vlees: 'Vlees', kroepoek: 'Kroepoek', sambal: 'Sambal',
  drinken: 'Dranken', desserts: 'Desserts'
};

const catGroups = [
  { header: 'Uitgelicht', icon: 'star', cats: ['favorieten', 'snacks', 'broodjes'] },
  { header: 'Maaltijden', icon: 'dinner_dining', cats: ['mini_schotels', 'schotels', 'rijsttafels', 'gerechten_rijst'] },
  { header: 'Losse Gerechten', icon: 'kitchen', cats: ['basis', 'groenten', 'vlees'] },
  { header: 'Extras & Drank', icon: 'add_circle', cats: ['kroepoek', 'sambal', 'drinken', 'desserts'] }
];

// ========================
// CATERING DATA
// ========================
const CATERING_MENUS = {
  A: {
    name: 'Menu A',
    subtitle: 'Klassiek Basis',
    price: 15.50,
    minPersons: 25,
    desc: '1 basis (Witte rijst), 2 vlees, 2 groenten per persoon. Inclusief atjar en kroepoek. Bezorgd in Chafing Dish.',
    items: [
      { name: 'Basisgerecht: Witte Rijst', desc: 'Standaard basis', default: true },
      { name: '2 Vleesgerechten', desc: 'Keuze uit alle vleesgerechten', default: true },
      { name: '2 Groentegerechten', desc: 'Keuze uit alle groentegerechten', tag: 'Veg', default: true },
      { name: 'Atjar Ketimoen', desc: 'Zoetzure komkommer', tag: 'Veg', default: true },
      { name: 'Kroepoek', desc: 'Inclusief', default: true },
    ]
  },
  B: {
    name: 'Menu B',
    subtitle: 'Uitgebreid Genieten',
    price: 17.50,
    minPersons: 20,
    desc: '2 basis, 2 vlees, 2 groenten, 1 saté per persoon. Inclusief atjar en kroepoek. Bezorgd in Chafing Dish.',
    items: [
      { name: '2 Basisgerechten', desc: 'Keuze uit alle basisgerechten', default: true },
      { name: '2 Vleesgerechten', desc: 'Keuze uit alle vleesgerechten', default: true },
      { name: '2 Groentegerechten', desc: 'Keuze uit alle groentegerechten', tag: 'Veg', default: true },
      { name: '1 Saté per persoon', desc: 'Kipsaté met pindasaus', default: true },
      { name: 'Atjar & Kroepoek', desc: 'Inclusief', default: true },
    ]
  },
  C: {
    name: 'Menu C',
    subtitle: 'Luxe Rijsttafel',
    price: 21.50,
    minPersons: 10,
    desc: '2 basis, 3 vlees, 3 groenten, 2 saté per persoon. Inclusief atjar en kroepoek. Bezorgd in Chafing Dish.',
    popular: true,
    items: [
      { name: '2 Basisgerechten', desc: 'Keuze uit alle basisgerechten', default: true },
      { name: '3 Vleesgerechten', desc: 'Keuze uit alle vleesgerechten', default: true },
      { name: '3 Groentegerechten', desc: 'Keuze uit alle groentegerechten', tag: 'Veg', default: true },
      { name: '2 Saté per persoon', desc: 'Kipsaté met pindasaus', default: true },
      { name: 'Atjar & Kroepoek', desc: 'Inclusief', default: true },
    ]
  },
  TUMPENG: {
    name: 'Tumpeng',
    subtitle: 'Feestelijke Kegelrijst',
    price: 22.50, // aangenomen prijs, wachtend op input
    minPersons: 20,
    desc: 'Traditionele feestelijke gele rijst (Nasi Kuning) in kegelvorm, omringd door authentieke bijgerechten.',
    items: [
      { name: 'Ayam Goreng', desc: 'Gefruite kip', default: true },
      { name: 'Tempeh Kering', desc: 'Krokante zoete tempeh', default: true },
      { name: 'Oerap-Oerap', desc: 'Groenten met geraspte kokos', default: true },
      { name: 'Dadar Telor', desc: 'Gesneden omelet', default: true },
      { name: 'Frikadel Jawa', desc: 'Indonesische aardappelkroketjes', default: true },
      { name: 'Rendang', desc: 'Gestoofd rundvlees in kokos', default: true }
    ]
  },
  BROODJES: {
    name: 'Broodjes Catering',
    subtitle: 'Diverse Broodjes',
    price: 5.50, // aangenomen prijs
    minPersons: 50,
    desc: 'Assortiment van verse broodjes, warm geleverd.',
    items: [
      { name: 'Mix van broodjes', desc: 'Keuze uit vlees en vega', default: true },
      { name: 'Warme levering', desc: 'Bezorgd en klaar om uit te delen', default: true }
    ]
  }
};


// ========================
// RESTAURANT INFO
// ========================
const RESTAURANT = {
  name: 'Dapur Ibu',
  tagline: 'Mama\'s Indonesische keuken op z\'n best!',
  subtitle: 'Heerlijke verse gerechten en broodjes',
  address: 'Koningin Julianaplein 1, 2274 JD Voorburg',
  phone: '070 326 32 54',
  phoneLink: 'tel:0703263254',
  email: 'dapuribu@yahoo.com',
  emailLink: 'mailto:dapuribu@yahoo.com',
  hours: {
    'Ma': '15:00 - 19:30',
    'Di': '12:00 - 19:30',
    'Wo': '12:00 - 19:30',
    'Do': '12:00 - 19:30',
    'Vr': '12:00 - 19:30',
    'Za': '12:00 - 19:30',
    'Zo': '15:00 - 19:30',
  },
  hoursSummary: ['Maandag & Zondag: 15:00 - 19:30', 'Di t/m Za: 12:00 - 19:30'],
  closingHour: 19,
  closingMinute: 30,
  openingHour: 12,
  openingMinute: 0,
  sundayOpenHour: 15,
};

// ========================
// TOAST NOTIFICATIONS
// ========================
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'bg-primary text-white px-6 py-3 rounded-full font-label-md text-label-md shadow-lg transform transition-all duration-300 opacity-0 -translate-y-4 flex items-center gap-2';
  toast.innerHTML = `<span class="material-symbols-outlined text-[18px]">check_circle</span> ${message}`;
  
  container.appendChild(toast);
  
  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', '-translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
  });
  
  // Animate out after 3s
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ========================
// CART SYSTEM
// ========================
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('dapuribu_cart') || '[]');
    this.listeners = [];
  }

  save() {
    localStorage.setItem('dapuribu_cart', JSON.stringify(this.items));
    this.notify();
  }

  notify() {
    this.listeners.forEach(fn => fn(this.items));
  }

  onChange(fn) {
    this.listeners.push(fn);
    fn(this.items); // call immediately
  }

  add(itemId) {
    const existing = this.items.find(i => i.id === itemId);
    let addedName = '';
    if (existing) {
      existing.qty++;
      addedName = existing.name;
    } else {
      // Find item data from MENU_DATA
      let found = null;
      for (const cat of Object.values(MENU_DATA)) {
        found = cat.items.find(i => i.id === itemId);
        if (found) break;
      }
      if (found) {
        this.items.push({ id: found.id, name: found.name, price: found.price, qty: 1 });
        addedName = found.name;
      }
    }
    this.save();
    if (addedName) showToast(`${addedName} toegevoegd`);
  }

  addCustom(baseItemId, optionsText, customPrice = null) {
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
      showToast(`${found.name} toegevoegd`);
    }
  }

  remove(itemId) {
    this.items = this.items.filter(i => i.id !== itemId);
    this.save();
  }

  updateQty(itemId, qty) {
    if (qty <= 0) {
      this.remove(itemId);
      return;
    }
    const existing = this.items.find(i => i.id === itemId);
    if (existing) {
      existing.qty = qty;
      this.save();
    }
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  clear() {
    this.items = [];
    this.save();
  }
}

// Global cart instance
const cart = new Cart();

// ========================
// NAVIGATION
// ========================
function initNavigation() {
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary');
      link.classList.remove('text-on-surface-variant');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-menu-overlay');
  const panel = document.getElementById('mobile-menu-panel');

  if (menuBtn && panel) {
    menuBtn.addEventListener('click', () => {
      overlay?.classList.add('active');
      panel.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
      overlay?.classList.remove('active');
      panel.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Close on nav link click
    panel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Cart badge update
  cart.onChange(items => {
    const count = cart.getCount();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
      if (el.classList.contains('cart-badge')) {
        el.style.display = count > 0 ? 'flex' : 'none';
      }
    });

    const cartBar = document.getElementById('cart-bar');
    if (cartBar) {
      if (count > 0) {
        if (cartBar.style.display === 'none') {
          cartBar.style.display = 'block';
          cartBar.animate([
            { transform: 'translateY(100px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
          ], { duration: 300, easing: 'ease-out' });
        } else {
          cartBar.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.04)' },
            { transform: 'scale(1)' }
          ], { duration: 250, easing: 'ease-in-out' });
        }
      } else {
        cartBar.style.display = 'none';
      }
    }

    // Animate header badge
    document.querySelectorAll('.cart-badge').forEach(b => {
      if (count > 0) {
        b.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.4)' },
          { transform: 'scale(1)' }
        ], { duration: 300, easing: 'ease-out' });
      }
    });
  });
}

// ========================
// VALIDATION UTILS
// ========================
function validatePhone(phone) {
  return /^[+]?[0-9\s\-()]{7,15}$/.test(phone.replace(/\s/g, ''));
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// ========================
// TIME SLOT GENERATION
// ========================
function generateTimeSlots(targetDateStr) {
  const now = new Date();
  const slots = [];
  const closingHour = RESTAURANT.closingHour;
  const closingMin = RESTAURANT.closingMinute;

  let targetDate = now;
  let isToday = true;

  if (targetDateStr) {
    const parts = targetDateStr.split('-');
    if (parts.length === 3) {
      targetDate = new Date(parts[0], parts[1] - 1, parts[2]);
      if (targetDate.toDateString() !== now.toDateString()) {
        isToday = false;
      }
    }
  }

  const dayOfWeek = targetDate.getDay(); // 0=Sun, 1=Mon
  let openHour = RESTAURANT.openingHour;
  if (dayOfWeek === 0 || dayOfWeek === 1) {
    openHour = RESTAURANT.sundayOpenHour; // Mon/Sun open at 15:00
  }

  if (isToday) {
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const isOpen = currentHour >= openHour && (currentHour < closingHour || (currentHour === closingHour && currentMin < closingMin));

    if (isOpen) {
      slots.push({ value: 'asap', label: 'Zo snel mogelijk (ca. 20 min)' });
      let startMin = Math.ceil((currentMin + 30) / 15) * 15;
      let startHour = currentHour;
      if (startMin >= 60) {
        startHour++;
        startMin -= 60;
      }
      
      for (let h = Math.max(startHour, openHour); h <= closingHour; h++) {
        const minStart = (h === Math.max(startHour, openHour)) ? startMin : 0;
        const minEnd = (h === closingHour) ? closingMin : 60;
        for (let m = minStart; m < minEnd; m += 15) {
          const label = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
          slots.push({ value: label, label });
        }
      }
    } else {
      let nextOpenHour = RESTAURANT.openingHour;
      let nextDay = dayOfWeek + 1;
      if (nextDay > 6) nextDay = 0;
      if (nextDay === 0 || nextDay === 1) nextOpenHour = RESTAURANT.sundayOpenHour;

      slots.push({ value: 'next-first', label: `Morgen ${String(nextOpenHour).padStart(2, '0')}:15 (eerste slot)` });
      for (let h = nextOpenHour; h <= closingHour; h++) {
        const minStart = (h === nextOpenHour) ? 15 : 0;
        const minEnd = (h === closingHour) ? closingMin : 60;
        for (let m = minStart; m < minEnd; m += 15) {
          const label = `Morgen ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
          slots.push({ value: label, label });
        }
      }
    }
  } else {
    // Future date
    for (let h = openHour; h <= closingHour; h++) {
      const minStart = (h === openHour) ? 15 : 0;
      const minEnd = (h === closingHour) ? closingMin : 60;
      for (let m = minStart; m < minEnd; m += 15) {
        const label = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        slots.push({ value: label, label });
      }
    }
  }
  
  if (slots.length === 0) {
    slots.push({ value: '', label: 'Geen tijden beschikbaar' });
  }

  return slots;
}

// ========================
// AFHAAL PAGE LOGIC
// ========================
function initAfhaalPage() {
  const menuContainer = document.getElementById('afhaal-menu');
  const cartContainer = document.getElementById('afhaal-cart');
  const timeSelect = document.getElementById('pickup-time');

  if (!menuContainer) return; // Not on afhaal page

  // Render menu items
  renderAfhaalMenu(menuContainer);

  const dateInput = document.getElementById('pickup-date');

  if (timeSelect && dateInput) {
    const updateTimeSlots = () => {
      const slots = generateTimeSlots(dateInput.value);
      timeSelect.innerHTML = slots.map(s =>
        `<option value="${s.value}">${s.label}</option>`
      ).join('');
    };
    dateInput.addEventListener('change', updateTimeSlots);
    updateTimeSlots();
  } else if (timeSelect) {
    const slots = generateTimeSlots();
    timeSelect.innerHTML = slots.map(s =>
      `<option value="${s.value}">${s.label}</option>`
    ).join('');
  }

  // Cart rendering
  cart.onChange(() => {
    if (cartContainer) renderAfhaalCart(cartContainer);
    if (typeof updateAfhaalMenuQuantities === 'function') {
      updateAfhaalMenuQuantities();
    }
  });

  // Build category navigation — grouped for compactness
  const desktopNav = document.getElementById('category-nav');
  const mobileNav = document.getElementById('mobile-category-nav');

  if (desktopNav) {
    const allowedCategories = ['favorieten', 'mini_schotels', 'schotels', 'rijsttafels', 'gerechten_rijst', 'broodjes', 'basis', 'groenten', 'vlees', 'kroepoek', 'sambal', 'drinken', 'desserts'];
    let navHtml = '';
    catGroups.forEach(group => {
      const validCats = group.cats.filter(key => allowedCategories.includes(key) && MENU_DATA[key]);
      if (validCats.length === 0) return;
      
      navHtml += `<div class="mb-0.5"><span class="font-label-md text-label-md text-on-surface-variant/50 uppercase tracking-wider px-2 pt-1.5 pb-0.5 block text-[9px] leading-none">${group.header}</span>`;
      validCats.forEach(key => {
        const icon = catIcons[key] || 'restaurant';
        const label = shortLabels[key] || MENU_DATA[key].label;
        const iconHtml = icon.startsWith('<') ? icon : `<span class="material-symbols-outlined text-[14px]">${icon}</span>`;
        navHtml += `<a href="#cat-${key}" data-category-link="cat-${key}" class="font-label-lg text-label-lg text-on-surface-variant py-1.5 px-2 rounded transition-all duration-200 hover:text-primary hover:bg-surface-variant/20 flex items-center gap-1.5 text-[12px] leading-tight">${iconHtml}${label}</a>`;
      });
      navHtml += `</div>`;
    });
    desktopNav.innerHTML = navHtml;
    // Set first link active
    const firstLink = desktopNav.querySelector('[data-category-link]');
    if (firstLink) {
      firstLink.classList.add('text-primary', 'font-bold', 'border-l-4', 'border-primary', 'bg-surface-variant/30');
      firstLink.classList.remove('text-on-surface-variant');
    }
  }

  if (mobileNav) {
    // Flat list for mobile (grouped chips are confusing on small screens), but with short labels
    const allCats = catGroups.flatMap(g => g.cats);
    const allowedCategories = ['favorieten', 'mini_schotels', 'schotels', 'rijsttafels', 'gerechten_rijst', 'broodjes', 'basis', 'groenten', 'vlees', 'kroepoek', 'sambal', 'drinken', 'desserts'];
    mobileNav.innerHTML = allCats.filter(key => MENU_DATA[key] && allowedCategories.includes(key)).map((key, i) => {
      const icon = catIcons[key] || 'restaurant';
      const label = shortLabels[key] || MENU_DATA[key].label;
      const cls = i === 0
        ? 'category-chip active whitespace-nowrap shrink-0 font-label-lg text-label-lg border border-secondary/20 px-3 py-1.5 rounded-full flex items-center gap-1 text-[12px]'
        : 'category-chip whitespace-nowrap shrink-0 font-label-lg text-label-lg text-on-surface-variant border border-secondary/20 px-3 py-1.5 rounded-full flex items-center gap-1 text-[12px] hover:border-primary/40';
      const iconHtml = icon.startsWith('<') ? icon : `<span class="material-symbols-outlined text-[14px]">${icon}</span>`;
      return `<a href="#cat-${key}" data-category-link="cat-${key}" class="${cls}">${iconHtml}${label}</a>`;
    }).join('');
  }

  function updateActiveCategoryLink(targetId) {
    document.querySelectorAll('[data-category-link]').forEach(l => {
      // Desktop styles
      l.classList.remove('text-primary', 'font-bold', 'border-l-4', 'border-primary', 'bg-surface-variant/30');
      // Mobile styles
      l.classList.remove('active', 'border-primary/40');
      
      // Default
      l.classList.add('text-on-surface-variant');
      
      if (l.dataset.categoryLink === targetId) {
        l.classList.remove('text-on-surface-variant');
        if (l.classList.contains('category-chip')) {
          l.classList.add('active'); // mobile
          if (window.innerWidth < 1024) {
            const navContainer = l.closest('nav');
            if (navContainer) {
              const scrollLeft = l.offsetLeft - (navContainer.clientWidth / 2) + (l.clientWidth / 2);
              navContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
          }
        } else {
          l.classList.add('text-primary', 'font-bold', 'border-l-4', 'border-primary', 'bg-surface-variant/30'); // desktop
        }
      }
    });
  }

  // Category navigation click handlers
  document.querySelectorAll('[data-category-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.categoryLink);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      updateActiveCategoryLink(link.dataset.categoryLink);
    });
  });

  // Scrollspy for Afhaal categories
  const categorySections = Array.from(document.querySelectorAll('section[id^="cat-"]'));
  if (categorySections.length > 0) {
    const sectionRatios = {};
    let isClickScrolling = false;

    // Extend click handlers to prevent observer updates during smooth scroll
    document.querySelectorAll('[data-category-link]').forEach(link => {
      link.addEventListener('click', () => {
        isClickScrolling = true;
        setTimeout(() => isClickScrolling = false, 800);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      // Update ratios for sections that changed
      entries.forEach(entry => {
        sectionRatios[entry.target.id] = entry.intersectionRatio;
      });

      // Don't update active state if we're currently scrolling from a click
      if (isClickScrolling) return;

      let visibleId = null;
      let maxRatio = 0;
      
      // Find the section with the highest ratio currently
      for (const [id, ratio] of Object.entries(sectionRatios)) {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          visibleId = id;
        }
      }
      
      if (maxRatio > 0 && visibleId) {
        updateActiveCategoryLink(visibleId);
      }
    }, { rootMargin: '-120px 0px -40% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
    
    categorySections.forEach(sec => {
      sectionRatios[sec.id] = 0;
      observer.observe(sec);
    });
  }

  // Form submit → show checkout overview first
  const afhaalForm = document.getElementById('afhaal-form');
  if (afhaalForm) {
    afhaalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const errorEl = document.getElementById('afhaal-form-error');
      const errorText = document.getElementById('afhaal-form-error-text');
      
      const showError = (msg) => {
        errorText.textContent = msg;
        if (errorEl) errorEl.classList.remove('hidden');
      };

      if (cart.getCount() === 0) {
        showError('Voeg eerst items toe aan uw bestelling.');
        return;
      }
      if (cart.getTotal() < 5) {
        showError(`De minimale bestelwaarde is € 5,00. U komt nog € ${(5 - cart.getTotal()).toFixed(2).replace('.', ',')} tekort.`);
        return;
      }
      // Validate form fields
      const naam = document.getElementById('naam')?.value?.trim();
      const email = document.getElementById('email')?.value?.trim();
      const telefoon = document.getElementById('telefoon')?.value?.trim();
      const _ptSel = document.getElementById('pickup-time');
      const pickupTime = _ptSel ? _ptSel.options[_ptSel.selectedIndex].text : '';
      const pickupDate = document.getElementById('pickup-date')?.value;
      const betaalmethode = document.getElementById('betaalmethode')?.value;
      const temp = document.querySelector('input[name="temp"]:checked')?.value || 'warm';
      const opmerking = document.getElementById('opmerking')?.value?.trim() || '';

      if (!naam || !email || !telefoon) {
        showError('Vul alstublieft uw naam, e-mailadres en telefoonnummer in.');
        return;
      }

      if (!validateEmail(email)) {
        showError('Vul een geldig e-mailadres in (bijv. naam@email.com).');
        return;
      }

      if (!validatePhone(telefoon)) {
        showError('Vul een geldig telefoonnummer in (bijv. 06 1234 5678).');
        return;
      }
      
      if (errorEl) errorEl.classList.add('hidden');

      showCheckoutOverview({ naam, email, telefoon, pickupTime, pickupDate, betaalmethode, temp, opmerking });
    });
  }
}

const SCHOTEL_RULES = {
  ms1: { v: 1, g: 1 },
  ms2: { v: 1, g: 1 },
  ms3: { v: 1, g: 1 },
  s1: { v: 2, g: 3 },
  s1_2: { v: 2, g: 3 },
  s2: { v: 2, g: 3 },
  s3: { v: 2, g: 3 },
  s4: { v: 0, g: 5 },
  s5: { v: 0, g: 5 },
  s6: { v: 2, g: 3 },
  rt1: { b: 2, v: 3, g: 3 },
};


function openWeightModal(itemId) {
  let found = null;
  for (const cat of Object.values(MENU_DATA)) {
    found = cat.items.find(i => i.id === itemId);
    if (found) break;
  }
  if (!found) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content !max-w-md !p-6 !text-left relative">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2" style="font-family: 'Playfair Display'">Kies gewicht</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4">${found.name} (\u20AC${found.price.toFixed(2).replace('.', ',')} per 100g)</p>
      
      <div class="flex items-center justify-center gap-6 my-6">
        <button id="weight-minus" type="button" class="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-on-surface hover:bg-error/10 hover:text-error transition-colors">
          <span class="material-symbols-outlined text-[24px]">remove</span>
        </button>
        <div class="text-center w-24">
          <span id="weight-value" class="font-headline-md text-[24px] text-on-surface block">100g</span>
          <span id="weight-price" class="font-label-md text-primary block mt-1">\u20AC${found.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <button id="weight-plus" type="button" class="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined text-[24px]">add</span>
        </button>
      </div>

      <button id="weight-submit" type="button" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors">
        Toevoegen aan bestelling
      </button>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));

  let currentWeight = 100;
  const valEl = modal.querySelector('#weight-value');
  const priceEl = modal.querySelector('#weight-price');

  function updateDisplay() {
    valEl.textContent = currentWeight + 'g';
    const currentPrice = (currentWeight / 100) * found.price;
    priceEl.textContent = '\u20AC' + currentPrice.toFixed(2).replace('.', ',');
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
    cart.addCustom(itemId, `Gewicht: ${currentWeight}g`, currentPrice);
    modal.remove();
  });
}

function openFrisModal(itemId) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content !max-w-md !p-6 !text-left relative">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2" style="font-family: 'Playfair Display'">Kies uw frisdrank</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4">Kies 1 blikje frisdrank (330ml).</p>
      
      <div id="fris-error" class="hidden bg-error-container text-on-error-container p-3 rounded-lg mb-4 font-label-md flex items-center gap-2">
        <span class="material-symbols-outlined">error</span>
        <span id="fris-error-text"></span>
      </div>

      <form id="fris-form">
        <div class="space-y-3 mb-6">
          <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
            <input type="radio" name="fris_keuze" value="Coca-Cola" class="form-radio h-5 w-5 text-primary">
            <span class="font-label-lg text-label-lg text-on-surface">Coca-Cola</span>
          </label>
          <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
            <input type="radio" name="fris_keuze" value="Fanta Orange" class="form-radio h-5 w-5 text-primary">
            <span class="font-label-lg text-label-lg text-on-surface">Fanta Orange</span>
          </label>
          <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
            <input type="radio" name="fris_keuze" value="Sprite" class="form-radio h-5 w-5 text-primary">
            <span class="font-label-lg text-label-lg text-on-surface">Sprite</span>
          </label>
        </div>
        <button type="submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors">Toevoegen aan bestelling</button>
      </form>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));

  const form = modal.querySelector('#fris-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keuze = form.querySelector('input[name="fris_keuze"]:checked');
    const errorEl = modal.querySelector('#fris-error');
    const errorText = modal.querySelector('#fris-error-text');
    
    if (!keuze) {
      errorText.textContent = 'Kies alstublieft een frisdrank.';
      errorEl.classList.remove('hidden');
      return;
    }
    
    errorEl.classList.add('hidden');
    
    const optionsText = 'Smaak: ' + keuze.value;
    cart.addCustom(itemId, optionsText);
    modal.remove();
  });
}

function openDishModal(itemId) {
  let found = null;
  for (const cat of Object.values(MENU_DATA)) {
    found = cat.items.find(i => i.id === itemId);
    if (found) break;
  }
  if (!found) return;

  document.body.style.overflow = 'hidden';

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  const tagsHtml = (found.tags && found.tags.length > 0) 
    ? found.tags.map(t => renderTag(t, false)).join('') 
    : '';

  const spicyHtml = found.spicy > 0 
    ? `<span class="text-sunset-orange flex items-center gap-1 text-[12px] font-label-md bg-sunset-orange/10 px-2 py-1 rounded-full">${'<i class="fa-solid fa-pepper-hot text-[14px]"></i>'.repeat(found.spicy)}</span>` 
    : '';

  const imgHtml = found.img 
    ? `<div class="h-48 sm:h-56 w-full rounded-t-[16px] overflow-hidden shrink-0 bg-surface-variant relative flex items-center justify-center">
         <img src="${found.img}" class="absolute inset-0 w-full h-full object-cover opacity-40 blur-md scale-110" alt="">
         <img src="${found.img}" alt="${found.name}" class="relative w-full h-full object-contain z-10">
       </div>` 
    : '';

  modal.innerHTML = `
    <div class="modal-content !max-w-md !p-0 !text-left relative max-h-[80vh] flex flex-col w-[calc(100%-2.5rem)] m-auto overflow-hidden">
      ${imgHtml}
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-2 right-2 sm:top-4 sm:right-4 text-on-surface-variant hover:text-primary z-20 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center shadow-sm"><span class="material-symbols-outlined text-[20px]">close</span></button>
      
      <div class="p-5 sm:p-6 overflow-y-auto flex-grow relative">
        <div class="flex gap-2 flex-wrap mb-3">
          ${spicyHtml}
          ${tagsHtml}
        </div>

        <h2 class="font-headline-md text-headline-md text-on-surface mb-2" style="font-family: 'Playfair Display'">${found.name}</h2>
        <p class="font-label-lg text-primary mb-4">\u20AC${found.price.toFixed(2).replace('.', ',')} ${found.isWeight ? '<span class="text-on-surface-variant text-[12px] font-normal">/ 100g</span>' : ''}</p>
        
        <p class="font-body-md text-body-md text-on-surface-variant text-[13px] sm:text-[14px] mb-6 leading-relaxed">
          ${found.desc}
        </p>

        <div class="bg-secondary/5 rounded-lg p-3 sm:p-4 border border-secondary/10 flex items-start gap-3">
           <span class="material-symbols-outlined text-secondary mt-0.5">info</span>
           <p class="text-[12px] text-on-surface-variant leading-tight">
             Heeft u een allergie? Meld het ons gerust via de opmerkingen bij het afronden van uw bestelling.
           </p>
        </div>
      </div>

      <div id="dish-modal-add-btn" class="p-4 sm:p-5 bg-rice-paper border-t border-secondary/10 shrink-0"></div>
    </div>
  `;
  
  let addActionHtml = '';
  if (SCHOTEL_RULES[itemId]) {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; openSchotelModal('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Samenstellen</button>`;
  } else if (found.isWeight) {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; openWeightModal('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Kiezen (Gewicht)</button>`;
  } else if (itemId === 'b1' || itemId === 'b2' || itemId === 'b3') {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; openBroodjeModal('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Kiezen</button>`;
  } else if (itemId === 'sa1') {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; openSateModal('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Kiezen</button>`;
  } else if (['gr1', 'gr2', 'gr3', 'gr4'].includes(itemId)) {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; openRijstKeuzeModal('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Kiezen</button>`;
  } else {
    addActionHtml = `<button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = ''; cart.add('${itemId}')" class="w-full bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[18px]">shopping_cart</span> Toevoegen aan bestelling</button>`;
  }
  
  modal.querySelector('#dish-modal-add-btn').innerHTML = addActionHtml;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));
}

function openSchotelModal(itemId) {
  document.body.style.overflow = 'hidden';
  var rule = SCHOTEL_RULES[itemId];
  if (!rule) return;
  var vMax = rule.v || 0, gMax = rule.g || 0, bMax = rule.b || 0;
  var vDishes = MENU_DATA.vlees ? MENU_DATA.vlees.items : [];
  // Exclude telor goreng from groenten choices (it's always included in schotels)
  var gDishes = MENU_DATA.groenten ? MENU_DATA.groenten.items.filter(function(i) { return i.id !== 'dv3'; }) : [];
  var bDishes = MENU_DATA.basis ? MENU_DATA.basis.items.slice(0, 8) : [];
  var st = {};
  function gT(g) { return Object.keys(st).filter(function(k){return k.indexOf(g+':')===0;}).reduce(function(s,k){return s+st[k];},0); }

  function dR(name, group) {
    var k = group + ':' + name;
    return '<div class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container/30 transition-colors">' +
      '<span class="font-body-md text-[14px] text-on-surface">' + name + '</span>' +
      '<div class="flex items-center gap-1.5 shrink-0">' +
        '<button type="button" class="dish-minus w-7 h-7 rounded-full border border-secondary/20 flex items-center justify-center text-on-surface-variant hover:bg-error/10 hover:text-error transition-colors" data-key="' + k + '" style="display:none"><span class="material-symbols-outlined text-[16px]">remove</span></button>' +
        '<span class="dish-qty w-5 text-center font-label-lg text-[13px]" data-key="' + k + '" style="display:none">0</span>' +
        '<button type="button" class="dish-plus w-7 h-7 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" data-key="' + k + '"><span class="material-symbols-outlined text-[16px]">add</span></button>' +
      '</div></div>';
  }

  function sec(emoji, title, items, max, group) {
    if (max <= 0) return '';
    return '<div class="mb-5" id="schotel-sec-' + group + '">' +
      '<div class="flex items-center justify-between mb-2 pb-2 border-b border-secondary/10 sticky top-0 bg-rice-paper z-10 pt-1">' +
        '<h3 class="font-label-lg text-label-lg text-on-surface flex items-center gap-2"><span>' + emoji + '</span> ' + title + '</h3>' +
        '<span class="counter font-label-md text-on-surface-variant" data-group="' + group + '">0 / ' + max + '</span>' +
      '</div>' +
      '<div class="space-y-0.5">' + items.map(function(i){return dR(i.name, group);}).join('') + '</div>' +
    '</div>';
  }

  var pts = [];
  if (bMax > 0) pts.push(bMax + ' basis');
  if (vMax > 0) pts.push(vMax + ' vlees');
  if (gMax > 0) pts.push(gMax + ' groenten');

  var isRijsttafel = itemId === 'rt1';
  var personSelectHtml = '';
  if (isRijsttafel) {
    personSelectHtml = `
      <div class="mb-4 bg-surface-variant/20 p-3 rounded-lg border border-secondary/10">
        <label for="rt-personen" class="font-label-lg block mb-1">Aantal personen</label>
        <select id="rt-personen" class="w-full border-secondary/20 rounded-md py-1.5 px-3 font-body-md text-on-surface">
          <option value="2">2 Personen (Standaard) - &euro;38,50</option>
          <option value="3">3 Personen - &euro;57,75</option>
          <option value="4">4 Personen - &euro;77,00</option>
          <option value="5">5 Personen - &euro;96,25</option>
          <option value="6">6 Personen - &euro;115,50</option>
          <option value="7">7 Personen - &euro;134,75</option>
          <option value="8">8 Personen - &euro;154,00</option>
          <option value="9">9 Personen - &euro;173,25</option>
          <option value="10">10 Personen - &euro;192,50</option>
          <option value="11">Meer dan 10 personen?</option>
        </select>
        <p id="rt-catering-msg" class="text-error font-label-md mt-2 hidden">Voor meer dan 10 personen adviseren wij ons <a href="catering.html" class="underline font-bold hover:text-error/80 transition-colors">Catering Menu</a>.</p>
      </div>
    `;
  }

  var modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = '<div class="modal-content schotel-modal !text-left relative !p-5">' +
    '<div class="flex items-center justify-between mb-3 pb-2 border-b border-secondary/10">' +
      '<div><h2 class="font-headline-sm text-headline-sm text-on-surface" style="font-family:Playfair Display">Stel samen</h2>' +
      '<p class="font-body-md text-[13px] text-on-surface-variant mt-1">Kies ' + pts.join(' en ') + '.</p></div>' +
      '<button onclick="this.closest(\'.modal-overlay\').remove()" class="p-2 text-on-surface-variant hover:text-primary shrink-0 ml-2"><span class="material-symbols-outlined">close</span></button>' +
    '</div>' +
    (isRijsttafel ? personSelectHtml : '') +
    '<div id="schotel-error" class="hidden bg-error-container text-on-error-container p-3 rounded-lg mb-3 font-label-md flex items-center gap-2 text-[13px]"><span class="material-symbols-outlined text-[18px]">error</span><span id="schotel-error-text"></span></div>' +
    '<div class="schotel-scroll">' +
      sec('🍚', 'Basisgerechten', bDishes, bMax, 'basis') +
      sec('🥩', 'Vleesgerechten', vDishes, vMax, 'vlees') +
      sec('🥬', 'Groentegerechten', gDishes, gMax, 'groenten') +
    '</div>' +
    '<div class="pt-3 border-t border-secondary/10 mt-2">' +
      '<button type="button" id="schotel-submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">' +
        '<span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>Toevoegen aan bestelling' +
      '</button>' +
    '</div>' +
  '</div>';

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > div:first-child > button')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(function() { modal.classList.add('active'); });

  var mx = { vlees: vMax, groenten: gMax, basis: bMax };

  function uG(group) {
    var total = gT(group), max = mx[group];
    var counter = modal.querySelector('.counter[data-group="' + group + '"]');
    if (counter) {
      counter.textContent = total + ' / ' + max;
      counter.style.color = total === max ? '#2D4C28' : '';
      counter.style.fontWeight = total === max ? '700' : '';
    }
    modal.querySelectorAll('.dish-plus[data-key^="' + group + ':"]').forEach(function(b) {
      b.disabled = total >= max;
      b.style.opacity = total >= max ? '0.3' : '1';
      b.style.cursor = total >= max ? 'not-allowed' : 'pointer';
    });
    modal.querySelectorAll('.dish-minus[data-key^="' + group + ':"]').forEach(function(b) {
      var q = st[b.dataset.key] || 0;
      b.style.display = q > 0 ? 'flex' : 'none';
    });
    modal.querySelectorAll('.dish-qty[data-key^="' + group + ':"]').forEach(function(el) {
      var q = st[el.dataset.key] || 0;
      el.textContent = q;
      el.style.display = q > 0 ? 'inline' : 'none';
    });

    // Auto-scroll to next section if full
    if (total === max && max > 0) {
      setTimeout(() => {
        var order = ['basis', 'vlees', 'groenten'];
        var idx = order.indexOf(group);
        for (var i = idx + 1; i < order.length; i++) {
          if (mx[order[i]] > 0) {
            var target = modal.querySelector('#schotel-sec-' + order[i]);
            var scrollContainer = modal.querySelector('.schotel-scroll');
            if (target && scrollContainer) {
              scrollContainer.scrollTo({
                top: target.offsetTop - scrollContainer.offsetTop,
                behavior: 'smooth'
              });
            }
            break;
          }
        }
      }, 150); // slight delay to let user see it was added
    }
  }

  if (isRijsttafel) {
    modal.querySelector('#rt-personen').addEventListener('change', function(e) {
      var isMeerDan10 = parseInt(e.target.value) === 11;
      var btn = modal.querySelector('#schotel-submit');
      var msg = modal.querySelector('#rt-catering-msg');
      if (isMeerDan10) {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        msg.classList.remove('hidden');
      } else {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        msg.classList.add('hidden');
      }
    });
  }

  modal.addEventListener('click', function(e) {
    var plus = e.target.closest('.dish-plus');
    var minus = e.target.closest('.dish-minus');
    if (plus && !plus.disabled) {
      var key = plus.dataset.key;
      var group = key.split(':')[0];
      if (gT(group) < mx[group]) {
        st[key] = (st[key] || 0) + 1;
        uG(group);
      }
    }
    if (minus) {
      var key2 = minus.dataset.key;
      var group2 = key2.split(':')[0];
      if (st[key2] && st[key2] > 0) {
        st[key2]--;
        if (st[key2] === 0) delete st[key2];
        uG(group2);
      }
    }
  });

  modal.querySelector('#schotel-submit').addEventListener('click', function() {
    var errEl = modal.querySelector('#schotel-error');
    var errTxt = modal.querySelector('#schotel-error-text');
    var labels = { vlees: 'vleesgerecht', groenten: 'groentegerecht', basis: 'basisgerecht' };
    for (var g in mx) {
      if (mx[g] > 0 && gT(g) !== mx[g]) {
        errTxt.textContent = 'Kies precies ' + mx[g] + ' ' + labels[g] + (mx[g] > 1 ? 'en' : '') + '.';
        errEl.classList.remove('hidden');
        return;
      }
    }
    errEl.classList.add('hidden');
    var textParts = [];
    var groupLabels = { vlees: 'Vlees', groenten: 'Groenten', basis: 'Basis' };
    ['basis', 'vlees', 'groenten'].forEach(function(g) {
      var entries = Object.entries(st).filter(function(e) { return e[0].indexOf(g + ':') === 0 && e[1] > 0; });
      if (entries.length > 0) {
        textParts.push(groupLabels[g] + ': ' + entries.map(function(e) {
          return (e[1] > 1 ? e[1] + 'x ' : '') + e[0].split(':')[1];
        }).join(', '));
      }
    });
    
    var customPrice = null;
    if (isRijsttafel) {
      var persons = parseInt(modal.querySelector('#rt-personen').value);
      textParts.unshift(persons + ' Personen');
      customPrice = persons * 19.25;
    }
    
    cart.addCustom(itemId, textParts.join(' | '), customPrice);
    document.body.style.overflow = '';
    modal.classList.remove('active');
    setTimeout(function(){ modal.remove(); }, 300);
  });
  
  // Handle close click on overlay or X button
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
}

function openBroodjeModal(itemId) {
  document.body.style.overflow = 'hidden';
  var isVlees = itemId === 'b1';
  var isGarnalen = itemId === 'b3';
  var title = isGarnalen ? 'Broodje Garnalen' : (isVlees ? 'Kies uw vlees' : 'Kies uw groenten');
  var desc = isGarnalen ? 'Kies uw extra\'s voor het broodje garnalen.' : (isVlees ? 'Kies 1 vleesgerecht voor op uw broodje.' : 'Kies 1 groentegerecht voor op uw broodje.');
  var options = isGarnalen ? [] : (isVlees ? (MENU_DATA.vlees ? MENU_DATA.vlees.items : []) : (MENU_DATA.groenten ? MENU_DATA.groenten.items : []));
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  let optionsHtml = options.map(opt => `
    <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
      <input type="radio" name="broodje_keuze" value="${opt.name}" class="form-radio h-5 w-5 text-primary">
      <span class="font-label-lg text-label-lg text-on-surface">${opt.name}</span>
    </label>
  `).join('');

  modal.innerHTML = `
    <div class="modal-content !max-w-md !p-6 !text-left relative flex flex-col max-h-[90vh]">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2 shrink-0" style="font-family: 'Playfair Display'">${title}</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4 shrink-0">${desc}</p>
      
      <div id="broodje-error" class="hidden bg-error-container text-on-error-container p-3 rounded-lg mb-4 font-label-md flex items-center gap-2 shrink-0">
        <span class="material-symbols-outlined">error</span>
        <span id="broodje-error-text"></span>
      </div>

      <form id="broodje-form" class="flex flex-col min-h-0">
        ${optionsHtml ? `<div class="space-y-3 mb-4 overflow-y-auto min-h-0 pr-2 custom-scrollbar">${optionsHtml}</div>` : ''}
        
        <div class="mb-6 pt-4 border-t border-secondary/10 shrink-0 space-y-3">
          <p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Extra's</p>
          <label class="flex items-center gap-3 p-3 bg-secondary/5 border border-secondary/10 rounded-lg hover:border-primary/30 cursor-pointer transition-colors">
            <input type="checkbox" name="broodje_atjar" value="+ Atjar" class="form-checkbox h-5 w-5 text-primary rounded">
            <span class="font-label-lg text-label-lg text-on-surface">Atjar toevoegen</span>
          </label>
          <label class="flex items-center gap-3 p-3 bg-secondary/5 border border-secondary/10 rounded-lg hover:border-primary/30 cursor-pointer transition-colors">
            <input type="checkbox" name="broodje_sambal" value="+ Sambal" class="form-checkbox h-5 w-5 text-primary rounded">
            <span class="font-label-lg text-label-lg text-on-surface">Sambal toevoegen</span>
          </label>
        </div>

        <button type="submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors shrink-0">Toevoegen aan bestelling</button>
      </form>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));

  const form = modal.querySelector('#broodje-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keuze = form.querySelector('input[name="broodje_keuze"]:checked');
    const errorEl = modal.querySelector('#broodje-error');
    const errorText = modal.querySelector('#broodje-error-text');
    
    if (!isGarnalen && !keuze) {
      errorText.textContent = 'Kies alstublieft een beleg.';
      errorEl.classList.remove('hidden');
      return;
    }
    
    errorEl.classList.add('hidden');
    
    let optionsText = isGarnalen ? 'Garnalen' : ('Beleg: ' + keuze.value);
    const extras = [];
    const atjar = form.querySelector('input[name="broodje_atjar"]');
    const sambal = form.querySelector('input[name="broodje_sambal"]');
    if (atjar && atjar.checked) extras.push('Atjar');
    if (sambal && sambal.checked) extras.push('Sambal');
    if (extras.length > 0) optionsText += ' | Extra: ' + extras.join(', ');

    cart.addCustom(itemId, optionsText);
    document.body.style.overflow = '';
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
}

function openSateModal(itemId) {
  document.body.style.overflow = 'hidden';
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';

  modal.innerHTML = `
    <div class="modal-content !max-w-sm !p-6 !text-left relative flex flex-col">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2 shrink-0" style="font-family: 'Playfair Display'">Saté Ayam</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4 shrink-0">Wilt u de pindasaus apart?</p>
      
      <form id="sate-form" class="flex flex-col">
        <div class="space-y-3 mb-6">
          <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
            <input type="radio" name="sate_keuze" value="Saus over de saté" checked class="form-radio h-5 w-5 text-primary">
            <span class="font-label-lg text-label-lg text-on-surface">Saus over de saté (standaard)</span>
          </label>
          <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
            <input type="radio" name="sate_keuze" value="Saus apart" class="form-radio h-5 w-5 text-primary">
            <span class="font-label-lg text-label-lg text-on-surface">Saus apart</span>
          </label>
        </div>
        <button type="submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors shrink-0">Toevoegen aan bestelling</button>
      </form>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  const form = modal.querySelector('#sate-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keuze = form.querySelector('input[name="sate_keuze"]:checked');
    const optionsText = keuze.value;
    cart.addCustom(itemId, optionsText);
    document.body.style.overflow = '';
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
}

function openRijstKeuzeModal(itemId) {
  document.body.style.overflow = 'hidden';
  let found = null;
  for (const cat of Object.values(MENU_DATA)) {
    found = cat.items.find(i => i.id === itemId);
    if (found) break;
  }
  if (!found) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  const optionsHtml = ['Witte Rijst', 'Lontong'].map(opt => `
    <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
      <input type="radio" name="rijst_keuze" value="${opt}" class="form-radio h-5 w-5 text-primary">
      <span class="font-label-lg text-label-lg text-on-surface">${opt}</span>
    </label>
  `).join('');

  modal.innerHTML = `
    <div class="modal-content !max-w-sm !p-6 !text-left relative flex flex-col">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2 shrink-0" style="font-family: 'Playfair Display'">${found.name}</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4 shrink-0">Kies uw bijgerecht (zonder extra kosten).</p>
      
      <div id="rijst-error" class="hidden bg-error-container text-on-error-container p-3 rounded-lg mb-4 font-label-md flex items-center gap-2 shrink-0">
        <span class="material-symbols-outlined">error</span>
        <span id="rijst-error-text"></span>
      </div>

      <form id="rijst-form" class="flex flex-col">
        <div class="space-y-3 mb-6">
          ${optionsHtml}
        </div>
        <button type="submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors shrink-0">Toevoegen aan bestelling</button>
      </form>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  const form = modal.querySelector('#rijst-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keuze = form.querySelector('input[name="rijst_keuze"]:checked');
    const errorEl = modal.querySelector('#rijst-error');
    const errorText = modal.querySelector('#rijst-error-text');
    
    if (!keuze) {
      errorText.textContent = 'Kies alstublieft witte rijst of lontong.';
      errorEl.classList.remove('hidden');
      return;
    }
    
    errorEl.classList.add('hidden');
    const optionsText = 'Bijgerecht: ' + keuze.value;
    cart.addCustom(itemId, optionsText);
    document.body.style.overflow = '';
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
}

function openGadoModal(itemId) {
  document.body.style.overflow = 'hidden';
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  const optionsHtml = ['Witte Rijst', 'Lontong'].map(opt => `
    <label class="flex items-center gap-3 p-3 border border-secondary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
      <input type="radio" name="gado_keuze" value="${opt}" class="form-radio h-5 w-5 text-primary">
      <span class="font-label-lg text-label-lg text-on-surface">${opt}</span>
    </label>
  `).join('');

  modal.innerHTML = `
    <div class="modal-content !max-w-sm !p-6 !text-left relative flex flex-col">
      <button onclick="this.closest('.modal-overlay').remove()" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">close</span></button>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-2 shrink-0" style="font-family: 'Playfair Display'">Gado Gado</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4 shrink-0">Kies uw basisgerecht voor bij de Gado Gado.</p>
      
      <div id="gado-error" class="hidden bg-error-container text-on-error-container p-3 rounded-lg mb-4 font-label-md flex items-center gap-2 shrink-0">
        <span class="material-symbols-outlined">error</span>
        <span id="gado-error-text"></span>
      </div>

      <form id="gado-form" class="flex flex-col">
        <div class="space-y-3 mb-6">
          ${optionsHtml}
        </div>
        <button type="submit" class="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:bg-primary/90 transition-colors shrink-0">Toevoegen aan bestelling</button>
      </form>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-overlay > .modal-content > button:first-child')) {
      document.body.style.overflow = '';
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));

  const form = modal.querySelector('#gado-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keuze = form.querySelector('input[name="gado_keuze"]:checked');
    const errorEl = modal.querySelector('#gado-error');
    const errorText = modal.querySelector('#gado-error-text');
    
    if (!keuze) {
      errorText.textContent = 'Kies alstublieft witte rijst of lontong.';
      errorEl.classList.remove('hidden');
      return;
    }
    
    errorEl.classList.add('hidden');
    
    const optionsText = 'Basis: ' + keuze.value;
    cart.addCustom(itemId, optionsText);
    document.body.style.overflow = '';
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
}

function renderAfhaalMenu(container) {
  let html = '';
  const allowedCategories = ['favorieten', 'mini_schotels', 'schotels', 'rijsttafels', 'gerechten_rijst', 'broodjes', 'basis', 'groenten', 'vlees', 'kroepoek', 'sambal', 'drinken', 'desserts'];
  const orderedCats = catGroups.flatMap(g => g.cats).filter(c => allowedCategories.includes(c));
  
  for (const catKey of orderedCats) {
    const category = MENU_DATA[catKey];
    if (!category) continue;
    html += `
      <section id="cat-${catKey}" class="category-section scroll-mt-28">
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-3 border-b border-secondary/10 pb-2" style="font-family: 'Playfair Display'">${category.label}</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
    `;
    for (const item of category.items) {
      const spicyHtml = item.spicy > 0 ? `<span class="text-sunset-orange flex items-center gap-0.5 shrink-0" title="Pittig">${'<i class="fa-solid fa-pepper-hot text-[14px]"></i>'.repeat(item.spicy)}</span>` : '';
      const tagsHtml = (item.tags || []).map(t => renderTag(t, false, true)).join('');


      const imgHtml = item.img ? `<img src="${item.img}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg border border-secondary/10 shrink-0">` : '';

      let qtyHtml = '';
      if (SCHOTEL_RULES[item.id]) {
        qtyHtml = `
          <button onclick="event.stopPropagation(); openSchotelModal('${item.id}')" aria-label="Samenstellen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-[18px]">add</span>
          </button>
        `;
      } else if (item.isWeight) {
        qtyHtml = `
          <button onclick="event.stopPropagation(); openWeightModal('${item.id}')" aria-label="Kiezen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-[18px]">scale</span>
          </button>
        `;
      } else if (item.id === 'b1' || item.id === 'b2') {
        qtyHtml = `
          <button onclick="event.stopPropagation(); openBroodjeModal('${item.id}')" aria-label="Kiezen" class="shrink-0 bg-primary/10 text-primary font-label-md px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors whitespace-nowrap">
            Kiezen
          </button>
        `;
      } else if (item.id === 'dr4') {
        qtyHtml = `
          <button onclick="event.stopPropagation(); openFrisModal('${item.id}')" aria-label="Kiezen" class="shrink-0 bg-primary/10 text-primary font-label-md px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors whitespace-nowrap">
            Kiezen
          </button>
        `;
      } else if (item.id === 'v11') {
        qtyHtml = `
          <button onclick="event.stopPropagation(); openGadoModal('${item.id}')" aria-label="Kiezen" class="shrink-0 bg-primary/10 text-primary font-label-md px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors whitespace-nowrap">
            Kiezen
          </button>
        `;
      } else {
        qtyHtml = `<div class="menu-qty-wrapper" data-item-id="${item.id}">`;
        const cartItem = cart.items.find(c => c.id === item.id);
        if (cartItem) {
          qtyHtml += `
            <div class="qty-group shrink-0 scale-90" onclick="event.stopPropagation()">
              <button onclick="event.stopPropagation(); cart.updateQty('${item.id}', ${cartItem.qty - 1})" aria-label="Minder">−</button>
              <span class="qty-value">${cartItem.qty}</span>
              <button onclick="event.stopPropagation(); cart.updateQty('${item.id}', ${cartItem.qty + 1})" aria-label="Meer">+</button>
            </div>
          `;
        } else {
          qtyHtml += `
            <button onclick="event.stopPropagation(); cart.add('${item.id}')" aria-label="Toevoegen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
              <span class="material-symbols-outlined text-[18px]">add</span>
            </button>
          `;
        }
        qtyHtml += `</div>`;
      }

      const priceDisplay = item.isWeight ? `\u20AC${item.price.toFixed(2).replace('.', ',')} <span class="text-[10px] text-on-surface-variant font-normal">/100g</span>` : `\u20AC${item.price.toFixed(2).replace('.', ',')}`;

      const imgHtml2 = item.img ? `<img src="${item.img}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg border border-secondary/10 shrink-0 self-start">` : '';

      html += `
        <div onclick="openDishModal('${item.id}')" class="bg-rice-paper rounded-lg border border-secondary/15 p-3 flex gap-3 group hover:shadow-md hover:border-secondary/40 transition-all cursor-pointer">
          ${imgHtml2}
          <div class="flex-grow flex flex-col justify-between min-w-0">
            <div>
              <h4 class="font-label-lg text-on-surface leading-snug text-[15px] group-hover:text-primary transition-colors text-left break-words whitespace-normal">${item.name}</h4>
              <p class="font-body-md text-on-surface-variant text-[12px] line-clamp-2 leading-snug mt-1">${item.desc}</p>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 mt-2">
              ${spicyHtml}${tagsHtml}
            </div>
          </div>
          <div class="flex flex-col items-end justify-between shrink-0 ml-1">
            <span class="font-label-lg text-primary whitespace-nowrap text-[14px] font-bold">${priceDisplay}</span>
            <div class="mt-2">
              ${qtyHtml}
            </div>
          </div>
        </div>
      `;
    }
    html += `</div></section>`;
  }
  container.innerHTML = html;
}

function renderAfhaalCart(container) {
  const items = cart.items;
  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-on-surface-variant">
        <span class="material-symbols-outlined text-4xl mb-2 block opacity-40">shopping_cart</span>
        <p class="font-body-md text-body-md">Uw winkelwagen is leeg</p>
        <p class="font-label-md text-label-md mt-1">Voeg items toe vanuit het menu</p>
      </div>
    `;
    const mobileCart = document.getElementById('mobile-afhaal-cart');
    if (mobileCart) mobileCart.innerHTML = container.innerHTML;
    return;
  }

  let html = '';
  items.forEach(item => {
    html += `
      <div class="flex justify-between items-start gap-2 py-2 border-b border-secondary/10 last:border-0">
        <div class="min-w-0 flex-grow">
          <span class="font-label-lg text-label-lg text-on-surface block text-[13px]">${item.name}</span>
          ${item.options ? `<span class="font-label-md text-label-md text-on-surface-variant block mt-0.5 whitespace-pre-line text-[11px] leading-tight">${item.options}</span>` : ''}
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <div class="qty-group" style="transform:scale(0.85)">
            <button onclick="cart.updateQty('${item.id}', ${item.qty - 1})" aria-label="Minder">−</button>
            <span class="qty-value">${item.qty}</span>
            <button onclick="cart.updateQty('${item.id}', ${item.qty + 1})" aria-label="Meer">+</button>
          </div>
          <span class="font-label-lg text-label-lg text-on-surface text-[13px] whitespace-nowrap">€${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    `;
  });

  const total = cart.getTotal();
  const btw = total * 9 / 109;
  const sub = total - btw;
  
  container.innerHTML = `
    <div class="flex flex-col gap-1 mb-4">${html}</div>
    <div class="border-t border-secondary/20 pt-3">
      <div class="flex justify-between items-center mb-1">
        <span class="font-body-md text-body-md text-on-surface-variant text-[13px]">Subtotaal</span>
        <span class="font-body-md text-body-md text-on-surface-variant text-[13px]">€ ${sub.toFixed(2).replace('.', ',')}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="font-body-md text-body-md text-on-surface-variant text-[13px]">BTW (9%)</span>
        <span class="font-body-md text-body-md text-on-surface-variant text-[13px]">€ ${btw.toFixed(2).replace('.', ',')}</span>
      </div>
      <div class="flex justify-between items-center font-bold">
        <span class="font-label-lg text-label-lg text-on-surface">Totaal (incl. BTW)</span>
        <span class="font-label-lg text-label-lg text-primary cart-total-price inline-block origin-right">€ ${total.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  `;

  // Sync mobile cart
  const mobileCart = document.getElementById('mobile-afhaal-cart');
  if (mobileCart) {
    mobileCart.innerHTML = container.innerHTML;
  }

  // Price pop animation
  document.querySelectorAll('.cart-total-price').forEach(el => {
    el.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.15)', color: '#7f0017' },
      { transform: 'scale(1)' }
    ], { duration: 300, easing: 'ease-out' });
  });
}

function updateAfhaalMenuQuantities() {
  document.querySelectorAll('.menu-qty-wrapper').forEach(wrapper => {
    const itemId = wrapper.dataset.itemId;
    if (!itemId) return;
    const cartItem = cart.items.find(c => c.id === itemId);
    if (cartItem) {
      wrapper.innerHTML = `
        <div class="qty-group shrink-0 scale-90" onclick="event.stopPropagation()">
          <button onclick="event.stopPropagation(); cart.updateQty('${itemId}', ${cartItem.qty - 1})" aria-label="Minder">−</button>
          <span class="qty-value">${cartItem.qty}</span>
          <button onclick="event.stopPropagation(); cart.updateQty('${itemId}', ${cartItem.qty + 1})" aria-label="Meer">+</button>
        </div>
      `;
    } else {
      wrapper.innerHTML = `
        <button onclick="event.stopPropagation(); cart.add('${itemId}')" aria-label="Toevoegen" class="shrink-0 w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
          <span class="material-symbols-outlined text-[18px]">add</span>
        </button>
      `;
    }
  });
}

// ========================
// CATERING PAGE LOGIC
// ========================
function initCateringPage() {
  const form = document.getElementById('catering-form-element');
  if (!form) return;

  const menuInput = document.getElementById('catering-menu-keuze');
  const personenInput = document.getElementById('catering-personen');
  const datumInput = document.getElementById('catering-datum');
  const adresInput = document.getElementById('catering-adres');
  const postcodeInput = document.getElementById('catering-postcode');
  const stadInput = document.getElementById('catering-stad');
  const naamInput = document.getElementById('catering-naam');
  const emailInput = document.getElementById('catering-email');
  const telInput = document.getElementById('catering-tel');

  const btnBestellen = document.querySelector('[data-catering-action="bestellen"]');
  const btnOfferte = document.querySelector('[data-catering-action="offerte"]');

  // Add error message element for personen
  const personenError = document.createElement('p');
  personenError.className = 'text-error font-label-md text-label-md mt-1 hidden';
  personenInput.parentNode.appendChild(personenError);

  const validateForm = () => {
    const menuKey = menuInput.value;
    const personen = parseInt(personenInput.value, 10);
    const menu = window.MENU_INFO ? window.MENU_INFO[menuKey] : (typeof CATERING_MENUS !== 'undefined' ? CATERING_MENUS[menuKey] : null);
    
    let isMenuAndPersonenValid = false;
    let isAllValid = false;

    // Check minimum persons
    if (menuKey && menu && personen) {
      if (personen < menu.minPersons) {
        personenError.textContent = `Minimum aantal personen voor dit menu is ${menu.minPersons}.`;
        personenError.classList.remove('hidden');
        personenInput.setCustomValidity(`Minimaal ${menu.minPersons} personen`);
      } else {
        personenError.classList.add('hidden');
        personenInput.setCustomValidity('');
        isMenuAndPersonenValid = true;
      }
    } else {
      personenError.classList.add('hidden');
      personenInput.setCustomValidity('');
    }

    // Check all fields for Bestellen
    if (
      isMenuAndPersonenValid &&
      datumInput.value.trim() !== '' &&
      adresInput.value.trim() !== '' &&
      postcodeInput && postcodeInput.value.trim() !== '' &&
      /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(postcodeInput.value.trim()) &&
      stadInput && stadInput.value.trim() !== '' &&
      naamInput.value.trim() !== '' &&
      emailInput.value.trim() !== '' &&
      validateEmail(emailInput.value.trim()) &&
      telInput.value.trim() !== '' &&
      validatePhone(telInput.value.trim())
    ) {
      // Also check if dish selection is complete if we implemented it, but for now we just rely on basic fields
      isAllValid = true;
    }

    // Update buttons visual state only, don't disable them so users can click and see errors
    if (btnOfferte) {
      if (isAllValid) {
        btnOfferte.classList.remove('opacity-50');
      } else {
        btnOfferte.classList.add('opacity-50');
      }
    }

    if (btnBestellen) {
      if (isAllValid) {
        btnBestellen.classList.remove('opacity-50');
      } else {
        btnBestellen.classList.add('opacity-50');
      }
    }
  };

  // Add event listeners to inputs
  [menuInput, personenInput, datumInput, adresInput, postcodeInput, stadInput, naamInput, emailInput, telInput].forEach(input => {
    if (input) {
      input.addEventListener('input', validateForm);
      input.addEventListener('change', validateForm);
    }
  });

  // Since menu input is changed via script (selectMenu), we need an observer or hook
  const originalSelectMenu = window.selectMenu;
  window.selectMenu = function(menuKey, clickedBtn) {
    if (originalSelectMenu) originalSelectMenu(menuKey, clickedBtn);
    setTimeout(validateForm, 50);
  };

  // Initial validation state
  validateForm();

  // Handle submit
  const submitBtns = document.querySelectorAll('[data-catering-action]');
  submitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.disabled) return;
      
      const form = btn.closest('form');
      if (form && !form.reportValidity()) return;
      
      const telInput = form.querySelector('input[type="tel"]');
      if (telInput && !validatePhone(telInput.value.trim())) {
        telInput.setCustomValidity('Vul een geldig telefoonnummer in (bijv. 06 12345678)');
        telInput.reportValidity();
        return;
      } else if (telInput) {
        telInput.setCustomValidity('');
      }
      
      const botField = document.getElementById('catering-bot-field');
      if (botField && botField.value !== '') {
        console.warn('Spam detected');
        return; // Silently reject if honeypot is filled
      }
      
      const action = btn.dataset.cateringAction;
      
      const formEl = document.getElementById('catering-form-element');
      const formData = new FormData(formEl);
      
      const menuNaam = document.getElementById('sidebar-menu-title')?.textContent + ' ' + (document.getElementById('sidebar-menu-subtitle')?.textContent || '');
      const personen = formData.get('personen');
      const vega = formData.get('vega') || '0';
      const datum = formData.get('datum');
      const bestek = formData.get('bestek') ? 'Ja' : 'Nee';
      const opscheppen = formData.get('opscheppen') ? 'Ja' : 'Nee';
      const adres = formData.get('adres');
      const postcode = formData.get('postcode') || '';
      const stad = formData.get('stad') || '';
      const naam = formData.get('naam');
      const email = formData.get('email');
      const telefoon = formData.get('telefoon');
      const opmerkingen = formData.get('opmerkingen') || '';
      const betaal = formData.get('betaalmethode') || '';
      
      let gerechtenTekst = '';
      if (window.selectedDishes) {
          const allDishes = [
              ...(window.selectedDishes.basis || []).map(d => '- ' + d + ' (Basis)'),
              ...(window.selectedDishes.vlees || []).map(d => '- ' + d + ' (Vlees)'),
              ...(window.selectedDishes.groenten || []).map(d => '- ' + d + ' (Groenten)'),
              ...(window.selectedDishes.snacks || []).map(d => '- ' + d + ' (Snack)')
          ];
          if (allDishes.length > 0) {
              gerechtenTekst = '\n*Geselecteerde Gerechten:*\n' + allDishes.join('\n') + '\n';
          }
      }
      
      const typeText = action === 'offerte' ? 'Offerte Aanvraag' : 'Nieuwe Catering Bestelling';
      const orderTotal = document.getElementById('form-summary-total')?.textContent || '€0,00';
      
      let messageText = `*${typeText}*\n\n` +
                        `*Menu:* ${menuNaam}\n` +
                        `*Aantal personen:* ${personen} (Vega: ${vega})\n` +
                        `*Datum:* ${datum}\n` +
                        `*Borden & Bestek:* ${bestek}\n` +
                        `*Opscheppen door ons:* ${opscheppen}\n` +
                        `${gerechtenTekst}\n` +
                        `*Geschat Totaal:* ${orderTotal}\n\n` +
                        `*Klantgegevens:*\n` +
                        `Naam: ${naam}\n` +
                        `Tel: ${telefoon}\n` +
                        `Email: ${email}\n\n` +
                        `*Bezorgadres:*\n` +
                        `${adres}\n${postcode} ${stad}\n\n` +
                        `*Betaalmethode:* ${betaal}\n` +
                        `*Opmerkingen:* ${opmerkingen || 'Geen'}`;
      
      const encodedMessage = encodeURIComponent(messageText);
      const phoneStr = RESTAURANT.phone.replace(/[^0-9]/g, '');
      const waUrl = `https://wa.me/31${phoneStr.substring(1)}?text=${encodedMessage}`;
      
      window.open(waUrl, '_blank');

      showConfirmation(action === 'offerte' ? 'catering-offerte' : 'catering-bestellen');
    });
  });
}

// ========================
// CHECKOUT OVERVIEW MODAL
// ========================
function showCheckoutOverview(info) {
  const items = cart.items;
  const total = cart.getTotal();

  // Hide mobile cart elements
  const mobileBar = document.getElementById('mobile-cart-bar');
  if (mobileBar) mobileBar.style.display = 'none';
  const mobileModal = document.getElementById('mobile-cart-modal');
  if (mobileModal) mobileModal.classList.remove('active');

  // Format date
  let dateStr = '';
  if (info.pickupDate) {
    const d = new Date(info.pickupDate + 'T00:00:00');
    const days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
    const months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
    dateStr = `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  // Payment method label
  const payLabels = { ideal: 'iDEAL', winkel: 'Afrekenen in de winkel', contant: 'Contant bij afhalen', pin: 'Pin bij afhalen' };
  const payLabel = payLabels[info.betaalmethode] || info.betaalmethode;

  // Build item rows
  let itemsHtml = '';
  items.forEach(item => {
    itemsHtml += `
      <div class="flex justify-between items-center py-3 border-b border-secondary/10 last:border-0">
        <div class="flex items-center gap-3 min-w-0">
          <span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <span class="font-label-lg text-label-lg text-primary">${item.qty}×</span>
          </span>
          <div class="min-w-0 flex-grow">
            <span class="font-body-md text-body-md text-on-surface truncate block">${item.name}</span>
            ${item.options ? `<span class="font-label-md text-label-md text-on-surface-variant block whitespace-pre-line text-[11px] mt-0.5 leading-tight">${item.options}</span>` : ''}
          </div>
        </div>
        <span class="font-label-lg text-label-lg text-on-surface shrink-0 ml-3">€ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
      </div>
    `;
  });

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content flex flex-col !max-w-xl !p-0 !rounded-2xl !text-left overflow-hidden" style="max-height: 90dvh;">
      <!-- Header -->
      <div class="shrink-0 bg-primary/5 border-b border-secondary/10 px-6 py-5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary icon-filled text-[28px]">receipt_long</span>
          <h2 class="font-headline-md text-headline-md text-on-surface" style="font-family: 'Playfair Display'">Besteloverzicht</h2>
        </div>
        <button onclick="this.closest('.modal-overlay').remove()" class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-full transition-all">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="overflow-y-auto flex-grow min-h-0">

        <!-- Order Items -->
        <div class="px-6 py-4">
          <div class="flex items-center gap-2 mb-3">
            <span class="material-symbols-outlined text-secondary text-[18px]">shopping_bag</span>
            <h3 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Uw Bestelling</h3>
          </div>
          <div class="bg-surface-container-lowest rounded-xl border border-secondary/10 px-4">
            ${itemsHtml}
          </div>
        </div>

        <!-- Totals -->
        <div class="px-6 pb-4">
          <div class="bg-rice-paper rounded-xl border border-secondary/15 p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="font-body-md text-body-md text-on-surface-variant">Subtotaal (${cart.getCount()} items)</span>
              <span class="font-body-md text-body-md text-on-surface-variant">€ ${(total - (total * 9 / 109)).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="flex justify-between items-center mb-3">
              <span class="font-body-md text-body-md text-on-surface-variant">BTW (9%)</span>
              <span class="font-body-md text-body-md text-on-surface-variant">€ ${(total * 9 / 109).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="flex justify-between items-center pt-2 border-t border-secondary/15">
              <span class="font-headline-sm text-headline-sm text-on-surface">Totaal (incl. BTW)</span>
              <span class="font-headline-sm text-headline-sm text-primary">€ ${total.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>

        <!-- Pickup Info -->
        <div class="px-6 pb-4">
          <div class="flex items-center gap-2 mb-3">
            <h3 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Ophaalgegevens</h3>
          </div>
          <div class="bg-surface-container-lowest rounded-xl border border-secondary/10 p-4 space-y-3">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">calendar_today</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Datum</span>
                <span class="font-body-md text-body-md text-on-surface">${dateStr || 'Niet opgegeven'}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">schedule</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Ophaaltijd</span>
                <span class="font-body-md text-body-md text-on-surface">${info.pickupTime || 'Niet opgegeven'}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">${info.temp === 'warm' ? 'local_fire_department' : 'ac_unit'}</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Temperatuur</span>
                <span class="font-body-md text-body-md text-on-surface">${info.temp === 'warm' ? 'Warm' : 'Koud'}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Ophaaladres</span>
                <span class="font-body-md text-body-md text-on-surface">${RESTAURANT.address}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="px-6 pb-4">
          <div class="flex items-center gap-2 mb-3">
            <span class="material-symbols-outlined text-secondary text-[18px]">person</span>
            <h3 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Uw Gegevens</h3>
          </div>
          <div class="bg-surface-container-lowest rounded-xl border border-secondary/10 p-4 space-y-3">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">badge</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Naam</span>
                <span class="font-body-md text-body-md text-on-surface">${info.naam}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">mail</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">E-mailadres</span>
                <span class="font-body-md text-body-md text-on-surface">${info.email}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">call</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Telefoon</span>
                <span class="font-body-md text-body-md text-on-surface">${info.telefoon}</span>
              </div>
            </div>
            ${info.opmerking ? `
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">comment</span>
              <div>
                <span class="font-label-md text-label-md text-on-surface-variant block">Opmerking</span>
                <span class="font-body-md text-body-md text-on-surface whitespace-pre-wrap">${info.opmerking}</span>
              </div>
            </div>
            ` : ''}
          </div>
        </div>

        <!-- Payment -->
        <div class="px-6 pb-4">
          <div class="flex items-center gap-2 mb-3">
            <span class="material-symbols-outlined text-secondary text-[18px]">payments</span>
            <h3 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Betaalmethode</h3>
          </div>
          <div class="bg-surface-container-lowest rounded-xl border border-secondary/10 p-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-[20px]">${info.betaalmethode === 'winkel' ? 'storefront' : (info.betaalmethode === 'contant' || info.betaalmethode === 'pin' ? 'point_of_sale' : 'credit_card')}</span>
            <span class="font-body-md text-body-md text-on-surface">${payLabel}</span>
          </div>
        </div>

      </div>

      <!-- Bottom Actions -->
      <div class="shrink-0 border-t border-secondary/10 px-6 py-4 bg-rice-paper flex flex-col sm:flex-row gap-3">
        <button onclick="this.closest('.modal-overlay').remove(); const mcb = document.getElementById('mobile-cart-bar'); if (mcb && cart.getCount() > 0) mcb.style.display = 'block';" class="flex-1 border border-secondary/30 text-on-surface-variant font-label-lg text-label-lg px-6 py-3.5 rounded-lg hover:bg-surface-variant/20 transition-all flex items-center justify-center gap-2" style="font-family: 'Plus Jakarta Sans'">
          <span class="material-symbols-outlined text-[20px]">edit</span>
          Wijzigen
        </button>
        <button onclick="this.closest('.modal-overlay').remove(); showConfirmation('afhaal');" class="flex-[2] bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-lg hover:bg-primary/90 hover:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 shadow-md shadow-primary/20" style="font-family: 'Plus Jakarta Sans'">
          <span class="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
          Bevestig & Betaal — € ${total.toFixed(2).replace('.', ',')}
        </button>
      </div>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  requestAnimationFrame(() => modal.classList.add('active'));
}

// ========================
// CONFIRMATION MODAL
// ========================
function showConfirmation(type) {
  let title, message, icon;

  switch (type) {
    case 'afhaal':
      title = 'Bestelling Ontvangen!';
      message = 'Uw afhaalbestelling is succesvol geplaatst. U ontvangt een bevestiging. Wij bereiden uw bestelling met zorg voor.';
      icon = 'check_circle';
      break;
    case 'catering-bestellen':
      title = 'Catering Bestelling Ontvangen!';
      message = 'Uw cateringbestelling is ontvangen. Wij nemen zo snel mogelijk contact met u op om de details te bevestigen. Een bevestiging wordt verstuurd naar uw opgegeven e-mailadres.';
      icon = 'celebration';
      break;
    case 'catering-offerte':
      title = 'Offerte Aangevraagd!';
      message = 'Uw offerte-aanvraag is verstuurd. Wij sturen u binnen 24 uur een vrijblijvende offerte naar uw opgegeven e-mailadres.';
      icon = 'description';
      break;
  }

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="material-symbols-outlined icon-filled text-paddy-green text-6xl mb-4">${icon}</span>
      <h2 class="font-headline-md text-headline-md text-on-surface mb-4" style="font-family: 'Playfair Display'">${title}</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-6" style="font-family: 'Plus Jakarta Sans'">${message}</p>
      <p class="font-label-md text-label-md text-on-surface-variant mb-6" style="font-family: 'Plus Jakarta Sans'">Vragen? Bel ons op <a href="${RESTAURANT.phoneLink}" class="text-primary hover:underline">${RESTAURANT.phone}</a> of mail naar <a href="${RESTAURANT.emailLink}" class="text-primary hover:underline">${RESTAURANT.email}</a></p>
      <button onclick="this.closest('.modal-overlay').remove(); ${type === 'afhaal' ? 'cart.clear();' : ''}" class="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded hover:bg-primary/90 transition-colors" style="font-family: 'Plus Jakarta Sans'">Sluiten</button>
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  document.body.appendChild(modal);

  // Trigger animation
  requestAnimationFrame(() => modal.classList.add('active'));
}

// ========================
// SCROLL ANIMATIONS
// ========================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

window.openCateringDishInfo = function(category, dishName) {
  const catData = MENU_DATA[category];
  if (!catData || !catData.items) return;
  const item = catData.items.find(i => i.name === dishName);
  if (!item) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.style.zIndex = '1000';
  document.body.style.overflow = 'hidden';

  const defaultImg = category === 'groenten' ? 'img/placeholder_vega_1780398987858.png' : 
                    category === 'snacks' ? 'img/placeholder_snack_1780399002346.png' : 
                    category === 'basis' ? 'img/placeholder_rijst_1780398963745.png' :
                    'img/placeholder_vlees_1780398974766.png';
  const imgSrc = item.img || defaultImg;

  let tagsHtml = '';
  if (item.tags && item.tags.length > 0) {
    tagsHtml = `<div class="mt-4 flex flex-wrap justify-center gap-2">` + 
      item.tags.map(tag => renderTag(tag, true)).join('') +
      `</div>`;
  }

  modal.innerHTML = `
    <div class="modal-content !max-w-md !p-0 overflow-hidden relative max-h-[80vh] flex flex-col w-[calc(100%-2.5rem)] m-auto">
      <div class="h-48 sm:h-56 w-full relative shrink-0 rounded-t-[16px] overflow-hidden bg-surface-variant flex items-center justify-center">
        <img src="${imgSrc}" class="absolute inset-0 w-full h-full object-cover opacity-40 blur-md scale-110" alt="">
        <img src="${imgSrc}" class="relative w-full h-full object-contain z-10" alt="${item.name}">
        <button onclick="document.body.style.overflow=''; this.closest('.modal-overlay').remove()" class="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-on-surface hover:text-primary transition-colors z-20 shadow-sm flex items-center justify-center w-8 h-8">
          <span class="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
      <div class="p-5 sm:p-6 text-center overflow-y-auto">
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 flex justify-center items-center gap-2">
          ${item.name}
          ${item.spicy > 0 ? `<i class="fa-solid fa-pepper-hot text-sunset-orange" title="Pittig"></i>` : ''}
        </h3>
        <p class="font-body-md text-body-md text-on-surface-variant text-[13px] sm:text-[14px] leading-relaxed">${item.desc}</p>
        ${tagsHtml}
      </div>
    </div>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.style.overflow = '';
      modal.remove();
    }
  });

  document.body.appendChild(modal);
};

// ========================
// LIVE SEARCH LOGIC
// ========================
function initLiveSearch() {
  const searchInput = document.getElementById('menu-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section[id^="cat-"]');
    
    sections.forEach(section => {
      let visibleCount = 0;
      const items = section.querySelectorAll('div.bg-rice-paper');
      
      items.forEach(item => {
        const title = item.querySelector('h4, h3')?.textContent.toLowerCase() || '';
        const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
        const categoryLabel = section.querySelector('h3, h2')?.textContent.toLowerCase() || '';
        
        if (title.includes(query) || desc.includes(query) || categoryLabel.includes(query)) {
          item.style.display = ''; // Revert to default flex from CSS
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });
      
      if (visibleCount === 0 && items.length > 0) {
        section.style.display = 'none';
      } else {
        section.style.display = '';
      }
    });
  });
}

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAfhaalPage();
  initCateringPage();
  initScrollAnimations();
  initLiveSearch();
});

// ========================
// GLOBAL BACK-TO-TOP BUTTON
// ========================
document.addEventListener('DOMContentLoaded', () => {
  const bttBtn = document.createElement('button');
  bttBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">arrow_upward</span>';
  bttBtn.className = 'fixed bottom-6 md:bottom-8 right-5 md:right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-[90] transition-all duration-300 opacity-0 pointer-events-none hover:bg-primary/90 hover:scale-105';
  bttBtn.setAttribute('aria-label', 'Terug naar boven');
  bttBtn.style.transform = 'translateY(20px)';
  document.body.appendChild(bttBtn);

  const updateBttPosition = () => {
    const cartBar = document.getElementById('cart-bar');
    const mobileCartBar = document.getElementById('mobile-cart-bar');
    const isCartVisible = (cartBar && cartBar.style.display !== 'none') || (mobileCartBar && mobileCartBar.style.display !== 'none');

    if (window.scrollY > 400) {
      bttBtn.classList.remove('opacity-0', 'pointer-events-none');
      bttBtn.classList.add('opacity-100');
      bttBtn.style.transform = isCartVisible ? 'translateY(-80px)' : 'translateY(0)';
    } else {
      bttBtn.classList.add('opacity-0', 'pointer-events-none');
      bttBtn.classList.remove('opacity-100');
      bttBtn.style.transform = 'translateY(20px)';
    }
  };

  window.addEventListener('scroll', updateBttPosition);
  if (typeof cart !== 'undefined' && cart.onChange) {
    cart.onChange(updateBttPosition);
  }

  bttBtn.addEventListener('click', () => {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    
    if (!isHomePage) {
      let targetEl = document.querySelector('main');
      if (!targetEl) {
        const sections = document.querySelectorAll('section');
        for (let i = 1; i < sections.length; i++) {
          if (window.getComputedStyle(sections[i]).display !== 'none') {
            targetEl = sections[i];
            break;
          }
        }
      }

      if (targetEl) {
        const yOffset = -100;
        const targetY = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Parallax Effect for Hero Images
document.addEventListener('DOMContentLoaded', () => {
  const parallaxEls = document.querySelectorAll('.parallax-bg');
  if (parallaxEls.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        // Move element down at 30% of scroll speed, scale slightly to prevent edges showing
        el.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0) scale(1.15)`;
      });
    }, { passive: true });
  }
});
