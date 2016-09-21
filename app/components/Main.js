var React = require('react');
var Search = require('../components/Search');
var Main = React.createClass({
   contextTypes :{
        router: React.PropTypes.object.isRequired
    },
    render:function(){
        return(
            <div className="main-container">
            <div className="row">
            <div className="col-md-6">
            <h2 className="text-left">Clever Title</h2>
            </div>
                <div className="col-md-6"><h2 className="pull-right">
                
                <Search /></h2></div>
                {this.props.children}
            </div>
            </div>
            )
    }
});
module.exports = Main;