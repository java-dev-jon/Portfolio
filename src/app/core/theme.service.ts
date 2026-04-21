import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal(true);

  constructor() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      this.enableDark();
    }
  }

  toggle() {
    this.darkMode() ? this.disableDark() : this.enableDark();
  }

  private enableDark() {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
    this.darkMode.set(true);
  }

  private disableDark() {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
    this.darkMode.set(false);
  }
}