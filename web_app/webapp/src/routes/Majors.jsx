import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

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

  return (
    <>
      <Navbar/>

     <h1>Majors Table</h1>
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
            </tr>
          ))}
        </tbody>
      </table>

    
    </>
  )
}

export default Majors
