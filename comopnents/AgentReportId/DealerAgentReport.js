import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { agentReportIdSet } from '../../state/actions/authActions';
import DatatableComp from '../DataTableComp/DatatableComp';

function DealerAgentReport() {
    const dispatch = useDispatch();

    const did = parseInt(useSelector(state => state?.dealer?.subDealerId));
    const [table, setTable] = useState([]);

    for (let i = 0; i < table.length; i++) {
        // let recharge_link = <Link href={`/recharge/${table[i].id}`} onClick={() => dispatch(agentReportIdSet(table[i].id))}>{table[i].data.recharge}</Link>
        let due_link = <Link href={`/due/${table[i].userId}`} onClick={() => dispatch(agentReportIdSet(table[i].userId))}>{table[i].data.dues}</Link>
        let earning_link = <Link href={`/earning/${table[i].userId}`} onClick={() => dispatch(agentReportIdSet(table[i].userId))}>{table[i].data.earning}</Link>
        let balance_link = <Link href={`/balance/${table[i].userId}`} onClick={() => dispatch(agentReportIdSet(table[i].userId))}>{table[i].data.balance}</Link>
        let sale_link = <Link href={`/sale/${table[i].userId}`} onClick={() => dispatch(agentReportIdSet(table[i].userId))}>{table[i].data.sale}</Link>

        // table[i].recharge_link = recharge_link
        table[i].due_link = due_link
        table[i].earning_link = earning_link
        table[i].balance_link = balance_link
        table[i].sale_link = sale_link
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "dealersubdealeragentreport/" + did)
            .then(res => res.json())
            .then(data => setTable(data.message))
    }, [])

    console.log(table)

    const headerData = [
        {
            isFilterable: true,
            isSortable: true,
            prop: 'id',
            title: 'ID'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'email',
            title: 'Email'
        },
        // {
        //     isFilterable: true,
        //     isSortable: true,
        //     prop: 'recharge_link',
        //     title: 'Recharge'
        // },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'due_link',
            title: 'Due'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'earning_link',
            title: 'Earning'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'balance_link',
            title: 'Balance'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'sale_link',
            title: 'Sale'
        }
    ]

    return (
        <div className='agent-report-tbl'>
            <DatatableComp data={table} headerData={headerData} />
        </div>
    );
}

export default DealerAgentReport;