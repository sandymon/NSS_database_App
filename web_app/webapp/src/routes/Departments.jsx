import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function departments() {
  const [departments,setdepartments] = useState([])

  useEffect(()=>{
    const fetchAlldepartments = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/departments")
        setdepartments(res.data)
        console.log(departments)
      }catch(err){
        console.log(err)
      }
    }
   fetchAlldepartments() 
  },[])

  return (
    <>
    <Navbar/>

     <h1>Departments Table</h1>
<table className='departments-table'>
  <thead>
    <tr>
      <th>Department ID</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Office Location</th>
      <th>Chairperson Emplid</th>
      <th>Chairperson Start Date</th>
      <th>Secretary Emplid</th>
      <th>Secretary Start Date</th>
    </tr>
  </thead>
  <tbody>
    {departments.map((department, index) => (
      <tr key={index}>
        <td>{department.department_id}</td>
        <td>{department.name}</td>
        <td>{department.phone}</td>
        <td>{department.office_location}</td>
        <td>{department.chairperson_emplid}</td>
        <td>{department.chairperson_start_date}</td>
        <td>{department.secretary_emplid}</td>
        <td>{department.secretary_start_date}</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default departments
