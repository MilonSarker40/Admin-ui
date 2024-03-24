import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const RevenueTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "revenuereport")
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Recharge Amount</th>
                    <th>Agent</th>
                    <th>Number</th>
                    <th>Operator</th>
                    <th>Api</th>
                    <th>Time</th>
                    <th>profit</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.amount}</td>
                            <td>{item.agent}</td>
                            <td>{item.number}</td>
                            <td>{item.operator}</td>
                            <td>{item.api}</td>
                            <td>{item.time}</td>
                            <td>{item.profit}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default RevenueTable