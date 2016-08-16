var React = require('react');

var InfoBox = React.createClass({
  render: function() {
    var boxStyle = {
      boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)',
      borderRadius: '4px',
      marginTop: '25px',
      marginBottom: '25px',
      background: '#ffffff',
    };
    if (this.props.background) {
      boxStyle.background = this.props.background;
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
