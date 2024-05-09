import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import AddData from '../components/AddData'

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




  const  handleDelete = async (id)=>{

    try {
      const pkName = "emplid"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100/employees/${id}/${pkName}`);
          alert(res.statusText)

          window.location.reload()
      } else {
          // If user cancels, do nothing or provide feedback
          console.log("Deletion cancelled by user.");
      }
    
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Navbar/>
     <h1>Employees Table</h1>
      <button><AddData  fields={['emplid', 'name', 'ssn', 'phone', 'email', 'address', 'office_location', 'date_of_hire', 'role']} endpoint="employees"/></button>    
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
              <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(employee.emplid)}>Delete</button></td>
              {/* Add more table data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  )
}

export default employees
