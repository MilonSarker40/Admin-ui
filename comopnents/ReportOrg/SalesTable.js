import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

const SalesTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "salesreport")
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Api Balance</th> 
                    <th>Recharge Amoun t</th>
                    <th>Agent</th>
                    <th>Number</th>
                    <th>Operator</th>
                    <th>Api</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
            {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.balance}</td>
                            <td>{item.amount}</td>
                            <td>{item.agent}</td>
                            <td>{item.number}</td>
                            <td>{item.operator}</td>
                            <td>{item.api}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default SalesTable