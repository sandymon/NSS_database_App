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
          </tr>
        ))}
      </tbody>
    </table>
        
    </>
  )
}

export default faculties
