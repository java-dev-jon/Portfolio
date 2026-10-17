import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from 'src/app/shared/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  social = {
    github: 'https://github.com/CallMe-JON',
    linkedin: 'https://linkedin.com/in/khant-si-thu-hlaing-5a97893a1',
    email: 'khantsithuhlaing1@gmail.com',
    phone: '+95 9455477047'
  };

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/KhantSiThuHlaingCVForm.pdf';
    link.download = 'Khant-Si-Thu-Hlaing-CV.pdf';
    link.click();
  }
}
