import { Component, OnInit } from '@angular/core';
import { INavItems, NavItemsService } from '../../shared/nav-items.service';

@Component({
  selector: 'app-hero-head',
  templateUrl: './hero-head.component.html',
  styleUrls: ['./hero-head.component.scss']
})
export class HeroHeadComponent implements OnInit {
  menuExpanded = false;
  navbarItems: INavItems[];

  constructor(public navItems: NavItemsService) { }

  ngOnInit() {
    this.setupNavbarItems();
  }

  setupNavbarItems() {
    this.navbarItems = this.navItems.getNavItems();
  }

  onClickMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

}
