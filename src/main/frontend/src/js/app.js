const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component { 
	render() { 
		return (
			<>Ok</>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)