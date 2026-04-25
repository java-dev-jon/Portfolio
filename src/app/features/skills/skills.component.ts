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
    'JavaScript', 'AngularJS', 'Angular', 'Git', 'Bootstrap'
  ];

  languages: { name: string; nameKey: string; level: string }[] = [
    { name: 'Myanmar', nameKey: 'SKILLS.LANGUAGE_MYANMAR', level: 'Native' },
    { name: 'English', nameKey: 'SKILLS.LANGUAGE_ENGLISH', level: 'Professional' },
    { name: 'Japanese', nameKey: 'SKILLS.LANGUAGE_JAPANESE', level: 'Intermediate' }
  ];

  softSkills: { nameKey: string; emoji: string }[] = [
    { nameKey: 'SKILLS.SOFT_PROBLEM_SOLVING', emoji: '🧩' },
    { nameKey: 'SKILLS.SOFT_TEAM_COLLABORATION', emoji: '🤝' },
    { nameKey: 'SKILLS.SOFT_COMMUNICATION', emoji: '💬' },
    { nameKey: 'SKILLS.SOFT_TIME_MANAGEMENT', emoji: '⏱️' },
    { nameKey: 'SKILLS.SOFT_ADAPTABILITY', emoji: '🔄' },
    { nameKey: 'SKILLS.SOFT_CRITICAL_THINKING', emoji: '🎯' },
    { nameKey: 'SKILLS.SOFT_CREATIVITY', emoji: '🎨' },
    { nameKey: 'SKILLS.SOFT_LEADERSHIP', emoji: '👑' }
  ];

  constructor(public theme: ThemeService) {}

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  getSkillEmoji(skill: string): string {
    const emojiMap: { [key: string]: string } = {
      'Java': '☕',
      'Spring Boot': '🍃',
      'MySQL': '🗄️',
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '📜',
      'AngularJS': '🅰️',
      'Angular': '⚡',
      'Git': '📂',
      'Bootstrap': '📱'
    };
    return emojiMap[skill] || '💻';
  }

  getLanguageEmoji(language: { name: string; nameKey: string; level: string }): string {
    const emojiMap: { [key: string]: string } = {
      English: '🇬🇧',
      Japanese: '🇯🇵',
      Myanmar: '🇲🇲'
    };
    return emojiMap[language.name] || '🌐';
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
