import React, {useEffect, useState} from "react";

const Summary = () => {
    const [purchase, setPurchase] = useState(0.00)
    const [sales, setSales] = useState(0.00)
    const [revenue, setRevenue] = useState(0.00)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+"summaryreport")
          .then((res) => res.json())
          .then((data) => {
            setPurchase(data.data.total_purchase)
            setSales(data.data.total_sales)
            setRevenue(data.data.total_revenue)
          })
      }, [])

    return (
        <>
            <p>Total Purchase : {purchase}</p>
            <p>Total Sales: {sales}</p>
            <p>Total Revenue: {revenue}</p>
        </>
    )
}

export default Summary