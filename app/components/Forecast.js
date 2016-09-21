var React = require('react');
var PropTypes =React.PropTypes;
var DayForecast = require('./DayForecast');
function Forecast(props){
    console.log(props);
   if(props.loading){
        return(<div className="container"><div className="jumbotron"><h2>Loading....</h2></div></div>);
    }
    else{

       return (<div className="container">
                <div className="jumbotron">
                        <h2>Forecast for the city of {props.city}</h2>
                        
                </div>
                <div className="row">

                            <div className="col col-sm-4">
                                <DayForecast forecast={props.forecast[0]} manageClick={props.manageClick}/>
                            </div>
                            <div className="col col-sm-4">
                                <DayForecast forecast={props.forecast[1]} manageClick={props.manageClick}/>
                            </div>
                            <div className="col col-sm-4">
                                <DayForecast forecast={props.forecast[2]} manageClick={props.manageClick}/>
                            </div>
                            </div>
                        
                            <div className="row">
                            <div className="col col-sm-4">
                                <DayForecast forecast={props.forecast[3]} manageClick={props.manageClick}/>
                            </div>
                            <div className="col col-sm-4">
                                <DayForecast forecast={props.forecast[4]} manageClick={props.manageClick}/>
                            </div>
                            </div>
                
                </div>)
    }
}
module.exports = Forecast;