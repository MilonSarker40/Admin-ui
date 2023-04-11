import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { agentReportIdSet } from "../../state/actions/authActions";
import { useDispatch } from "react-redux";

const AgentProfileReportComponent = () => {
    const dispatch = useDispatch()
    const [finance, setFinance] = useState({})
    const [info, setInfo] = useState({})

    const uuid = useSelector(state => state?.auth?.loginData?.uuid)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentprofilereport/" + uuid)
            .then(res => res.json())
            .then(data => {
                setFinance(data.message.finance)
                setInfo(data.message.profile)
            })
    }, [])
    
    return(
        <>
        <Row>
            <Col>
            
                <h5>Agent Financials</h5>
                <p>Earning: <Link href={`/earning/${uuid}`} onClick={() => dispatch(agentReportIdSet(uuid))}>{finance.earn}</Link></p>
                <p>Sales: <Link href={`/sale/${uuid}`} onClick={() => dispatch(agentReportIdSet(uuid))}>{finance.sale}</Link></p>
                <p>Due: <Link href={`/due/${uuid}`} onClick={() => dispatch(agentReportIdSet(uuid))}>{finance.due}</Link></p>
                <p>Balance: <Link href={`/balance/${uuid}`} onClick={() => dispatch(agentReportIdSet(uuid))}>{finance.balance}</Link></p>
            </Col>
            <Col>
                <h5>Agent Information</h5>
                <p>Name: {info.f_name} {info.l_name}</p>
                <p>Age: {info.age}</p>
                <p>Email: {info.email}</p>
                <p>Store: {info.store}</p>
                <p>Joined: {info.createdAt}</p>
            </Col>
            <Col>
                <h5>Superior Info</h5>
                <p>Subdear Phone: {info.subdealer_phone}</p>
                <p>Subdear Store: {info.subdealer_store}</p>
            </Col>
        </Row>
        
        </>
    )
}

export default AgentProfileReportComponent;