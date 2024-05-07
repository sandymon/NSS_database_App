import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function EmployementRecords() {
  const [employmentRecords,setEmploymentRecords] = useState([])

  useEffect(()=>{
    const fetchAllEmploymentRecords = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/employment_records")
        setEmploymentRecords(res.data)
        console.log(employmentRecords)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllEmploymentRecords() 
  },[])

  const handleAddEmployee = ()=>{}

  return (
    <>
    <Navbar/>

    <h1>Employment Records Table</h1>
    
    <table className='employment-records-table'>
      <thead>
        <tr>
          <th>Record ID</th>
          <th>Emplid</th>
          <th>Employer ID</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Job Title or Position</th>
        </tr>
      </thead>
      <tbody>
        {employmentRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.record_id}</td>
            <td>{record.emplid}</td>
            <td>{record.employer_id}</td>
            <td>{record.start_date}</td>
            <td>{record.end_date}</td>
            <td>{record.job_title_or_position}</td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default EmployementRecords