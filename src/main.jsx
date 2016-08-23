var React = require('react');
var ReactDOM = require('react-dom');
var InfoBox = require('./components/InfoBox.jsx');
var ContentPanel = require('./components/ContentPanel.jsx');
var SideBox = require('./components/SideBox.jsx');

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
  background="#008080"
  border="#008080"
  color="white"
  heading = "100°"
  content = "in Texas" />,
  document.getElementById('box4'));

ReactDOM.render(<ContentPanel
  valueOne="12548|section one"
  valueTwo="145722158|section two"
  valueThree="14145|section three" />,
  document.getElementById('content-one'));
ReactDOM.render(<ContentPanel
  background="red"
  valueOne="12041986|Random Birthday"
  valueTwo="10,854|Days since born"
  valueThree="29|Age" />,
  document.getElementById('content-two'));

ReactDOM.render(<SideBox
  heading = "New Box"
  content = "Testing" />,
  document.getElementById('side1'));
