import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileOpen = false;
  langOpen = false;
  scrolled = false;

  sections = [
    { id: 'hero', label: 'NAV.HOME' },
    { id: 'about', label: 'NAV.ABOUT' },
    { id: 'skills', label: 'NAV.SKILLS' },
    { id: 'projects', label: 'NAV.PROJECTS' },
    { id: 'experience', label: 'NAV.EXPERIENCES' }
  ];

  constructor(
    public theme: ThemeService,
    public translate: TranslateService
  ) {
    translate.setFallbackLang('en');
    this.translate.use('en');
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    document.body.style.overflow = this.mobileOpen ? 'hidden' : 'auto';
  }

  toggleLang() {
    const newLang = this.translate.currentLang === 'en' ? 'ja' : 'en';
    this.translate.use(newLang);

    if (this.mobileOpen) {
      this.mobileOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.langOpen = false;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    this.mobileOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.mobileOpen) {
      this.mobileOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}
