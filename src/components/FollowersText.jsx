var React = require('react');

var FollowersText = React.creatClass({
  render: function() {
    return (
      <h4>{this.props.text}</h4>
    );
  }
});

module.exports = FollowersText;
