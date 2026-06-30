const fs = require('fs');

const mappings = {
  'Loempia Semarang': 'Dapur Ibu_  Loempia.jpg',
  'Pastei': 'Dapur Ibu_  Pastei.jpg',
  'Risolles (Normaal)': 'Dapur Ibu_  Risoles.jpg',
  'Risolles (Pittig)': 'Dapur Ibu_  Risoles pedis.jpg',
  'Kroket': 'Dapur Ibu_  Kroket.jpg',
  'Frikadel Jagung': 'Dapur Ibu_  Frikandel jagung.jpg',
  'Martabak': 'Dapur Ibu_  Martabak telor.jpg',
  'Bapao Kip': 'Dapur Ibu_  Bapao.jpg',
  'Lemper': 'Dapur Ibu_  Lemper.jpg',
  'Soto Ayam': 'Dapur Ibu_  Soto ayam.jpg',
  'Rawon': 'Dapur Ibu_  Rawon.jpg',
  'Lontong': 'Dapur Ibu_Lontong.jpg',
  'Nasi': 'Dapur Ibu_Nasi goreng.jpg',
  'Bami': 'Dapur Ibu_ Bami goreng.jpg',
  'Mihoen': 'Dapur Ibu_ Mihoen.jpg',
  'Nasi kuning': 'Dapur Ibu_Nasi Kuning.jpg',
  'Nasi Jawa': 'Dapur Ibu_Nasi goreng jawa.jpg',
  'Bami Jawa': 'Dapur Ibu_ Bami jawa.jpg',
  'Sajoer Lodeh': 'Dapur Ibu_ Sayur lodeh.jpg',
  'Sambal Goreng Boontjes': 'Dapur Ibu_ Sambal boontjes.jpg',
  'Tahoe Bali': 'Dapur Ibu_ Tahoe bali.jpg',
  'Oerap-Oerap': 'Dapur Ibu_ Oerap.jpg',
  'Tumis Kacang Panjang': 'Dapur Ibu_ Katjang panjang.jpg',
  'Tjaptjoi': 'Dapur Ibu_ Tjap tjoy.jpg',
  'Terong Belado': 'Dapur Ibu_ Terong blado.jpg',
  'Atjar Ketimoen': 'Dapur Ibu_ Atjar.jpg',
  'Mais boontjes': 'Dapur Ibu_ Mais boontjes.jpg',
  'Telor Goreng': 'Dapur Ibu_ Telor.jpg',
  'Ayam Cashew': 'Dapur Ibu_ Kip cashew.jpg',
  'Ayam Cashew Ketjap': 'Dapur Ibu_ Kip cashew ketjap.jpg',
  'Ayam Roedjak': 'Dapur Ibu_  Ayam rujak.jpg',
  'Ayam Opor': 'Dapur Ibu_  Ayam opor.jpg',
  'Ayam Smoor': 'Dapur Ibu_  Ayam semoor.jpg',
  'Daging Smoor': 'Dapur Ibu_Daging Semoor.jpg',
  'Daging Rendang': 'Dapur Ibu_ Daging rendang.jpg',
  'Daging Bali': 'Dapur Ibu_ Daging bali.jpg',
  'Daging Blado': 'Dapur Ibu_ Daging blado.jpg',
  'Babi Ketjap': 'Dapur Ibu_  Babi ketjap.jpg',
  'Sambal goreng Oedang Peteh': 'Dapur Ibu_ Udang pete.jpg',
  'Kue Lapis': 'Dapur Ibu_  Kue lapis.jpg',
  'Spekkoek': 'Dapur Ibu_  Spekkoek.jpg',
  'Saté Ayam (kip)': 'Dapur Ibu_  Sate ayam.jpg',
  'Tempeh Blado met Pete': 'Dapur Ibu_ Tempe blado.jpg'
};

let content = fs.readFileSync('js/app.js', 'utf8');
const basePath = 'img/snuzepoes_dapur-ibu-gerechten_2026-06-15_1204/';

for (const [name, imgFile] of Object.entries(mappings)) {
    const safeName = name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Regex looks for: name: 'Match', ... img: 'old_img.png'
    const regex = new RegExp(`(name:\\s*['"]${safeName}['"][^}]*img:\\s*['"])([^'"]*)(['"])`, 'g');
    content = content.replace(regex, `$1${basePath}${imgFile}$3`);
}

fs.writeFileSync('js/app.js', content, 'utf8');
console.log('Images updated in app.js');
