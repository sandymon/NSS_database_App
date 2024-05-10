import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import AddData from '../components/AddData'
function Majors() {
  const [majors,setMajors] = useState([])

  useEffect(()=>{
    const fetchAllMajors = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/majors")
        setMajors(res.data)
        console.log(majors)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllMajors() 
  },[])

  const  handleDelete = async (id)=>{

    try {
      const pkName = "major_id"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100/courses/${id}/${pkName}`);
          alert(res.data.sqlMessage)

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

     <h1>Majors Table</h1>
     <button><AddData fields={['major_id','name', 'description', 'type_of_degree', 'total_credits_required', 'faculty_advisor_emplid']} endpoint="majors"/></button>

      <table className='majors-table'>
        <thead>
          <tr>
            <th>Major ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type of Degree</th>
            <th>Total Credits Required</th>
            <th>Faculty Advisor Emplid</th>
          </tr>
        </thead>
        <tbody>
          {majors.map((major, index) => (
            <tr key={index}>
              <td>{major.major_id}</td>
              <td>{major.name}</td>
              <td>{major.description}</td>
              <td>{major.type_of_degree}</td>
              <td>{major.total_credits_required}</td>
              <td>{major.faculty_advisor_emplid}</td>
              <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(major.major_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </>
  )
}

export default Majors
