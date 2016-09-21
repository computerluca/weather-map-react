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
    componentWillReceiveProps: function (nextProps) {
     meteosearch.getForecast(nextProps.routeParams.query)
      .then(function (data) {
        this.setState({forecast:data.data.list,loading:false});
    
      }.bind(this))
},
    componentDidMount:function(){
       meteosearch.getForecast(this.props.routeParams.query)
      .then(function (data) {
        this.setState({forecast:data.data.list,loading:false});
    
      }.bind(this))
    },
    manageClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.query,
      state: {
        weather: weather
}
    })
},
    render: function () {
    return (
      <Forecast city={this.props.routeParams.query} forecast={this.state.forecast} loading={this.state.loading} manageClick={this.manageClick} />
    )
  }
})
module.exports = ForecastContainer;