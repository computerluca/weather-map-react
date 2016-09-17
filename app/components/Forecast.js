var React = require('react');
var PropTypes =React.PropTypes;
function DayForecast(props){
    
}
function Forecast(props){
    
        
        if(props.loading){
        return(<div className="container"><div className="jumbotron"><h2>Loading....</h2></div></div>);
    }
    else{
        console.log(props.forecast);
       return (<div className="container">
                <div className="jumbotron">
                        <div>Forecast for the city of {props.city}</div>
                </div>
                <div className="row">
                            <div className="col col-sm-4">
                                <h1>First column</h1>
                            </div>
                             <div className="col col-sm-4">
                                <h1>Second column</h1>
                            </div>
                             <div className="col col-sm-4">
                                <h1>Third column</h1>
                            </div>
                
                </div>
                <div className="row">
                            <div className="col col-sm-6"><h1>Second column</h1></div>
                            <div className="col col-sm-6"><h1>Second column</h1></div>
                
                </div>
            </div>)
        
    }
    
        
        
        
        
};
Forecast.propTypes={
        city:PropTypes.string.isRequired,
        
    };
module.exports = Forecast;