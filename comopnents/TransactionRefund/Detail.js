import { Col, Row } from "react-bootstrap";

const Detail = ({data}) => {
    return (
        <>
        <h5>Detail TrX</h5>
        <Row>
            <Col>
                <p>Id: {data.id}</p>
                <p>Phone: {data.phone}</p>
                <p>Amount: {data.amount}</p>
                <p>Agent phone: {data.agent_phone}</p>
            </Col>
            <Col>
                <p>Store: {data.store}</p>
                <p>Country: {data.ctry}</p>
                <p>MNO: {data.mno}</p>
                <p>Service: {data.service}</p>
            </Col>
        </Row>
        
        </>
    )
}

export default Detail;