import {COURSE_API_URL} from "../urls/index";

export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch(COURSE_API_URL + '/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
