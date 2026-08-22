import { Component, Inject, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/theme.service';

interface Project {
  nameKey: string;
  descriptionKey: string;
  githubLink?: string;
  liveDemoLink?: string;
  image: string;
  tech: string[];
  isProfessional?: boolean;
  detailsKey?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      nameKey: 'PROJECTS.ITEMS.HAYMAN.NAME',
      descriptionKey: 'PROJECTS.ITEMS.HAYMAN.DESCRIPTION',
      image: 'assets/img/hayman-capital.png',
      tech: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Amazon S3'],
      isProfessional: true,
      detailsKey: 'PROJECTS.ITEMS.HAYMAN.DETAILS'
    },
    {
      nameKey: 'PROJECTS.ITEMS.ZEGA.NAME',
      descriptionKey: 'PROJECTS.ITEMS.ZEGA.DESCRIPTION',
      image: 'assets/img/zega-finance.png',
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      isProfessional: true,
      detailsKey: 'PROJECTS.ITEMS.ZEGA.DETAILS'
    },
    {
      nameKey: 'PROJECTS.ITEMS.MICRO.NAME',
      descriptionKey: 'PROJECTS.ITEMS.MICRO.DESCRIPTION',
      image: 'assets/img/micro-platform.png',
      tech: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Excel Import'],
      isProfessional: true,
      detailsKey: 'PROJECTS.ITEMS.MICRO.DETAILS'
    }
  ];

  constructor(
    public theme: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  openProjectDetails(project: Project): void {
    if (project.detailsKey) {
      this.selectedProject = project;
      this.setScrollLock(true);
    }
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
    this.setScrollLock(false);
  }

  ngOnDestroy(): void {
    this.setScrollLock(false);
  }

  private setScrollLock(isLocked: boolean): void {
    this.document.body.classList.toggle('is-scroll-locked', isLocked);
    this.document.documentElement.classList.toggle('is-scroll-locked', isLocked);
    this.document.body.style.touchAction = isLocked ? 'none' : 'pan-y pinch-zoom';
  }

  handleImageError(event: any) {
    event.target.src = 'assets/projects/placeholder.jpg';
  }
}
