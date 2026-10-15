'use client';
import { useEffect } from 'react';

export default function ThemeManager() {
  useEffect(() => {
    const getTargetTheme = (): 'light' | 'dark' => {
      try {
        const p = new URLSearchParams(window.location.search);
        const q = p.get('theme');
        if (q === 'dark' || q === 'light') return q;
        const saved = localStorage.getItem('v2-theme');
        if (saved === 'dark' || saved === 'light') return saved;
      } catch (e) {}
      return 'light';
    };

    const applyTheme = (forcedTheme?: 'light' | 'dark') => {
      const theme = forcedTheme || getTargetTheme();
      document.documentElement.setAttribute('data-v2-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    };

    applyTheme();

    const handleThemeChange = () => {
      applyTheme();
    };
    window.addEventListener('themechange', handleThemeChange);

    let lock = false;
    const observer = new MutationObserver(() => {
      if (lock) return;
      const current = document.documentElement.getAttribute('data-v2-theme');
      const target = getTargetTheme();
      if (current !== target) {
        lock = true;
        applyTheme(target);
        lock = false;
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-v2-theme', 'class'],
    });

    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return null;
}
