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

  fetchEvent(eventId) {
    /* IMPLEMENT ME */
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then( res => 
      res.ok ? res.json() : res.json().then( e => Promise.reject(e))
      );
  },

  fetchEventsCategory(category) {
    return fetch(`${config.API_ENDPOINT}/events?category=${category}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      res.ok ? res.json() : res.json().then((e) => Promise.reject(e))
    );
  },

  fetchComments(eventId) {
    return fetch(`${config.API_ENDPOINT}/comments/events/${eventId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      res.ok ? res.json() : res.json().then((e) => Promise.reject(e))
    );
  },

  postComment(user, comment) {
    /* IMPLEMENT ME */
  }
}


export default YammaApiService;