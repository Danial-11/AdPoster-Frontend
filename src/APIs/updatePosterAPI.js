const axios = require('axios')

export const updatePosterAPI = async (data) => {
  const {
    id,
    title,
    brandName,
    featured,
    location,
    transmission_type,
    engine_capacity,
    milage,
    model_year,
    mobile_number,
    leased,
    fuel_type
  } = data;
  const API_URL = `http://localhost:3000/api/posters/${id}`
  axios.put(API_URL, { title, brandName, featured, location, transmission_type, engine_capacity, milage, model_year, mobile_number, leased, fuel_type }).then(res => {
    return res.data;
  }
  ).catch(err => {
    return err;
  }
  );
}
