import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

interface Project {
  name: string;
  description: string;
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
      name: "Movie Website",
      description: "A comprehensive movie management system featuring user authentication, role-based access control, and dynamic content presentation. Developed with Spring Boot for robust backend services and AngularJS for an interactive frontend.",
      githubLink: "https://github.com/CallMe-JON/movie-website",
      liveDemoLink: "",
      image: "assets/img/movie-website.jpg"
    },
    {
      name: "E-Commerce Platform",
      description: "An intuitive e-commerce solution with product listings, shopping cart functionality, and secure checkout processes. Built using Spring Boot for scalable backend operations and AngularJS for a seamless user experience.",
      githubLink: "https://github.com/CallMe-JON/E-commerce-Platform",
      liveDemoLink: "",
      image: "assets/img/ecommerce-platform.jpg"
    }
  ];

  constructor(public theme: ThemeService) {}

  getProjectTech(projectName: string): string[] {
    // Assign technologies based on project name
    if (projectName.includes('Movie')) {
      return ['Java', 'Spring Boot', 'AngularJS', 'MySQL'];
    } else if (projectName.includes('E-Commerce')) {
      return ['Java', 'Spring Boot', 'AngularJS', 'MySQL', 'REST API'];
    }
    return ['Java', 'Spring Boot', 'AngularJS'];
  }

  handleImageError(event: any) {
    event.target.src = 'assets/projects/placeholder.jpg';
  }
}