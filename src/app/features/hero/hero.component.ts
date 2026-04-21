import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/core/theme.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    typedText = '';
  private typingInterval: any;
  private currentIndex = 0;

  private texts = [
    'Full Stack Developer',
    'Problem Solver'
  ];

  social = {
    github: 'https://github.com/java-dev-jon',
    linkedin: 'https://linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
    email: 'https://mail.google.com/khantsithuhlaing1@gmail.com',
    phone: '+95 455477047'
  };

  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTyping() {
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
        setTimeout(() => {}, 2000); // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % this.texts.length;
      }
    }, 100);
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}
