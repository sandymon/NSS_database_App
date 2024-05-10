import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import AddData from '../components/AddData'

function CheatingIncidents() {
  const [cheatingIncidents,setCheatingIncidents] = useState([])

  useEffect(()=>{
    const fetchAllCheatingIncidents = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/cheating_incidents")
        setCheatingIncidents(res.data)
        console.log(cheatingIncidents)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCheatingIncidents() 
  },[])


  const  handleDelete = async (id)=>{

    try {
      const pkName = "incident_id"
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

    <h1>Cheating Incidents Table</h1>
    <button><AddData fields={['incident_id','emplid','sectionID','date', 'description', 'resolution']} endpoint="cheating_incidents"/></button>

    <table className='cheating-incidents-table'>
      <thead>
        <tr>
          <th>Incident ID</th>
          <th>Emplid</th>
          <th>Section ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Resolution</th>
        </tr>
      </thead>
      <tbody>
        {cheatingIncidents.map((incident, index) => (
          <tr key={index}>
            <td>{incident.incident_id}</td>
            <td>{incident.emplid}</td>
            <td>{incident.sectionID}</td>
            <td>{incident.date}</td>
            <td>{incident.description}</td>
            <td>{incident.resolution}</td>
            <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(incident.incident_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default CheatingIncidents
