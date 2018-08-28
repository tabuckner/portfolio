import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showHeader = false;
  menuExpanded = false;
  navbarItems = [
    { title: 'Home', path: '/', active: false },
    { title: 'About', path: '/about', active: false },
    { title: 'Projects', path: '/projects', active: false },
    { title: 'Contact', path: '/contact', active: false },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.setShowHeader(event);
        this.setActiveClass(event);
      }
    })
  }

  setShowHeader(event: NavigationEnd) {
    const onHomeRoute = event.urlAfterRedirects === '/';
    onHomeRoute ? this.showHeader = false : this.showHeader = true;
  }

  setActiveClass(event: NavigationEnd) {
    this.navbarItems.map((item) => {
      item.path === event.urlAfterRedirects ? item.active = true : item.active = false;
    });
  }

  onClickMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

}
