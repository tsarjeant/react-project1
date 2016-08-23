var React = require('react');

var InfoBox = React.createClass({
  render: function() {
    var boxStyle = {
      borderRadius: '4px',
      border: '1px solid #777777',
      margin: '5px',
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
    if (this.props.border) {
      boxStyle.border = this.props.border
    }

    return (
      <div className="col-sm-6 col-md-3">
        <div style={boxStyle}>
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

module.exports = InfoBox;
