import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';



// const API_KEY = 'AIzaSyCXcEG_Wa4FRsj2nXBRq3Aef9REqO0unt8';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<SearchBar />
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));