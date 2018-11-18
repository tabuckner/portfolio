import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { INavItems, NavItemsService } from '../../shared/nav-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  menuExpanded = false;
  navbarItems: INavItems[];

  constructor(private navItems: NavItemsService) { }

  ngOnInit() {
    this.setupNavbarItems();
  }

  setupNavbarItems() {
    this.navbarItems = this.navItems.getNavItems();
    this.subs.add(
      this.navItems.getNavItemsUpdatedListener().subscribe((newNavItems: INavItems[]) => {
        this.navbarItems = newNavItems;
      })
    );
  }

  onClickMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
