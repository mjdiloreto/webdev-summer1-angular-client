import {COURSE_API_URL} from "../urls/index";

export class ModuleServiceClient {
  MODULE_URL = COURSE_API_URL + '/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
