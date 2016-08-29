var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps : function(){
        return {
            title : 'error'
        };
    },
    
    propTypes : {
        title : React.propTypes.string,
        message : React.propTypes.string.isAllowed
    },
    
    componentDidMount : function(){
        
    },
    
    render : function(){
        return(
            <div></div>    
        );
    }
});

module.exports = ErrorModal;