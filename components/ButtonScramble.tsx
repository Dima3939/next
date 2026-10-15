'use client';
import { useEffect } from 'react';

const GLYPHS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function ButtonScramble() {
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '.v2-btn, button, a[class*="v2-btn"], .v2-product-block-cta'
      ) as HTMLElement | null;
      if (!target) return;

      // Skip if already scrambling
      if (target.dataset.scrambling === 'true') return;

      // Identify text node or text span
      let textNode: Text | null = null;
      let textSpan: HTMLElement | null = null;
      let original = '';
      let hasLeadingSpace = false;

      for (const child of Array.from(target.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) {
          textNode = child as Text;
          hasLeadingSpace = child.textContent.startsWith(' ');
          original = child.textContent.trim();
          break;
        } else if (child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName !== 'svg') {
          const el = child as HTMLElement;
          if (el.textContent?.trim() && !el.querySelector('svg')) {
            textSpan = el;
            original = el.textContent.trim();
            break;
          }
        }
      }

      if (!original) {
        // Fallback: search deep for first text node
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
        let node: Node | null;
        while ((node = walker.nextNode())) {
          if (node.textContent?.trim() && !node.parentElement?.closest('svg')) {
            textNode = node as Text;
            hasLeadingSpace = node.textContent?.startsWith(' ') || false;
            original = node.textContent.trim();
            break;
          }
        }
      }

      if (!original) return;

      target.dataset.scrambling = 'true';
      target.classList.add('v2-btn-shaking');

      let iteration = 0;
      const totalChars = original.length;
      // Scramble speed: increments iteration each tick (~250-320ms total duration)
      const speed = Math.max(0.5, totalChars / 16);
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

        const prefix = hasLeadingSpace ? ' ' : '';
        if (textSpan) {
          textSpan.textContent = scrambled;
        } else if (textNode) {
          textNode.textContent = prefix + scrambled;
        }

        if (iteration >= totalChars) {
          clearInterval(interval);
          if (textSpan) {
            textSpan.textContent = original;
          } else if (textNode) {
            textNode.textContent = prefix + original;
          }
          target.dataset.scrambling = 'false';
          target.classList.remove('v2-btn-shaking');
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
