import { useEffect, useState } from "react";

const PriorityData = ({id}) => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/priority')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("priorities : ", data.message);
    //             setData(data.message);
    //         })
    // },[])

    console.log(data);
    return(
        <p>Data is : {id}</p>
    )
}

export default PriorityData;