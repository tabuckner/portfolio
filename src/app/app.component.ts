import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  showHeaderFooter = false;
  subs: Subscription = new Subscription();

  constructor(private router: Router) { }

  ngOnInit() {
    this.subs.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setShowHeaderFooter(event);
        }
      })
    );
  }

  setShowHeaderFooter(event: NavigationEnd) {
    const onHomeRoute = event.urlAfterRedirects === '/';
    onHomeRoute ? this.showHeaderFooter = false : this.showHeaderFooter = true;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
