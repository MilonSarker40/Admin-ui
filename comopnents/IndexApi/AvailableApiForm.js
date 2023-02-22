import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';

const IndexApiForm = () => {

  const [selected,setSelected] =useState([])
  const [inputApi,setInputApi] =useState()

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

   const handleChnageApi = (e) => {
    setInputApi(e.target.value)
   }

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


    const [opt, setOpt] = useState([]);

    const optd =[
      {
        id:1,
        name:'Api 1',
      },
      {
        id:2,
        name:'Api 2',
      },
      {
        id:3,
        name:'Api 3',
      }
    ]
    useEffect(()=>{
      setOpt(optd)
    },[])

    const options =opt.map((value)=><option value={value.name}>{value.name}</option>)

    const handleSaveData = () => {
      localStorage.setItem('apiData',JSON.stringify( {cities: selected, api: inputApi}))
    }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleChnageApi}>
                        <option>Select Status</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
            </Row>
            <div>
              {
                  api.map((fruitItem,i)=>
                  <div key={i}>
                      <input id={i} type="checkbox" value={fruitItem.name} onChange={(e)=>handleChnage(e,i)} /><span>{fruitItem.name}</span>
                  </div>
                  )
              }
              <br/>
              
            </div>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="button" onClick={handleSaveData}>
                    Save
                </Button>
                <Button variant="primary" type="submit">
                    Clear
                </Button>
            </div>
            </Form>
      </div>
    </>
  )
}

export default IndexApiForm
