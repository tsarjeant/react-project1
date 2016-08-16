var React = require('react');
var ReactDOM = require('react-dom');
var InfoBox = require('./components/InfoBox.jsx');

ReactDOM.render(<InfoBox
  background = "#ff9900"
  value = "20"
  details = "This is only a test!" />,
  document.getElementById('box1'));
ReactDOM.render(<InfoBox
  background = "teal"
  value = "400"
  details = "This too is a test." />,
  document.getElementById('box2'))
