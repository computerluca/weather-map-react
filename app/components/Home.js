var React = require('react');
var Search = require('../components/Search');
var Home = React.createClass({
    childContextTypes: {
    router: React.PropTypes.func.isRequired
  },
    render:function(){
        
        return(
            <div className='jumbotron col-sm-12 text-center'>
            <h1>Enter a City or a Name</h1>
                <Search />
            
            </div>
            );
    }
});
module.exports = Home;