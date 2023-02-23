import Link from "next/link"

const TrxLink = ({trxId}) => {
    console.log("trxId : ", trxId)
    let link = "/trxdt/"+trxId
    console.log(link);
    return(
        <Link href={link}>Link</Link>
    )   
}

export default TrxLink;