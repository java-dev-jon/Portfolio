import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeTab = 'technical';

  technicalSkills: string[] = [
    'Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS',
    'JavaScript', 'TypeScript', 'AngularJS', 'Angular', 'Git', 'Bootstrap'
  ];

  languages: { name: string; nameKey: string; level: string }[] = [
    { name: 'Myanmar', nameKey: 'SKILLS.LANGUAGE_MYANMAR', level: 'Native' },
    { name: 'English', nameKey: 'SKILLS.LANGUAGE_ENGLISH', level: 'Professional' },
    { name: 'Japanese', nameKey: 'SKILLS.LANGUAGE_JAPANESE', level: 'Intermediate' }
  ];

  softSkills: { nameKey: string; icon: string }[] = [
    { nameKey: 'SKILLS.SOFT_PROBLEM_SOLVING', icon: 'fas fa-puzzle-piece' },
    { nameKey: 'SKILLS.SOFT_TEAM_COLLABORATION', icon: 'fas fa-handshake' },
    { nameKey: 'SKILLS.SOFT_COMMUNICATION', icon: 'fas fa-comments' },
    { nameKey: 'SKILLS.SOFT_TIME_MANAGEMENT', icon: 'fas fa-clock' },
    { nameKey: 'SKILLS.SOFT_ADAPTABILITY', icon: 'fas fa-sync-alt' },
    { nameKey: 'SKILLS.SOFT_CRITICAL_THINKING', icon: 'fas fa-bullseye' },
    { nameKey: 'SKILLS.SOFT_CREATIVITY', icon: 'fas fa-paint-brush' },
    { nameKey: 'SKILLS.SOFT_LEADERSHIP', icon: 'fas fa-crown' }
  ];

  constructor(public theme: ThemeService) {}

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  getSkillIcon(skill: string): string {
    const iconMap: { [key: string]: string } = {
      'Java': 'fab fa-java',
      'Spring Boot': 'fas fa-leaf',
      'MySQL': 'fas fa-database',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'JavaScript': 'fab fa-js',
      'TypeScript': 'fab fa-js',
      'AngularJS': 'fab fa-angular',
      'Angular': 'fab fa-angular',
      'Git': 'fab fa-git-alt',
      'Bootstrap': 'fab fa-bootstrap'
    };
    return iconMap[skill] || 'fas fa-code';
  }

  getLanguageIcon(language: { name: string }): string {
    const iconMap: { [key: string]: string } = {
      English: 'fas fa-globe-europe',
      Japanese: 'fas fa-torii-gate',
      Myanmar: 'fas fa-globe-asia'
    };
    return iconMap[language.name] || 'fas fa-globe';
  }

  getLanguageLevel(language: { name: string; nameKey: string; level: string }): string {
    const levelMap: { [key: string]: string } = {
      Native: '100%',
      Professional: '85%',
      Intermediate: '60%'
    };
    return levelMap[language.level] || '70%';
  }
}
