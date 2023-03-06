import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTrxId } from '../../state/actions/authActions';

const TrxLink = ({trxId}) => {
    let link = "/trxdt/"+trxId
    const dispatch = useDispatch()

    return(
        <Link href={link} onClick={() => dispatch(setTrxId(trxId))}>Link</Link>
    )   
}

export default TrxLink;