import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
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

  const  handleDelete = async (id)=>{

    try {
      const pkName = "emplid"
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

    <h1>Graduates Table</h1>
    <button><AddData fields={['emplid','Graduation_Year', 'DegreeEarned', 'honors', 'GPA', 'current_job_title', 'employer_id']} endpoint="graduates"/></button>

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
            <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(graduate.emplid)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default Graduates
