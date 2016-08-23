var React = require('react');

var InfoBox = React.createClass({
  render: function() {
    var boxStyle = {
      borderRadius: '4px',
      padding: '10px',
      background: '#ffffff',
      textAlign: 'center'
    };
    if (this.props.background) {
      boxStyle.background = this.props.background;
    }
    if (this.props.color) {
      boxStyle.color = this.props.color;
    }

    return (
      <div style={boxStyle}
           className="col-sm-12 col-md-3">
        <div>
          <h3>{this.props.heading}</h3>
        </div>
        <div>
          <p>{this.props.content}</p>
        </div>

      </div>
    )
  }
});

module.exports = InfoBox;
