import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function Graduates() {
  const [graduates,setGraduates] = useState([])

  useEffect(()=>{
    const fetchAllGraduates = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/graduates")
        setGraduates(res.data)
        console.log(graduates)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllGraduates() 
  },[])

  return (
    <>
    <Navbar/>

    <h1>Graduates Table</h1>
    <table className='graduates-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Graduation Year</th>
          <th>Degree Earned</th>
          <th>Honors</th>
          <th>GPA</th>
          <th>Current Job Title</th>
          <th>Employer ID</th>
        </tr>
      </thead>
      <tbody>
        {graduates.map((graduate, index) => (
          <tr key={index}>
            <td>{graduate.emplid}</td>
            <td>{graduate.Graduation_Year}</td>
            <td>{graduate.DegreeEarned}</td>
            <td>{graduate.honors}</td>
            <td>{graduate.GPA}</td>
            <td>{graduate.current_job_title}</td>
            <td>{graduate.employer_id}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default Graduates
