import { useEffect, useState } from 'react';
import Link from 'next/link';
import { dealerIdSet } from '../../state/actions/authActions';
import { useDispatch } from 'react-redux';
import DatatableComp from '../DataTableComp/DatatableComp';

function DealerReportTable() {
    const [table, setTable] = useState([]);
    const dispatch = useDispatch();

    for (let i = 0; i < table.length; i++) {
        let sd_link = <Link href={`/dealersubdealerreport/${table[i].id}`} onClick={() => dispatch(dealerIdSet(table[i].id))}>{table[i].id}</Link>
        table[i].sd_link = sd_link
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'dealer')
            .then(res => res.json())
            .then(data => setTable(data.message))
    }, [])

    const headerData = [
        {
            isFilterable: true,
            isSortable: true,
            prop: 'sd_link',
            title: 'ID'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'email',
            title: 'Dealer'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'phone',
            title: 'Phone'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'store',
            title: 'Store'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'createdAt',
            title: 'Date'
        }
    ]

    return (
        <div className='agent-report-tbl'>
            <DatatableComp data={table} headerData={headerData} />
        </div>
    );
}

export default DealerReportTable;