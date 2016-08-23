var React = require('react');

var contentSrc = React.createClass({

  componentWillMount: function() {
    var data = this.props.content.split('|');
    this.setState({paneTitle: data[0]});
    this.setState({paneContent: data[1]});
  },

  render: function() {

  return (
    <div>
      <div className="col-sm-12">
        <h3>{this.state.paneTitle}</h3>
      </div>
      <div className="col-sm-12">
        <p>{this.state.paneContent}</p>
      </div>
    </div>
    );
  }
});
module.exports = contentSrc;
