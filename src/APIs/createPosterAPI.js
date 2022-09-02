const axios = require('axios');

export const createPosterAPI = async (data) => {
  // const {
  //   title,
  //   images=[],
  //   price,
  //   featured,
  //   location,
  //   leased,
  //   model_year,
  //   milage,
  //   fuel_type,
  //   engine_capacity,
  //   brandName,
  //   transmission_type,
  //   mobile_number,
  // } = data;
  const API_URL = 'http://localhost:3000/api/posters';
  return axios.post(API_URL, data).then(res => {
    return res.data;
  }
  ).catch(err => {
    return err;
  }
  );
}
