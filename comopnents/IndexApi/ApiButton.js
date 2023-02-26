import { useState, useEffect } from "react";

const ApiButton = ({id, status}) => {
    const [statusClass, setStatusClass] = useState("");
    const [statusText, setStatusText] = useState("");
    const [statusVal, setStatusVal] = useState(status);

    useEffect(() => {
        const btnClass = statusVal ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"
        const btnText = statusVal ? "Enabled! Click to Disable" : "Disabled! Click Enable"
        setStatusClass(btnClass);
        setStatusText(btnText);
    }, [])

    const statusUpdate = (status) => {
        setStatusVal(status);
        const btnClass = status ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"
        const btnText = status ? "Enabled! Click to Disable" : "Disabled! Click Enable"
        setStatusClass(btnClass);
        setStatusText(btnText);
    }

    const statusCheck = () => {
        event.preventDefault();
        if(statusVal){
            let url = `http://localhost:3000/api/deactivate/${id}`;
            console.log("access url ", url);
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    statusUpdate(data.status);
                });
        }else{
            let url = `http://localhost:3000/api/activate/${id}`;
            console.log("access url ", url);
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    statusUpdate(data.status);
                    // setStatusVal(data.status);
                });
        }
    }
    const btn = <button className={statusClass} data-id={id} onClick={statusCheck}>{statusText}</button>


    return(
        <p>{btn}</p>
    )
}

export default ApiButton;