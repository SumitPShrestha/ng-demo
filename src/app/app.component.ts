import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {AuthService} from "./auth/auth.service";
import {NavbarService} from "./components/navbar/navbar.service";
import {Menu} from "./components/navbar/Menu";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo';
  isLoggedIn!: boolean;
  menu!: Menu[];
  currentRoute!: string;
  authMenu!: Menu;

  constructor(router: Router, location: Location, private authService: AuthService, private navService: NavbarService, private httpClient: HttpClient) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
        console.log(val.url);
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.getMenu();
    this.navService.setMenu(this.menu);
  }

  getMenu() {
    if (!this.menu) {
      this.httpClient.get("assets/menu.json").subscribe(data => {
        this.menu = this.convertToMenuObj(data);

      });
    }
  }

  private convertToMenuObj(menuRes: any): Menu[] {
    return menuRes.map((m: any) => {
      let parentMenu: Menu = new Menu;
      if (m.children) {
        parentMenu!.children = m.children.map((cm: any) => {
          let menu: Menu = new Menu;
          menu!.id = cm.id;
          menu!.url = cm.url;
          menu!.displayName = cm.displayName;
          menu!.renderer = eval(cm.renderer);
          menu!.icon = cm.icon;
          return cm;
        })
      }
      parentMenu!.id = m.id;
      parentMenu!.url = m.url
      parentMenu!.icon = m.icon
      parentMenu!.displayName = m.displayName
      parentMenu!.renderer = eval(m.renderer)
      return parentMenu!;
    });
  }
}
