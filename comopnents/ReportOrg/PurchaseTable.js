import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

const PurchaseTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "purchasereport")
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Telco</th>
                    <th>Distributor</th>
                    <th>Amount</th>
                    <th>Payable</th>
                    <th>Commission</th>
                    <th>Entry Date</th>
                    <th>Local/International</th>
                    <th>Conversion Rate</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.telco}</td>
                            <td>{item.dist}</td>
                            <td>{item.purchase}</td>
                            <td>{item.payable}</td>
                            <td>{item.commission}</td>
                            <td>{item.entrydate}</td>
                            <td>{item.locale}</td>
                            <td>{item.conv}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default PurchaseTable