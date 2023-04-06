import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SimulatorData = () => {
    const [balance, setBalance] = useState(0.00);
    const type = useSelector(state => state?.auth?.loginData?.type);
    const store = useSelector(state => state?.auth?.loginData?.store);
    const uid = parseInt(useSelector(state => state?.auth?.loginData?.uid));
    const uuid = useSelector(state => state?.auth?.loginData?.uuid);

    useEffect(() => {
        if (type == "agent"){
            console.log("Agent Id calling");
            fetch(process.env.NEXT_PUBLIC_BASE_URL + 'agentbalance/'+ uuid)
                .then(res => res.json())
                .then(data => setBalance(data.balance))
        }else {
            setBalance(0.00)
        }
    }, [])


    return (
        <>
            <p>Account Type: {type}</p>
            <p>Account Store: {store}</p>
            <p>Account Balance: {balance}</p>
        </>
    )
}

export default SimulatorData;
