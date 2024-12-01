import React, {Component} from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {

    	constructor(props) {
		super(props);

		this.state = {
	    	count: 0,
			mode: 'increment',
			multiplier: 1
		}
    }

    handleCount = () => {
		this.setState({
			count: this.state.mode === 'increment'
				? this.state.count + this.state.multiplier
				: this.state.count - this.state.multiplier
		});
    }

	toggleMode = () => {
		this.setState({
			mode: this.state.mode === 'increment' ? 'decrement' : 'increment'
		});
	}

	updateMultiplier = (newValue) => {
		this.setState({
			multiplier: newValue,
		})
	}

	resetCounter = () => {
			this.setState({
				count: 0,
			});
	}

    render() {
			const { count, mode } = this.state;

		return (
			<div className='counter-container'>
				<h1 className='counter-value'>Значення: {count}</h1>
				<span className='counter-mode'>
					Режим: {mode === 'increment' ? 'Збильшеня' : 'Зменшення'}
				</span>
				<div className='buttons-wrapper'>
					<button className='counter-button' onClick={this.handleCount}>
						{mode === 'increment' ? `Add ${this.state.multiplier}` : `Minus ${this.state.multiplier}`}
					</button>

					<button className='counter-button' onClick={this.toggleMode}>
						Change mode
					</button>

					<button className='counter-button' onClick={this.resetCounter}>
						Clear
					</button>

					<button className='counter-button' onClick={() => this.updateMultiplier(1)}>
						Set Multiplier to 1
					</button>

					<button className='counter-button' onClick={() => this.updateMultiplier(5)}>
						Set Multiplier to 5
					</button>

					<button className='counter-button' onClick={() => this.updateMultiplier(10)}>
						Set Multiplier to 10
					</button>
				</div>
			</div>
		)
	}
}

export default ClickCounter;