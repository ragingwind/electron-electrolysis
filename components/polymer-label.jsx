'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );

    return <message-label data-message={seconds}></message-label>;
  }
});
