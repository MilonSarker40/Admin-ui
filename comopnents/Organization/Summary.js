import Badge from 'react-bootstrap/Badge';
import { Col, Row } from "react-bootstrap";

const Summary = ({total, success, failed, sales, refund, salesRefund, adj, today_earned, today_success, today_sales, main_earning}) => {
    return (
        <>
            <h4>Summary </h4>
            <Row>
                <h5>Organization Earning Calculations </h5>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Organization Earned(Total Earned - Total Refund) : {main_earning.toFixed(2)}</p>
                </Badge>{' '}
            </Row>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Earned : {total.toFixed(2)}</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Refund : {refund}</p>
                </Badge>{' '}
                
            </Row>
            <hr/>
            <Row>
                <h5>Recharge Sale Calculations </h5>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Success : {success}</p>
                </Badge>{' '}
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Failed : {failed}</p>
                </Badge>{' '}
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total Sales : {sales}</p>
                </Badge>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Total salesRefund : {salesRefund}</p>
                </Badge>{' '}
            </Row>
            <hr/>
            <Row>
                <h5>Today's Calculation </h5> 
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Today Earned : {today_earned}</p>
                </Badge>{' '}
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Today Sales : {today_sales}</p>
                </Badge>
                <Badge bg="light" text="dark" as={Col}>
                    <p className='fs-5 text-start mx-5'>Today Successful Recharge : {today_success}</p>
                </Badge>
            </Row>
        </>
    )
}

export default Summary