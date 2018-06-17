import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  loggedIn;
  admin;

  constructor(private service: UserServiceClient,
              private router: Router) { }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        user ? this.loggedIn = true : this.loggedIn = false;
        user.username === "admin" ? this.admin = true : this.admin = false;
        }
      )
  }
}

