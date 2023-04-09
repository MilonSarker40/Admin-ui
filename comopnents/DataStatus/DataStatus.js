import { Badge } from "react-bootstrap"

const DataStatus = ({status}) => {
    let statusTag = ""
    let statusBg = ''
    if (status){
        statusTag = "SUCCESS"
        statusBg = 'success'
    }else {
        statusTag = "FAILED"
        statusBg = 'danger'
    }

    return (
        <Badge bg={statusBg}>{statusTag}</Badge>
    )
}

export default DataStatus