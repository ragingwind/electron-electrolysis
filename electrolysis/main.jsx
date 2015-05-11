'use strict';

var React = require('react');
var ReactLabel = require('./components/react-label');
var PolymerLabel = require('./components/polymer-label');
var start = new Date().getTime();

setInterval(function() {
  React.render(
    <ReactLabel elapsed={new Date().getTime() - start} />,
    document.getElementById('react-container')
  );

  React.render(
    <PolymerLabel elapsed={new Date().getTime() - start} />,
    document.getElementById('polymer-container')
  );
}, 50);
