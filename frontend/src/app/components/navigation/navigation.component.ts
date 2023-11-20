import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  hideNavbar: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if the current route is "login"
      this.hideNavbar = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login';
    });
  }
}
