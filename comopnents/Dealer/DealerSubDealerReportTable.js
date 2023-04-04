import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { subDealerIdSet } from '../../state/actions/authActions';
import DatatableComp from '../DataTableComp/DatatableComp';

function DealerSubDealerReportTable() {
    const dispatch = useDispatch();
    const did = parseInt(useSelector(state => state?.dealer?.dealerId));
    const [table, setTable] = useState([]);

    for (let i = 0; i < table.length; i++) {
        let sd_link = <Link href={`/dealersubdealeragentreport/${table[i].id}`} onClick={() => dispatch(subDealerIdSet(table[i].id))}>{table[i].id}</Link>
        table[i].sd_link = sd_link
        table[i].store = table[i].user.store
        table[i].createdAt = table[i].user.createdAt
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "dealersubdealerreport/" + did)
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
            title: 'Subdealer'
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

export default DealerSubDealerReportTable;