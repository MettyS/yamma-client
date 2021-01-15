<<<<<<< HEAD
export default {
  API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8000',
  API_KEY: process.env.REACT_APP_API_KEY || 'you need a key!',
=======
const config = {
  API_ENDPOINT: 'http://localhost:8000',
  API_KEY: process.env.REACT_APP_API_KEY,
>>>>>>> fc5851d12448b6aab82a006b6ea1fb35358a4228
};

export default config;