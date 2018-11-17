import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_PROJECTS } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = PORTFOLIO_PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
