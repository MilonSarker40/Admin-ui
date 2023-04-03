import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import DatatableComp from "../DataTableComp/DatatableComp";

const ActivityLog = () => {
    const [data, setData] = useState([])

    const headerData=[
        {
          cellProps: {
              style: function noRefCheck(){}
          },
          isFilterable: false,
          isSortable: true,
          prop: 'id',
          title: 'ID'
          },
          {
          isFilterable: true,
          isSortable: true,
          prop: 'date',
          title: 'Date'
          },
          {
          isFilterable: false,
          isSortable: true,
          prop: 'type',
          title: 'Type'
          },
          {
          isFilterable: true,
          isSortable: false,
          prop: 'detail',
          title: 'Detail'
          },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'systemlog/')
            .then((res) => res.json())
            .then((resdata) => setData(resdata.message))
    }, [])
    return (
    <>
    <div className=''>
        <h3>System Log History</h3>
        <DatatableComp data={data} headerData={headerData} />
      </div>
    </>
    )
}

export default ActivityLog;