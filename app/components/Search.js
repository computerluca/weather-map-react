var React = require('react');
var ReactRouter = require('react-router');



var Search = React.createClass({
    contextTypes: {
    router: React.PropTypes.object.isRequired
  },
   getInitialState:function(){
       return{
           query:""
       }
   },
   handleUpdateUser: function (event) {
    this.setState({
      query: event.target.value
    });
  },
  handleStartButton: function (event) {
    var actualvaluequery = this.state.query;
    if(actualvaluequery){
        this.context.router.push('/forecast/' + actualvaluequery);
    }
    else{
        alert("inserisci una città");
    }
  },
    render:function(){
        return(<div>
        <input type="text" name="search" placeholder="Insert a city" onChange={this.handleUpdateUser} />
        
                <button type="button" className="btn btn-lg btn-success" onClick={this.handleStartButton}>Start Bernacca!</button>
            </div>);
    }
})
module.exports = Search;