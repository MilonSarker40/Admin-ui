import Badge from 'react-bootstrap/Badge';
import { Col, Row } from "react-bootstrap";

const Summary = ({total, success, failed, sales, refund, salesRefund, adj}) => {
    return (
        <>
            <h4>Summary </h4>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Earned So Far : {total}</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Success : {success}</p>
                </Badge>{' '}
            </Row>
            <Row>
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Failed : {failed}</p>
                </Badge>{' '}
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Sales : {sales}</p>
                </Badge>
            </Row>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Refund : {refund}</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total salesRefund : {salesRefund}</p>
                </Badge>{' '}
            </Row>
            {/* <Row>
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Adjusted Refund : {adj.profit}</p>
                </Badge>{' '}
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Adjusted Sales : {adj.sales}</p>
                </Badge>
            </Row> */}
        </>
    )
}

export default Summary