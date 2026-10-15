const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

// Print all section tags and their inner titles
const sectionMatches = html.matchAll(/<section[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/section>/gi);
let sIdx = 1;
for (const s of sectionMatches) {
  const title = s[2].match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
  console.log(`\n--- SECTION ${sIdx++}: class="${s[1]}" ---`);
  if (title) console.log('Heading:', title[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const ps = s[2].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const p of ps) {
    const text = p[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 20 && text.length < 150) console.log('  p:', text);
  }
}
