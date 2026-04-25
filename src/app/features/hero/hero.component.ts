import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/app/core/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
    email: 'khantsithuhlaing1@gmail.com',
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
    const subject = this.translate.instant('HERO.CONTACT_SUBJECT', {
      name: this.contactForm.name || this.translate.instant('HERO.CONTACT_DEFAULT_NAME')
    });

    const body = [
      `${this.translate.instant('HERO.CONTACT_NAME_LABEL')}: ${this.contactForm.name}`,
      `${this.translate.instant('HERO.CONTACT_EMAIL_LABEL')}: ${this.contactForm.email}`,
      `${this.translate.instant('HERO.CONTACT_PHONE_LABEL')}: ${this.contactForm.phone || '-'}`,
      '',
      `${this.translate.instant('HERO.CONTACT_MESSAGE_LABEL')}:`,
      this.contactForm.message
    ].join('\n');

    window.location.href =
      `mailto:${this.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    this.closeContactDialog();
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
    const overflowValue = isLocked ? 'hidden' : 'auto';
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;
    document.body.style.touchAction = isLocked ? 'none' : 'auto';
    document.documentElement.style.touchAction = isLocked ? 'none' : 'auto';
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
