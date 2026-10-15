'use client';
import { useEffect } from 'react';

const GLYPHS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function ButtonScramble() {
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLElement | null;
      if (!eventTarget) return;

      // 1. HARD EXCLUSION: Skip mockup preview UI, informational cards, and sliders (User Screenshots 1, 2, 3)
      if (
        eventTarget.closest(
          // Image 1: Hero right dashboard interactive mockup & card slots
          '.stage-visual, .collage, .peek-card, .stage-app, .card-slot, .hero-experiment .stage-visual, [role="tablist"], ' +
          // Image 2: Reliability / Metrics cards
          '.v2-label-card, .metrics-cards, .v2-feature-row, ' +
          // Image 3: Customer stories cards & carousel controls
          '.customer-stories-card, .customer-stories-clip, .customer-stories-strip, .customer-stories-controls, ' +
          // Social marquee & explicit card containers
          '.animate-marquee, [data-card="true"], [data-no-scramble="true"]'
        )
      ) {
        return;
      }

      // 2. Only match real buttons, action links, and announcement pills
      const target = eventTarget.closest('a, button, .v2-btn, .v2-announcement-pill') as HTMLElement | null;
      if (!target) return;

      // Re-verify target itself isn't inside an excluded container
      if (
        target.closest(
          '.stage-visual, .collage, .peek-card, .stage-app, .card-slot, .hero-experiment .stage-visual, [role="tablist"], ' +
          '.v2-label-card, .metrics-cards, .v2-feature-row, ' +
          '.customer-stories-card, .customer-stories-clip, .customer-stories-strip, .customer-stories-controls, ' +
          '.animate-marquee, [data-card="true"], [data-no-scramble="true"]'
        )
      ) {
        return;
      }

      // Skip card containers: real buttons/links never contain paragraphs, headings, or tables
      if (target.querySelector('p, h1, h2, h3, h4, table')) {
        return;
      }

      // Skip brand logo or home links
      const targetText = target.innerText?.trim() || target.textContent?.trim() || '';
      if (
        !targetText || 
        targetText === 'MONOLITH' || 
        target.getAttribute('href') === '/' || 
        target.getAttribute('href') === '/next' ||
        target.getAttribute('aria-label') === 'MONOLITH home'
      ) {
        return;
      }

      // Skip icon-only buttons (like theme toggle or purely SVG links)
      if (target.children.length === 1 && target.children[0].tagName.toLowerCase() === 'svg' && !targetText) {
        return;
      }

      // Skip if already scrambling
      if (target.dataset.scrambling === 'true') return;

      // Find the primary text node
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
      // Only scramble words/phrases with 2 to 55 characters (prevents large text blocks)
      if (!trimmed || trimmed.length < 2 || trimmed.length > 55) return;
      if (trimmed === 'MONOLITH') return;

      const match = raw.match(/^(\s*)(.*?)(\s*)$/);
      const prefix = match ? match[1] : '';
      const original = match ? match[2] : trimmed;
      const suffix = match ? match[3] : '';

      // Ensure transforms work smoothly on inline elements
      const prevDisplay = target.style.display;
      const computedDisplay = window.getComputedStyle(target).display;
      if (computedDisplay === 'inline') {
        target.style.display = 'inline-block';
      }

      target.dataset.scrambling = 'true';
      target.classList.add('v2-btn-shaking');

      let iteration = 0;
      const totalChars = original.length;
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
