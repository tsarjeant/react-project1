var React = require('react');
var ContentSrc = require('./ContentSrc.jsx')

var ContentPanel = React.createClass({

  render: function() {
    return (
      <div className="col-sm-12 col-md-9">
        <div className="row">
          <div className="col-sm-4">
            <ContentSrc content={this.props.valueOne} />
          </div>
          <div className="col-sm-4">
            <ContentSrc content={this.props.valueTwo} />
          </div>
          <div className="col-sm-4">
            <ContentSrc content={this.props.valueThree} />
          </div>
        </div>

      </div>
    )
  }
});

module.exports = ContentPanel;
