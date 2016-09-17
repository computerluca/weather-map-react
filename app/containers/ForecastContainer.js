var React = require('react');
var Forecast = require('../components/Forecast');
var meteosearch = require('../weathermap/meteosearch');
var ForecastContainer = React.createClass({
    contextTypes : {
        router: React.PropTypes.object.isRequired
    },
    getInitialState:function(){
        return{
            loading:true,
            forecast:[]
        }
    },
    componentDidMount:function(){
       meteosearch.getForecast(this.props.routeParams.query)
      .then(function (data) {
        this.setState({forecast:data.data,loading:false});
    
      }.bind(this))
    },
    render: function () {
    return (
      <Forecast city={this.props.routeParams.query} forecast={this.state.forecast} loading={this.state.loading} />
    )
  }
})
module.exports = ForecastContainer;
