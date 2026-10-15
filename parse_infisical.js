const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

console.log('=== SECTIONS & STRUCTURE ===');
const hMatches = html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi);
for (const m of hMatches) {
  const clean = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  console.log(`${m[1].toUpperCase()}: ${clean}`);
}

console.log('\n=== CSS LINKS ===');
const links = html.matchAll(/<link[^>]+href="([^"]+\.css[^"]*)"/gi);
for (const l of links) {
  console.log(l[1]);
}

console.log('\n=== BUTTONS / CTAS ===');
const buttons = html.matchAll(/<(button|a)[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/\1>/gi);
let count = 0;
for (const b of buttons) {
  const text = b[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length > 0 && text.length < 50 && count < 25) {
    console.log(`[${b[1]}] ${text} (class: ${b[2].slice(0, 40)}...)`);
    count++;
  }
}
