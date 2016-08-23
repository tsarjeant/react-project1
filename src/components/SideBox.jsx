var React = require('react');

var SideBox = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 col-md-3">
        <div>
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
