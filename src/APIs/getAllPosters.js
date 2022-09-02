const axios = require('axios');

export const getPostersApi = async () => {
  const API_URL = 'http://localhost:3000/api/posters';
  return axios.get(API_URL).then(res => {
    return res.data;
  })
}
