import {COURSE_API_URL} from "../urls/index";

export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch(COURSE_API_URL + '/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
