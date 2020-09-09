import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-route',
  templateUrl: './top-route.component.html',
  styleUrls: ['./top-route.component.css']
})
export class TopRouteComponent implements OnInit {
  constructor(private router: Router) { }
  public href: string = "";
  ngOnInit() {
    this.href = this.router.url;
  }

}
