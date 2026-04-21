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
  activeTab: string = 'technical';

  technicalSkills: string[] = [
    "Java", "Spring Boot", "MySQL", "HTML", "CSS", 
    "JavaScript", "AngularJS", "Angular", "Git", "Bootstrap"
  ];

  languages: { name: string, level: string }[] = [
    { name: "Myanmar", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Japanese", level: "Intermediate" }    
  ];

  softSkills: { name: string, emoji: string }[] = [
    { name: "Problem Solving", emoji: "🧩" },
    { name: "Team Collaboration", emoji: "🤝" },
    { name: "Communication", emoji: "💬" },
    { name: "Time Management", emoji: "⏱️" },
    { name: "Adaptability", emoji: "🔄" },
    { name: "Critical Thinking", emoji: "🎯" },
    { name: "Creativity", emoji: "🎨" },
    { name: "Leadership", emoji: "👑" }
  ];

  constructor(public theme: ThemeService) {}

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  getSkillEmoji(skill: string): string {
    const emojiMap: { [key: string]: string } = {
      'Java': '☕', 'Spring Boot': '🍃', 'MySQL': '🗄️', 'HTML': '🌐',
      'CSS': '🎨', 'JavaScript': '📜', 'AngularJS': '🅰️', 'Angular': '⚡',
      'Git': '📂', 'Bootstrap': '📱'
    };
    return emojiMap[skill] || '💻';
  }

  getLanguageEmoji(language: { name: string, level: string }): string {
    const emojiMap: { [key: string]: string } = {
      'English': '🇬🇧', 'Japanese': '🇯🇵', 'Myanmar': '🇲🇲'
    };
    return emojiMap[language.name] || '🌐';
  }

  getLanguageLevel(language: { name: string, level: string }): string {
    const levelMap: { [key: string]: string } = {
      'Native': '100%',
      'Professional': '85%',
      'Intermediate': '60%'
    };
    return levelMap[language.level] || '70%';
  }
}