import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user;
  username;
  password;
  firstName;
  lastName;
  email;
  sections = [];

  update() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;

    this.service.updateUser(this.user).then(user => this.user = user);
  }

  debug() {

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;

    fetch('http://murmuring-fjord-94630.herokuapp.com/api/user', {
      method: "PUT",
      body: JSON.stringify(this.user)
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.user = user;
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
      }
    );

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections.filter((section) => section.section !== null)
      });
  }
}
