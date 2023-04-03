import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiButton from './ApiButton';
import DatatableComp from '../DataTableComp/DatatableComp';

const IndexApiTable = () => {
    const [data, setData] = useState([]);
    for (let i = 0; i < data.length; i++) {
        let btn = <ApiButton id={data[i].id} status={data[i].status} />
        data[i].btn = btn
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'apis')
            .then((res) => res.json())
            .then((data) => {
                setData(data.message);
            })
    }, []);

    const headerData = [
        {
            isFilterable: true,
            isSortable: true,
            prop: 'id',
            title: 'Id'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'name',
            title: 'Api'
        },
        {
            isFilterable: true,
            isSortable: false,
            prop: 'code',
            title: 'Code'
        },
        {
            isFilterable: true,
            isSortable: false,
            prop: 'btn',
            title: 'Status'
        }
    ]

    return (
        <DatatableComp data={data} headerData={headerData} />
    )
}

export default IndexApiTable
