import {SECTION_API_URL} from "../urls/index";

export class UserServiceClient {

  findUserById(userId) {
    return fetch(SECTION_API_URL + '/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };

    return fetch(SECTION_API_URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(SECTION_API_URL + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(SECTION_API_URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(SECTION_API_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    return fetch(SECTION_API_URL + '/api/user', {
      method: "PUT",
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  findUserByUsername(username) {
    return fetch(SECTION_API_URL + '/api/user' + "?username=" + username, {
        credentials: 'include' // include, same-origin, *omit
      }).then(response => response.json());
  }
}
