import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'


function faculties() {
  const [faculties,setfaculties] = useState([])

  useEffect(()=>{
    const fetchAllfaculties = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/Faculty")
        setfaculties(res.data)
        console.log(faculties)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllfaculties() 
  },[])
  const  handleDelete = async (id)=>{

    try {
      const pkName = "emplid"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100${window.location.pathname}/${id}/${pkName}`);
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

    <h1>Faculty Table</h1>
    <button><AddData fields={['emplid', 'rank', 'specialization', 'areas_of_research_interests', 'areas_of_teaching_interests']} endpoint="faculty"/></button>

    <table className='faculty-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Rank</th>
          <th>Specialization</th>
          <th>Areas of Research Interests</th>
          <th>Areas of Teaching Interests</th>
        </tr>
      </thead>
      <tbody>
        {faculties.map((member, index) => (
          <tr key={index}>
            <td>{member.emplid}</td>
            <td>{member.rank}</td>
            <td>{member.specialization}</td>
            <td>{member.areas_of_research_interests}</td>
            <td>{member.areas_of_teaching_interests}</td>
            <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(member.emplid)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
        
    </>
  )
}

export default faculties
