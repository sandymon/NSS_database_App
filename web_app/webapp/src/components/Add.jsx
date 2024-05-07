import axios from 'axios';
import React, { useState } from 'react'

function add (){
  const [employee,setEmployee] = useState({
    emplid:0,
    name:"",
    ssn:"",
    phone:"",
    email:"",
    address:"",
    office_location:"",
    date_of_hire:"",
    role:""
  })

  const handleChange = (e) =>{
      setEmployee(prev=>({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async e=>{
    try{
      

      await axios.post("http://localhost:8100/employees", employee);
      alert("employee was added")
      
    } catch (err){
      alert(err)
    }
  }

  console.log(employee);

  return (
    <div className='add_employee'>
      <form onSubmit={handleSubmit} >
        <input type="number" placeholder='emplid' onChange={handleChange} name='emplid' required/>
        <input type="text" placeholder='name'onChange={handleChange} name='name' required/>
        <input type="text" placeholder='ssn'onChange={handleChange} name='ssn' required/>
        <input type="text" placeholder='phone'onChange={handleChange} name='phone'/>
        <input type="text" placeholder='email'onChange={handleChange} name='email'/>
        <input type="text" placeholder='address'onChange={handleChange} name='address'/>
        <input type="text" placeholder='Office Location' onChange={handleChange} name='office_location' />
        <input type="text" placeholder='Date of Hire' onChange={handleChange} name='date_of_hire' />
        <input type="text" placeholder='role'onChange={handleChange} name='role'/>
        <button type="submit">Add Employee</button>      
        
        
        </form>
      
    </div>
  )
}

export default add