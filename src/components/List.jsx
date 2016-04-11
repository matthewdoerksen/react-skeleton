var React = require('react');
var ListItem = require('./ListItem.jsx');

var items = [{"id:": 1, "text":"ham"}, {"id": 2, "text": "cheese"}, {"id": 3, "text": "potatoes"}];

var List = React.createClass({
  render: function() {
    var listItems = items.map(function(item) {
      return <ListItem key={item.id} item={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
