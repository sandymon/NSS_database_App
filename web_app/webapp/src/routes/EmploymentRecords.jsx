import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import AddData from '../components/AddData'

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

  const  handleDelete = async (id)=>{

    try {
      const pkName = "record_id"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100${window.location.pathname}/${id}/${pkName}`);
          alert(res.data.message)

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

    <h1>Employment Records Table</h1>
    <button><AddData fields={['record_id','emplid','employer_id','start_date', 'end_date', 'job_title_or_position']} endpoint="employment_records"/></button>

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
            <td> <button >Edit</button></td>
            <td> <button onClick={()=>handleDelete(record.record_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default EmployementRecords
