import React, {Component} from 'react';
import SmileItem from "./SmileItem";

class SmileList extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
                {this.props.smiles.map(smile => {
                    return <SmileItem
                        key={smile.id}
                        smile={smile}
                        updateCount={this.props.updateCount}
                    />
                })}

                {this.props.smiles.length === 0 ? <p>Smile list is empty</p> : "" }

            </div>
        )
    }
}

export default SmileList;