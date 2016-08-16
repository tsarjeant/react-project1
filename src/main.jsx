var React = require('react');
var ReactDOM = require('react-dom');
var InfoBox = require('./components/InfoBox.jsx');

ReactDOM.render(<InfoBox

  heading="TwentyFive"
  content="This is only a test!" />,
  document.getElementById('box-one'));
ReactDOM.render(<InfoBox
  heading = "400"
  content = "This too is a test." />,
  document.getElementById('box2'));
ReactDOM.render(<InfoBox
  heading = "Sure"
  content = "This too is a test." />,
  document.getElementById('box3'));
ReactDOM.render(<InfoBox
  background="#ff9900"
  heading = "WEll SHit"
  content = "This too is a test." />,
  document.getElementById('box4'));
