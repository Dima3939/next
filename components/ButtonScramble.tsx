'use client';
import { useEffect } from 'react';

const GLYPHS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function ButtonScramble() {
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, .v2-btn, [role="button"], [role="tab"], .v2-announcement-pill'
      ) as HTMLElement | null;
      if (!target) return;

      // Skip brand logo or non-text elements
      const targetText = target.innerText?.trim() || target.textContent?.trim() || '';
      if (!targetText || targetText === 'MONOLITH' || target.getAttribute('href') === '/' || target.getAttribute('href') === '/next') {
        return;
      }

      // Skip icon-only buttons (like theme toggle or purely SVG links)
      if (target.children.length === 1 && target.children[0].tagName.toLowerCase() === 'svg' && !targetText) {
        return;
      }

      // Skip if already scrambling
      if (target.dataset.scrambling === 'true') return;

      // Find the first non-empty text node not inside SVG/script/style
      const walker = document.createTreeWalker(
        target,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            const parent = node.parentElement;
            if (parent?.closest('svg, script, style, noscript')) {
              return NodeFilter.FILTER_REJECT;
            }
            if (node.nodeValue && node.nodeValue.trim().length > 0) {
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_SKIP;
          }
        }
      );

      const textNode = walker.nextNode() as Text | null;
      if (!textNode) return;

      const raw = textNode.nodeValue || '';
      const trimmed = raw.trim();
      if (!trimmed || trimmed.length < 2) return;
      if (trimmed === 'MONOLITH') return;

      const match = raw.match(/^(\s*)(.*?)(\s*)$/);
      const prefix = match ? match[1] : '';
      const original = match ? match[2] : trimmed;
      const suffix = match ? match[3] : '';

      // Ensure transforms work on inline elements
      const prevDisplay = target.style.display;
      const computedDisplay = window.getComputedStyle(target).display;
      if (computedDisplay === 'inline') {
        target.style.display = 'inline-block';
      }

      target.dataset.scrambling = 'true';
      target.classList.add('v2-btn-shaking');

      let iteration = 0;
      const totalChars = original.length;
      // Scramble duration ~260ms - 320ms
      const speed = Math.max(0.5, totalChars / 14);
      const intervalMs = 20;

      const interval = setInterval(() => {
        const scrambled = original
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n' || char === '\t') return char;
            if (index < iteration) {
              return original[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        textNode.nodeValue = prefix + scrambled + suffix;

        if (iteration >= totalChars) {
          clearInterval(interval);
          textNode.nodeValue = prefix + original + suffix;
          target.dataset.scrambling = 'false';
          target.classList.remove('v2-btn-shaking');
          if (computedDisplay === 'inline') {
            target.style.display = prevDisplay;
          }
        }

        iteration += speed;
      }, intervalMs);
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, []);

  return null;
}
