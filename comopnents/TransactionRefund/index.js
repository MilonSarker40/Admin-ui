import { useSelector } from "react-redux";
import RefundForm from "./RefundForm";


const TransactionRefund = ({uid}) => {
    const sid = parseInt(useSelector(state => state?.settlement?.userSettlementId));
    return(
        <>
            <RefundForm />
        </>
    )
}

export default TransactionRefund;