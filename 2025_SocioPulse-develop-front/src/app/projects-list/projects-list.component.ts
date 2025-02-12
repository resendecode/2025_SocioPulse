import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class ProjectsListComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
