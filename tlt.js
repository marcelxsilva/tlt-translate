const YOUR_KEY_OF_YANDEX = "YOUR_KEY_OF_YANDEX";
const yandex = require("yandex-translate")(YOUR_KEY_OF_YANDEX);
var args = process.argv
const langs = ['pt', 'en'];
if(args[2] == '-h'){
    console.log(`
Usage: tlt <language> <value>

Where: <language>
    pt, en

Where: <value>
    "hi friend"


   tlt pt "hi friend"
        `)
}else {
for (const item of langs) {
    if (item === args[2]) {
       translate(args[3], args[2])
    }
}
}
function translate(wordToTranlate, language) {
        yandex.translate(wordToTranlate.toString(), { to: language }, (err,res) => {
            console.log("Response: ", ...res.text);
          });
  }