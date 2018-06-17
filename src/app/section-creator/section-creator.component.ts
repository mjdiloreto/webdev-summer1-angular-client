import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-section-creator',
  templateUrl: './section-creator.component.html',
  styleUrls: ['./section-creator.component.css']
})
export class SectionCreatorComponent implements OnInit {

  @Input() course;

  courseId: number;

  sections = [];

  sectionName = '';

  seats = '';

  constructor(private service: SectionServiceClient) {
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  deleteSection(section) {
    console.log("deleting section");
    console.log(section);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => this.loadSections(this.courseId));
  }

  ngOnInit() {
    this.courseId = this.course.id;
    this.loadSections(this.courseId);
  }

}
