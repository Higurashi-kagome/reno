var fs = require('fs');

// 写入文件名数据
const path = './js/index.js';
try {
    var jsContent = fs.readFileSync(path, 'utf8');
} catch (err) {
    console.error(err);
}
var res = fs.readdirSync("./res");
jsContent = jsContent.replace(/(var\s+res\s*=\s*)(\[.*\])/,`$1${JSON.stringify(res)}`);
fs.writeFile(path, jsContent, err => {
  if (err) {
    console.error(err);
    return;
  }
});