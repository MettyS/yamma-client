import config from '../config.js';
import TokenService from './token-service';

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

  postComment(comment, eventId) {
    return fetch(`${config.API_ENDPOINT}/comments/events/${eventId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ comment }),
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  }
}


export default YammaApiService;