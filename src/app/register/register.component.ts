import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if(password !== this.password2) {
      alert("Passwords must match to register.");
      return;
    }

    this.usernameTaken(username)
      .then(taken => {
        if(taken.length !== 0) {
          alert("That username is taken.")
          return;
        } else {
          this.service
            .createUser(username, password)
            .then(() =>
              this.router.navigate(['profile']))
            .catch(response => alert(response));
        }
      });
  }

  usernameTaken(username) {
    return this.service.findUserByUsername(username)
      .then(users => {
        return users;
      })
  }

  ngOnInit() {
  }

  debug() {
    fetch('http://murmuring-fjord-94630.herokuapp.com/api/login', {
      method: "POST",
      body: JSON.stringify({username: "admin", password: "admin"})
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }
}
