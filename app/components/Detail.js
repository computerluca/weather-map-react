var React = require('react');
var moment = require('moment');
var DayForecast = require('./DayForecast');
function Detail(props){
    console.log(props.weather);
    this.image  = "http://openweathermap.org/img/w/"+props.weather.weather[0].icon+".png";
    this.date = moment.unix(props.weather.dt).format("MMMM Do YYYY");
    return(<div className="container">
    <h2>{this.date}</h2>
    <img src={this.image} />
    <h1>{props.header}</h1>
    <h2>{props.weather.weather[0].description}</h2>
    <h2>Min Temp{props.weather.temp.min}</h2>
    <h2>Max Temp{props.weather.temp.max}</h2>
    <h2>Humidity {props.weather.humidity}</h2>
    </div>);
}
module.exports = Detail;