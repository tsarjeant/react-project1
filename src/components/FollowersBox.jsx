var React = require('react');
var FollowersNum = require('./FollowersNum.jsx');
var FollowersText = require ('./FollowersText.jsx');

var FollowersBox = React.creatClass({
  render: function() {
    var followers = function(number, text, index) {
      return <FollowersNum key={index + text} text={text} />;
    };

    return (<h3>{this.props.number}</h3>);

  }
});
