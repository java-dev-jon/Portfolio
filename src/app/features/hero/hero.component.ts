import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/app/core/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  typedText = '';
  isContactDialogOpen = false;
  isSubmitting = false;
  private readonly recipientEmail = 'khantsithuhlaing1@gmail.com';

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  private typingInterval: any;
  private texts: string[] = [];
  private langChangeSub?: Subscription;

  social = {
    github: 'https://github.com/java-dev-jon',
    linkedin: 'https://linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
    email: this.recipientEmail,
    phone: '+95 455477047'
  };

  constructor(
    public theme: ThemeService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.updateTexts();
    this.startTyping();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.updateTexts();
      this.restartTyping();
    });
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.setPageScrollLock(false);
    this.langChangeSub?.unsubscribe();
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

  private updateTexts() {
    const labels = this.translate.instant([
      'HERO.ROLE_FULL_STACK',
      'HERO.ROLE_PROBLEM_SOLVER'
    ]) as Record<string, string>;

    this.texts = [
      labels['HERO.ROLE_FULL_STACK'],
      labels['HERO.ROLE_PROBLEM_SOLVER']
    ];
  }

  private restartTyping() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.typedText = '';
    this.startTyping();
  }

  private startTyping() {
    if (!this.texts.length) {
      return;
    }

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    this.typingInterval = setInterval(() => {
      const currentText = this.texts[textIndex];

      if (isDeleting) {
        this.typedText = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        this.typedText = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % this.texts.length;
      }
    }, 100);
  }

  private setPageScrollLock(isLocked: boolean) {
    document.body.classList.toggle('is-scroll-locked', isLocked);
    document.documentElement.classList.toggle('is-scroll-locked', isLocked);
    document.body.style.touchAction = isLocked ? 'none' : 'pan-y pinch-zoom';
    document.documentElement.style.touchAction = isLocked ? 'none' : 'pan-y pinch-zoom';
    document.body.scrollLeft = 0;
    document.documentElement.scrollLeft = 0;
    requestAnimationFrame(() => {
      document.body.scrollLeft = 0;
      document.documentElement.scrollLeft = 0;
      window.scrollTo({ left: 0, behavior: 'auto' });
    });
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
