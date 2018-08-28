import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

export interface INavItems {
  title: string;
  path: string;
  active: boolean;
}

@Injectable()
export class NavItemsService implements OnDestroy {
  public navItems: INavItems[] = [
    { title: 'Home', path: '/', active: false },
    { title: 'About', path: '/about', active: false },
    { title: 'Projects', path: '/projects', active: false },
    { title: 'Contact', path: '/contact', active: false },
  ];
  public navItemsUpdated = new Subject<INavItems[]>();
  public subs = new Subscription();

  constructor(private router: Router) {
    this.subs.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setActiveProp(event);
        }
      })
    );
  }

  getNavItems() {
    return [...this.navItems];
  }

  getNavItemsUpdatedListener() {
    return this.navItemsUpdated.asObservable();
  }

  setActiveProp(event: NavigationEnd) {
    this.navItems.map((item) => {
      item.path === event.urlAfterRedirects ? item.active = true : item.active = false;
    });
  }

  updateListeners() {
    this.navItemsUpdated.next([...this.navItems]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}
