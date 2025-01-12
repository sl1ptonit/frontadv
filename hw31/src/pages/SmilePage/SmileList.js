import SmileItem from "./SmileItem";

function SmileList(props) {
    return (
        <div style={{ display: 'flex', flexDirection: "row", gap: '10px' }}>
            {props.smiles.map(smile => {
                return <SmileItem
                    key={smile.id}
                    smile={smile}
                    updateCount={props.updateCount}
                />
            })}

            {props.smiles.length === 0 ? <p>Smile list is empty</p> : "" }

        </div>
    )
}

export default SmileList;