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

    fetch('http://murmuring-fjord-94630.herokuapp.com/api/login', {
      method: "POST",
      body: JSON.stringify({username: username, password: password}),
      credentials: "include"
    })
      .then(resp => resp.json())
      .then((loggedIn) => {
        if(loggedIn) {
          this.router.navigate(['profile']);
        } else {
          alert("Username or password are incorrect.")
        }
      })
      .catch(response => alert(response));
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
