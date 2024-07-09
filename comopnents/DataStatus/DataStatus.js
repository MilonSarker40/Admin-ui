import { Badge } from "react-bootstrap"

const DataStatus = ({status}) => {
    // console.log(status)
    let statusTag = ""
    let statusBg = ''
    if (status == true){
        statusTag = `SUCCESS - ${status}`
        statusBg = 'success'
    }else {
        statusTag = `FAILED - ${status}`
        statusBg = 'danger'
    }

    console.log("STATUS BADGE : ", status)

    return (
        <Badge bg={statusBg}>{statusTag}</Badge>
        // <Badge bg="info">{status.status}</Badge>
    )
}

export default DataStatus