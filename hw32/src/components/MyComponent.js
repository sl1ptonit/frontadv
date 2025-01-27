import React, {Component} from 'react';

class MyComponent extends Component {

    	constructor(props) {
		super(props);

		this.state = {
	    	count: 0
		}
    }

    handleClick = () => {
		this.setState({
			count: this.state.count +1
		});
    }

    render() {
		return (
			<div>
			Hello from My Component! Значення: {this.state.count}
			<button onClick={ this.handleClick }>Increment</button>
			</div>
		)
    }

}

export default MyComponent;