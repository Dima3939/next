const fs = require('fs');
const css = fs.readFileSync('infisical.css', 'utf8');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

// 1. CSS root variables
console.log('=== CSS ROOT VARIABLES ===');
const rootMatch = css.match(/:root\s*\{([^}]+)\}/);
if (rootMatch) {
  console.log(rootMatch[1].split(';').map(s => s.trim()).filter(Boolean).slice(0, 30).join('\n'));
}

// 2. Buttons in css
console.log('\n=== V2-BTN STYLES ===');
const btnMatch = css.match(/\.v2-btn--primary\s*\{([^}]+)\}/);
if (btnMatch) console.log('primary:', btnMatch[1]);
const btnSecMatch = css.match(/\.v2-btn--secondary\s*\{([^}]+)\}/);
if (btnSecMatch) console.log('secondary:', btnSecMatch[1]);

// 3. Inspect Hero HTML
console.log('\n=== HERO SECTION HTML ===');
const heroMatch = html.match(/<section[^>]*>([\s\S]*?)<\/section>/i);
if (heroMatch) {
  console.log(heroMatch[0].slice(0, 1500));
}
