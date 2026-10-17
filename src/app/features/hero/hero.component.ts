import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from 'src/app/shared/scroll-reveal.directive';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  isContactDialogOpen = false;
  isSubmitting = false;

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngOnDestroy() {
    this.setPageScrollLock(false);
  }

  openContactDialog() {
    this.isContactDialogOpen = true;
    this.setPageScrollLock(true);
  }

  closeContactDialog() {
    this.isContactDialogOpen = false;
    this.setPageScrollLock(false);
  }

  submitContactForm() {
    this.isSubmitting = true;
    const templateParams = {
      name: this.contactForm.name,
      email: this.contactForm.email,
      phone: this.contactForm.phone || '-',
      message: this.contactForm.message
    };

    emailjs.send(
      'service_o9ksyte',     //  Gmail service ID
      'template_okfs9ef',    // The template  created
      templateParams,
      '3kavd0_edwwu1bX6D'         // EmailJS public key
    ).then(() => {
      this.contactForm = { name: '', email: '', phone: '', message: '' };
      this.closeContactDialog();
    }).catch(error => {
      console.error('EmailJS error:', error);
    });
  }

  private setPageScrollLock(isLocked: boolean) {
    document.body.classList.toggle('is-scroll-locked', isLocked);
    document.documentElement.classList.toggle('is-scroll-locked', isLocked);
  }

  scrollTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    const offset = (navbar?.offsetHeight ?? 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(top, 0),
      left: 0,
      behavior: 'smooth'
    });
  }
}
