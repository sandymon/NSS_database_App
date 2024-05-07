import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Add from './Add'

function employees() {
  const [employees,setEmployees] = useState([])

  useEffect(()=>{
    const fetchAllEmployees = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/employees")
        setEmployees(res.data)
        console.log(employees)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllEmployees() 
  },[])

  return (
    <>
      <Navbar/>
     <h1>Employees Table</h1>
     <table className='employees-table'>
        <thead>
          <tr>
            <th>Emplid</th>
            <th>Name</th>
            <th>SSN</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>office Location</th>
            <th>Date Hired</th>
            <th>Role</th>
           
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.emplid}</td>
              <td>{employee.name}</td>
              <td>{employee.ssn}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.office_location}</td>
              <td>{employee.date_of_hire}</td>
              <td>{employee.role}</td>
              {/* Add more table data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  )
}

export default employees
