var React = require('react');
var ContentSrc = require('./ContentSrc.jsx')

var ContentPanel = React.createClass({

  render: function() {

    var panelStyle = {
      borderRadius: '4px',
      margin: '1em 0',
      paddingTop: '14em',
      height: '20em',
      background: '#ff9900'
    };
    if (this.props.background) {
      panelStyle.background = this.props.background;
    }

    var dataSpace = {
      color: 'white',
      background: '#444444',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      height:'6em',
      // paddingTop: '14em'
    };

    var contentStyle = {
      textAlign: 'center'
    };


    return (
      <div style={panelStyle} >
        <div style={dataSpace} className="col-sm-12">
          <div class="row">
            <div style={contentStyle} className="col-sm-4">
              <ContentSrc content={this.props.valueOne} />
            </div>
            <div style={contentStyle} className="col-sm-4">
              <ContentSrc content={this.props.valueTwo} />
            </div>
            <div style={contentStyle} className="col-sm-4">
              <ContentSrc content={this.props.valueThree} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ContentPanel;
