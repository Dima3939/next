const fs = require('fs');
const html = fs.readFileSync('infisical_dump.html', 'utf8');

// Find all main children inside <div id="__next">
const mainContent = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<div id="__next"[^>]*>([\s\S]*?)<\/div>/i);
console.log('Main found?', Boolean(mainContent));

// Find all elements with data-testid or id or top-level classes
const elements = html.matchAll(/<(?:div|section)[^>]+(?:id="([^"]+)"|class="([^"]*(?:container|section|wrapper|grid|product|v2-)[^"]*)")[^>]*>/gi);
const found = [];
for (const e of elements) {
  found.push(e[1] || e[2]);
}
console.log('Unique ids/classes:', Array.from(new Set(found)).slice(0, 40));

// Let's search for "Secrets Management" block
const sm = html.indexOf('Secrets Management');
if (sm !== -1) {
  console.log('\n=== Secrets Management Context ===\n', html.slice(sm - 200, sm + 600));
}

// Search for "We support your stack"
const stack = html.indexOf('We support your stack');
if (stack !== -1) {
  console.log('\n=== Stack Context ===\n', html.slice(stack - 200, stack + 600));
}

// Search for "Infisical customers are happy"
const cust = html.indexOf('Infisical customers are happy');
if (cust !== -1) {
  console.log('\n=== Customer Context ===\n', html.slice(cust - 200, cust + 600));
}
