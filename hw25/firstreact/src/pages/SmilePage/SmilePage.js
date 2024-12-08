import React, {Component} from 'react';
import SmileList from "./SmileList";

class SmilePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {
                    id: 1,
                    name: 'Smile 1',
                    count: 0,
                },
                {
                    id: 2,
                    name: 'Smile 2',
                    count: 0,
                }
            ],
            winner: {

            }
        }
    }

    componentDidMount() {
        this.loadFromLocalStorage();
    }

    saveToLocalStorage = () => {
        localStorage.setItem('smiles', JSON.stringify(this.state.smiles));
    };

    // Загрузка данных из localStorage
    loadFromLocalStorage = () => {
        const smiles = JSON.parse(localStorage.getItem('smiles'));

        if (smiles) {
            this.setState({ smiles });
        }
    };

    updateCount = (id) => {
        this.setState({
            smiles: this.state.smiles.map(smile => {
                return smile.id === id ? {...smile, count: smile.count + 1} : smile
            })
        })

        this.saveToLocalStorage();
    }

    showResult = () => {
       let winner =  this.state.smiles.reduce((accumulator, smile) => {
            return  smile.count > accumulator.count ? smile : accumulator;
        }, { count: 0 })

        this.setState({
           winner: winner
        });
    }

    clearResult = () => {
        this.setState({
            smiles: this.state.smiles.map(smile => {
                smile.count = 0;
                return smile;
            }),
            winner: null
        });

        this.saveToLocalStorage();
    }

    render() {
        return (
            <div>
                <h1>Голосування за найкращий смайл</h1>
                <SmileList
                    smiles={this.state.smiles}
                    updateCount={this.updateCount}
                />
                <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                    <button onClick={this.showResult}>Show result</button>
                    <button onClick={this.clearResult}>Clear result</button>
                </div>
                { this.state.winner?.name  ? <p>Winner: {this.state.winner.name} </p> : ""  }
            </div>
        )
    }
}

export default SmilePage;