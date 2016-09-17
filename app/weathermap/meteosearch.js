var API_ID = 'acf5def5edc719cd39df5e52a165b550';
var axios = require('axios');
var helpers={
 getForecast:function (query) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+query+'&type=accurate&APPID='+API_ID+'&cnt=5');
}
};

module.exports = helpers;