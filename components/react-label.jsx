'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message = 'ReactLabel has been successfully running for ' + seconds + ' seconds.';

    return <div><p>{message}</p></div>;
  }
});
