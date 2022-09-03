import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "./Menu";
import {AuthService} from "../../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private menu!: Menu[];

  constructor(private authService: AuthService) {

  }

  ngOnInit() {

  }


  setMenu = (menu: Menu[]) => {
    this.menu = menu;
  }



}
