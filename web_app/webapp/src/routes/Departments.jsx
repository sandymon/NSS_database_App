import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'


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



  const  handleDelete = async (id)=>{

    try {
      const pkName = "department_id"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100/departments/${id}/${pkName}`);
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

     <h1>Departments Table</h1>
     <button><AddData fields={['department_id','name', 'phone', 'office_location', 'chairperson_emplid', 'chairperson_start_date', 'secretary_emplid', 'secretary_start_date']} endpoint="departments"/></button>

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
          <td>{department.secretary_start_date}</td> <td> <button >Edit</button></td>
          <td> <button onClick={()=>handleDelete(department.department_id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>

    </>
  )
}

export default departments
