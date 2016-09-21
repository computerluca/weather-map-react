var React = require('react');
var Detail = require('../components/Detail');
var ForecastContainer = React.createClass({
    
    render: function () {
    return (
      <Detail header={this.props.routeParams.query} weather={this.props.location.state.weather}/>
    )
  }
})
module.exports = ForecastContainer;