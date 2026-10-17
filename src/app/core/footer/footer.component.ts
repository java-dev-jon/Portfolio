import { Component } from '@angular/core';
import { ScrollRevealDirective } from 'src/app/shared/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
