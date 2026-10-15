const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

const tStart = html.indexOf('stage-table');
if (tStart !== -1) {
  console.log(html.slice(tStart - 50, tStart + 2500));
}
