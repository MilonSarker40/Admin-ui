import React, { useEffect, useState } from "react";

function DynamicCheckBox(){
    // http://localhost:3000/fruit
    const [api,setApi] =useState([])
    const [selected,setSelected] =useState([])
    const data = [
        {name: "Apple"},
        {name: "Banana"},
        {name: "Orange"},
    ]
    useEffect(()=>{
        // fetch("http://localhost:3000/fruit").then(data=>data.json()).then(val=>setApi(val));
        console.log("inside dynamic");
        setApi(data);
        console.log(data);
    },[])

    const handleChnage =(e,index)=>{
        console.log(e.target.value)
        const activeData = document.getElementById(index).checked
        console.log(activeData,"activeData")
        if(activeData == true){
            setSelected (oldData=>[...oldData,e.target.value])
        }else{
            setSelected(selected.filter(values=>values !==e.target.value))
        }
        
    }
    

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
                selected.map((a,i)=><div key={i}>{a}</div>)
            }
        </div>
    );
}
export default DynamicCheckBox;