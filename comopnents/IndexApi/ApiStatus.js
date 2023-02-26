import { useState } from "react"

const ApiStatus = (status) => {

    const [statusText, setStatusText] = useState(status);

    const text = statusText? "Activated. Click the button to deactivate": "Inactive. Click the button to Activate"  
    return (
        <p>{text}</p>
    )
}

export default ApiStatus