var React = require('react');

var FollowersNum = React.creatClass({
  render: function() {
    return (
      <h4>{this.props.number}</h4>
    );
  }
});

module.exports = FollowersNum;
