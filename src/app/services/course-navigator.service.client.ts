import {COURSE_API_URL} from "../urls";

export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch(COURSE_API_URL + '/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(COURSE_API_URL + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
