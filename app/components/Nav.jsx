var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch : function(e){
        e.preventDefault();
        
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        
        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render : function(){
        
    }
})

module.exports = Nav;