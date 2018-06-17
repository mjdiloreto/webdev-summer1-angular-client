import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses: Course[] = [];

  loadPage() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  ngOnInit() {
    this.loadPage();
  }

}
