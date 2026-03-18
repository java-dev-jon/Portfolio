import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/core/   theme.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public theme: ThemeService) {}

  social = {
    github: 'https://github.com/CallMe-JON',
    linkedin: 'https://linkedin.com/in/yourusername',
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
