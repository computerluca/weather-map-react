var React = require('react');
var moment = require('moment');
function DayForecast(props){
    this.icon = "http://openweathermap.org/img/w/"+props.forecast.weather[0].icon+".png";
        this.date = moment.unix(props.forecast.dt).format("MMMM Do YYYY");

    return(<div className="container" onClick={props.manageClick.bind(null,props.forecast)}>
    <h1>{this.date}</h1>
    <h1>{props.forecast.weather[0].description}</h1>
    <img src={this.icon} width="150" heigth="150" />
    
    </div>);
}
module.exports =DayForecast;