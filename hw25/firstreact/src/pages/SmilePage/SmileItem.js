import React, {Component} from 'react';

class SmileItem extends Component {

    render() {
        return (
            <div style={{
                    padding: "10px",
                    border: '1px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer',
            }}>
                <span
                    onClick={() => this.props.updateCount(this.props.smile.id)}
                >
                    {this.props.smile.name}  : {this.props.smile.count}
                </span>
            </div>
        )
    }
}

export default SmileItem;