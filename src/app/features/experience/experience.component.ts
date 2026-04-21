import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities?: string[];
  achievements?: Achievement[]; // Added this
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
      title: "JAVA Development Intern",
      company: "Myanmar Software Integrated Solutions (MSIS)",
      duration: "April 2025 - June 2025",
      responsibilities: [
        "Built responsive front-end interfaces using HTML, CSS, and JavaScript.",
        "Assisted in integrating AngularJS components with backend services.",
        "Learned Git for version control and collaborative development.",
        "Developed and maintained RESTful APIs using Spring Boot and Java.",
        "Contributed to client projects under supervision."
      ]
    },
    {
      title: "Junior Java Developer",
      company: "Myanmar Software Integrated Solutions (MSIS)",
      duration: "June 2025 - Aug 2025",
      responsibilities: [
        "Developed and maintained RESTful APIs using Spring Boot and Java.",
        "Collaborated with senior developers on system design and implementation.",
        "Assisted in database schema design and optimization with MySQL.",
        "Participated in code reviews and adopted best practices for software development."
      ]
    },
    {
      title: "Junior Java Developer",
      company: "Myanmar Software Integrated Solutions (MSIS)",
      duration: "Aug 2025 - now",
      responsibilities: [
        "Contributed to the development of open-source financial technology solutions using Java.",
        "Designed and optimized Mifos database schemas  for new features and performance improvements.",
        "Developed and maintained Mifos reports to provide key insights into financial operations.",
        "Collaborated with a global team on feature development and bug fixes.",
        "Gained experience in open-source development workflows and community contributions."
      ]
    },
    {
      title: "Junior Java Developer",
      company: "Myanmar Software Integrated Solutions (MSIS)",
      duration: "Aug 2025 - now",
      responsibilities: [
        "Contributed to open-source financial technology solutions using Java.",
        "Optimized Mifos database schemas for performance."
      ],
      achievements: [ // Now clearly defined in the data
        { icon: '🔄', title: 'Odoo Integration', description: 'Implemented seamless integration between Mifos and Odoo.' },
        { icon: '📧', title: 'Mail Integration', description: 'Developed email reporting jobs and verification systems.' },
        { icon: '💰', title: 'Savings Module', description: 'Implemented Month-end Accrue and Interest Posting.' }
      ]
    }    
  ];

  constructor(public theme: ThemeService) {}

  getTechStack(exp: Experience): string[] {
    // Pass the whole object to make logic easier
    if (exp.company.includes('MSIS')) return ['Java', 'Spring Boot', 'MySQL', 'REST APIs'];
    return ['Java', 'Spring Boot'];
  }
}