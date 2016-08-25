var React = require('react');

var SideBox = React.createClass({
  render: function() {

    var sideStyle = {
      borderRadius: '4px',
      margin: '10px 0',
      height: '12em',
      background: '#ffffff',
      border: '1px solid #888888',
    };
    var sideText = {
      borderRadiusTopLeft: '4px',
      borderRadiusTopRight: '4px',
      background: 'green',
      height: '5em',
      background: '#ffffff',
      marginTop: '-20px',
      color: '#ffffff',
      textAlign: 'center'
    };
    if (this.props.background) {
      sideText.background = this.props.background;
    }

    return (
      <div style={sideStyle} >
        <div style={sideText}>
          <div>
            <h3>{this.props.heading}</h3>
          </div>
          <div>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SideBox;
