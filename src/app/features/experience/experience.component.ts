import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

interface Achievement {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

interface Experience {
  titleKey: string;
  company: string;
  durationKey: string;
  responsibilities?: string[];
  achievements?: Achievement[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceData: Experience[] = [
    {
      titleKey: 'EXPERIENCE.ROLES.JUNIOR_JAVA_DEVELOPER',
      company: 'Myanmar Software Integrated Solutions (MSIS)',
      durationKey: 'EXPERIENCE.DURATIONS.AUG_2025_PRESENT',
      responsibilities: [
        'EXPERIENCE.RESPONSIBILITIES.OPEN_SOURCE_1',
        'EXPERIENCE.RESPONSIBILITIES.OPEN_SOURCE_2',
        'EXPERIENCE.RESPONSIBILITIES.OPEN_SOURCE_3',
        'EXPERIENCE.RESPONSIBILITIES.OPEN_SOURCE_4',
        'EXPERIENCE.RESPONSIBILITIES.OPEN_SOURCE_5'
      ],
      achievements: [
        {
          icon: '🔄',
          titleKey: 'EXPERIENCE.ACHIEVEMENTS.ODOO.TITLE',
          descriptionKey: 'EXPERIENCE.ACHIEVEMENTS.ODOO.DESCRIPTION'
        },
        {
          icon: '📧',
          titleKey: 'EXPERIENCE.ACHIEVEMENTS.MAIL.TITLE',
          descriptionKey: 'EXPERIENCE.ACHIEVEMENTS.MAIL.DESCRIPTION'
        },
        {
          icon: '💰',
          titleKey: 'EXPERIENCE.ACHIEVEMENTS.SAVINGS.TITLE',
          descriptionKey: 'EXPERIENCE.ACHIEVEMENTS.SAVINGS.DESCRIPTION'
        }
      ]
    },
    {
      titleKey: 'EXPERIENCE.ROLES.JUNIOR_JAVA_DEVELOPER',
      company: 'Myanmar Software Integrated Solutions (MSIS)',
      durationKey: 'EXPERIENCE.DURATIONS.JUN_2025_AUG_2025',
      responsibilities: [
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_1',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_2',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_3',
        'EXPERIENCE.RESPONSIBILITIES.JUNIOR_4'
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

  getTechStack(exp: Experience): string[] {
    if (exp.company.includes('MSIS')) {
      return ['Java', 'Spring Boot', 'MySQL', 'REST APIs'];
    }
    return ['Java', 'Spring Boot'];
  }
}
