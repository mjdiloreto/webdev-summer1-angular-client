import {COURSE_API_URL} from "../urls/index";

export class CourseServiceClient {
  COURSE_URL = COURSE_API_URL + '/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
