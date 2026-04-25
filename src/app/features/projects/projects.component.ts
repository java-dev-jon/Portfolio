import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

interface Project {
  nameKey: string;
  descriptionKey: string;
  githubLink: string;
  liveDemoLink: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      nameKey: 'PROJECTS.ITEMS.MOVIE_WEBSITE.NAME',
      descriptionKey: 'PROJECTS.ITEMS.MOVIE_WEBSITE.DESCRIPTION',
      githubLink: 'https://github.com/CallMe-JON/movie-website',
      liveDemoLink: '',
      image: 'assets/img/movie-website.jpg'
    },
    {
      nameKey: 'PROJECTS.ITEMS.ECOMMERCE.NAME',
      descriptionKey: 'PROJECTS.ITEMS.ECOMMERCE.DESCRIPTION',
      githubLink: 'https://github.com/CallMe-JON/E-commerce-Platform',
      liveDemoLink: '',
      image: 'assets/img/ecommerce-platform.jpg'
    }
  ];

  constructor(public theme: ThemeService) {}

  getProjectTech(projectNameKey: string): string[] {
    if (projectNameKey.includes('MOVIE')) {
      return ['Java', 'Spring Boot', 'AngularJS', 'MySQL'];
    } else if (projectNameKey.includes('ECOMMERCE')) {
      return ['Java', 'Spring Boot', 'AngularJS', 'MySQL', 'REST API'];
    }
    return ['Java', 'Spring Boot', 'AngularJS'];
  }

  handleImageError(event: any) {
    event.target.src = 'assets/projects/placeholder.jpg';
  }
}
