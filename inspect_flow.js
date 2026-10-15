const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

// Find all main sections or divs with class or id
console.log('=== SECTIONS IN ORDER ===');
const sections = html.matchAll(/<(section|div)[^>]*(id="[^"]*"|class="[^"]*(?:hero|feature|product|integrat|customer|trust|bento|cta|stage)[^"]*")[^>]*>/gi);
let list = [];
for (const s of sections) {
  list.push(s[0].slice(0, 150));
}
console.log(list.slice(0, 30).join('\n'));

// Let's dump the text content of the main parts
console.log('\n=== H1 & INTRO ===');
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
if (h1Match) console.log(h1Match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

// Find the main product cards
console.log('\n=== PRODUCTS / BENTO ===');
const h3s = html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi);
for (const h of h3s) {
  console.log('H3:', h[1].replace(/<[^>]+>/g, '').trim());
}

// Check the CTA section
console.log('\n=== CTA / BOTTOM ===');
const ctaMatch = html.match(/Starting with Infisical[\s\S]*?<\/section>/i);
if (ctaMatch) console.log(ctaMatch[0].replace(/<[^>]+>/g, ' ').slice(0, 500));
