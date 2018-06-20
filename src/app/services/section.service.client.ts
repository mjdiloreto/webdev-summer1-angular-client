import {SECTION_API_URL} from "../urls/index";

export class SectionServiceClient {

  SECTION_URL = SECTION_API_URL + '/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = SECTION_API_URL + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = SECTION_API_URL + '/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteSection(section) {
    const url = SECTION_API_URL + '/api/section/SECTIONID';
    return fetch(url.replace("SECTIONID", section._id), {
      method: "DELETE",
      credentials: 'include'
    })
  }
}
