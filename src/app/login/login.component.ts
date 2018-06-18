import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    this.service
      .login(username, password)
      .then((loggedIn) => {
        if(loggedIn) {
          this.router.navigate(['profile']);
        } else {
          alert("Username or password are incorrect.")
        }
      });
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
