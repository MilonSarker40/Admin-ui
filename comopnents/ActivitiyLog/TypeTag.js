import Badge from 'react-bootstrap/Badge';


const TypeTag = ({type}) => {
    let typeBg = ''
    if (type == "Transfer") {
        typeBg = 'primary'
    } else if (type == "Recharge") {
        typeBg = 'success'
    } else if (type == "Withdrawal") {
        typeBg = 'warning'
    } else if (type == "Refund") {
        typeBg = 'danger'
    } else if (type = "AgentProfit") {
        typeBg = 'info'
    }

    return (
        // <p>{type}</p>
        <Badge bg={typeBg}>{type}</Badge>
    )
}

export default TypeTag