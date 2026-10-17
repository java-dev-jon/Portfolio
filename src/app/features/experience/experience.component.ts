import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';
import { ScrollRevealDirective } from 'src/app/shared/scroll-reveal.directive';

interface Experience {
  titleKey: string;
  company: string;
  durationKey: string;
  responsibilities?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceData: Experience[] = [
        {
      titleKey: 'EXPERIENCE.ROLES.SENIOR_JAVA_DEVELOPER',
      company: 'Myanmar Software Integrated Solutions (MSIS)',
      durationKey: 'EXPERIENCE.DURATIONS.OCT_2026_PRESENT',
      responsibilities: [
        'EXPERIENCE.RESPONSIBILITIES.SENIOR_1',
        'EXPERIENCE.RESPONSIBILITIES.SENIOR_2',
        'EXPERIENCE.RESPONSIBILITIES.SENIOR_3',
        'EXPERIENCE.RESPONSIBILITIES.SENIOR_4',
        'EXPERIENCE.RESPONSIBILITIES.SENIOR_5'
      ]
    },
    {
      titleKey: 'EXPERIENCE.ROLES.JUNIOR_JAVA_DEVELOPER',
      company: 'Myanmar Software Integrated Solutions (MSIS)',
      durationKey: 'EXPERIENCE.DURATIONS.JUN_2025_OCT_2026',
      responsibilities: [
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_1',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_2',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_3',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_4',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_5'
      ]
    },
    {
      titleKey: 'EXPERIENCE.ROLES.JAVA_INTERN',
      company: 'Myanmar Software Integrated Solutions (MSIS)',
      durationKey: 'EXPERIENCE.DURATIONS.APR_2025_JUN_2025',
      responsibilities: [
        'EXPERIENCE.RESPONSIBILITIES.INTERN_1',
        'EXPERIENCE.RESPONSIBILITIES.INTERN_2',
        'EXPERIENCE.RESPONSIBILITIES.INTERN_3',
        'EXPERIENCE.RESPONSIBILITIES.INTERN_4',
        'EXPERIENCE.RESPONSIBILITIES.INTERN_5'
      ]
    },
  ];

  constructor(public theme: ThemeService) {}
}
