import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function Students() {
  const [students,setStudents] = useState([])

  useEffect(()=>{
    const fetchAllStudents = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/students")
        setStudents(res.data)
        
      }catch(err){
        console.log(err)
      }
    }
   fetchAllStudents() 
   console.log(students)
  },[])

  return (
    <>
    <Navbar/>

    <h1>Students Table</h1>
    <table className='students-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>First Name</th>
          <th>Middle Initial</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Major</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.emplid}</td>
            <td>{student.first_name}</td>
            <td>{student.middle_initial}</td>
            <td>{student.last_name}</td>
            <td>{student.date_of_birth}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.address}</td>
            <td>{student.Major}</td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default Students