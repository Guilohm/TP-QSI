/** @jsx React.DOM */
var FeedList = React.createClass({
	render: function() {
		var createItem = function(itemText,itemAuteur) {
			return <li>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

var FeedApp = React.createClass({
	getInitialState: function() {
		return {items: [], text: '',auteur: ''};
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	onChange2: function(e) {
		this.setState({auteur: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.auteur] + ' : ' +  [this.state.text]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText, auteur: nextText});
	},
render: function() {
return (
	<div>
	<h3>News Feed</h3>
	<FeedList items={this.state.items} />
	<form onSubmit={this.handleSubmit}>
	Auteur : <input onChange={this.onChange2} value={this.state.auteur} />
	Message : <input onChange={this.onChange} value={this.state.text} />
	<button>{'Add #' + (this.state.items.length + 1)}</button>
	</form>
	</div>
	);
}
});
React.renderComponent(<FeedApp />, example);
