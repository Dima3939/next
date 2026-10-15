const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

// Find stage-split
const start = html.indexOf('stage-split');
if (start !== -1) {
  console.log(html.slice(start - 50, start + 3000));
}
