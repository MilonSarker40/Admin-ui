import React, { useEffect, useState } from "react";

function DynamicCheckBox({handleChnage,selected}){
    // http://localhost:3000/fruit
    const [api,setApi] =useState([])
    const data = [
        {name: "Bangladesh"},
        {name: "India"},
        {name: "Pak"},
    ]
    useEffect(()=>{
        // fetch("http://localhost:3000/fruit").then(data=>data.json()).then(val=>setApi(val));
        console.log("inside dynamic");
        setApi(data);
        console.log(data);
    },[])

    

    return (
        <div>
            {
                api.map((fruitItem,i)=>
                <div key={i}>
                    <input id={i} type="checkbox" value={fruitItem.name} onChange={(e)=>handleChnage(e,i)} /><span>{fruitItem.name}</span>
                </div>
                )
            }
            <br/>
            {
                selected.map((a,i)=> <div key={i}>  {a} </div>)
            }
        </div>
    );
}
export default DynamicCheckBox;