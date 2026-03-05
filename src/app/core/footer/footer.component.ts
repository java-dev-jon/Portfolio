import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../   theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  showBackToTop = false;

  social = {
    github: 'https://github.com/CallMe-JON',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'khantsithuhlaing1@gmail.com',
    phone: '+95 9455477047'
  };

  constructor(public theme: ThemeService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Add your newsletter subscription logic here
      alert('Thank you for subscribing!');
      this.newsletterEmail = '';
    }
  }
}