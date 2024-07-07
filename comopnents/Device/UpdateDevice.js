import { useState, useEffect } from "react";

const UpdateDevice = ({ uuid }) => {
    let data = {
        device_uuid: uuid
    }
    const update = () => {
        console.log("UPDATING , ", uuid)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'nullifycurrentdevice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert(data.message);
        })
        .catch((error) => {210
            console.error('Error:', error);
            alert(data.message);
        });
    }

    const btn =<button className="btn btn-sm btn-primary" onClick={update}>Nullify Device</button>

    return(
        <>{btn}</>
    )
}

export default UpdateDevice