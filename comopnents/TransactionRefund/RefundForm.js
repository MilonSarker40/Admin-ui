import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AdjustmentTable from "./AdjustmentTable";
import Detail from "./Detail";
import SubmitForm from "./SubmitForm";

const RefundForm = () => {
    const [data, setData] = useState({});

    const detailFunc = (src) => {
        setData(src)
    }

    return(
        <>
        
        <Row>
            <Col>
                <SubmitForm func={detailFunc} />
            </Col>
            <Col>
                <Detail data={data}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AdjustmentTable />
            </Col>
        </Row>
        </>
        
    )
}

export default RefundForm;