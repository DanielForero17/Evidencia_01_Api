const axios = require("axios");

let config = {
  "method": "GET",
  "url": "https://parallelum.com.br/fipe/api/v1/carros/marcas",
};

const request = async () => {
  try {
    let response = await axios(config);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

request();

axios(config)
  .then((response) => {
    console.log(response.data.urls);
  })
  .catch((error) => {
    console.log(error);
  });
