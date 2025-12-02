import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private platformId = inject(PLATFORM_ID);

  isDark = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Load theme from localStorage or system preference
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

      this.isDark.set(initialDark);
      this.applyTheme(initialDark);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.isDark.set(e.matches);
        }
      });

      // Apply theme changes with transition
      effect(() => {
        const isDark = this.isDark();
        this.applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }
  }

  toggle() {
    this.isDark.update(v => !v);
  }

  setTheme(mode: ThemeMode) {
    this.isDark.set(mode === 'dark');
  }

  private applyTheme(isDark: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;

    const root = document.documentElement;

    // Add transition class
    root.classList.add('theme-transition');

    // Apply theme
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
    } else {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('dark');
    }

    // Remove transition class after animation
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 300);
  }
}
