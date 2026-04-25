import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitting = false;

  social = {
    github: 'https://github.com/CallMe-JON',
    linkedin: 'https://linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
    email: 'khantsithuhlaing1@gmail.com',
    phone: '+1 (555) 123-4567'
  };

  contactMethods = [
    {
      icon: 'fab fa-github',
      iconClass: 'github',
      title: 'CONTACT.GITHUB',
      value: 'CallMe-JON',
      link: 'https://github.com/CallMe-JON',
      target: '_blank'
    },
    {
      icon: 'fab fa-linkedin',
      iconClass: 'linkedin',
      title: 'CONTACT.LINKEDIN',
      value: 'linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
      link: 'https://linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
      target: '_blank'
    },
    {
      icon: 'fas fa-envelope',
      iconClass: 'email',
      title: 'CONTACT.EMAIL',
      value: 'khantsithuhlaing1@gmail.com',
      link: 'mailto:khantsithuhlaing1@gmail.com',
      target: ''
    },
    {
      icon: 'fas fa-phone',
      iconClass: 'phone',
      title: 'CONTACT.PHONE',
      value: '+95 9455477047',
      link: 'tel:+95 9455477047',
      target: ''
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(
    public theme: ThemeService,
    private translate: TranslateService
  ) {}

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      alert(this.translate.instant('CONTACT.MESSAGE_SENT'));
    }, 1500);
  }
}
