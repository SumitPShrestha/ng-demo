import {AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Router, NavigationEnd} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {NavbarService} from "./navbar.service";
import {Menu} from "./Menu";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() title!: String;
  @Input() isLoggedIn!: boolean;
  @Input() menu!: any[];
  currentRoute: any;
  @Input() authMenu!: Menu;
  showMenu: boolean = false;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(router: Router, location: Location, private authService: AuthService, private navService: NavbarService) {

    router.events.subscribe(val => {
      this.isLoggedIn = this.authService.isLoggedIn;
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
        console.log(val.url);
      }
    });
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  toggleMenu(showMenu: boolean) {
    this.showMenu = !showMenu;
  }
}
