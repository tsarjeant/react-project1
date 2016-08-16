var React = require('react');

var InfoBox = React.creatClass({

  render: function() {
    // var boxStyle = {
    //   boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)',
    //   borderRadius: '4',
    //   marginTop: '25',
    //   background: '#ffffff',
    // };
    // if (this.state.background) {
    //   divStyle.background = this.props.background;
    // }

    return (
      <div style={boxStyle} className="col-sm-3">
        <h3>{this.props.value}</h3>
        <h4>{this.props.details}</h4>
      </div>
    )
  }
});

module.exports = InfoBox;
