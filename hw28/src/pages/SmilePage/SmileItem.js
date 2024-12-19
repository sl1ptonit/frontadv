
function SmileItem(props)  {
    return (
        <div style={{
                padding: "10px",
                border: '1px solid black',
                borderRadius: '5px',
                cursor: 'pointer',
        }}>
            <span
                onClick={() => props.updateCount(props.smile.id)}
            >
                {props.smile.name}  : {props.smile.count}
            </span>
        </div>
    )
}

export default SmileItem;