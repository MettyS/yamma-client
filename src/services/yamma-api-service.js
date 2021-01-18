import config from '../config.js';

const YammaApiService = {
  fetchEvents() {
    /* IMPLEMENT ME */
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      res.ok ? res.json() : res.json().then((e) => Promise.reject(e))
    );
  },

  fetchComments() {
    /* IMPLEMENT ME */
  },

  postComment(user, comment) {
    /* IMPLEMENT ME */
  }
}


export default YammaApiService;