var React = require('react');
var ReactDOM = require('react-dom');
var InfoBox = require('./components/InfoBox.jsx');
var ContentPanel = require('./components/ContentPanel.jsx');
// var ContentSrc = require('./components/ContentSrc.jsx');

ReactDOM.render(<InfoBox
  heading="TwentyFive"
  content="This is only a test!" />,
  document.getElementById('box1'));
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

ReactDOM.render(<ContentPanel
  valueOne="12548|Testing one two three"
  valueTwo="145722158|Keep working"
  valueThree="14145|And the moment of truth" />,
  document.getElementById('content1'))
