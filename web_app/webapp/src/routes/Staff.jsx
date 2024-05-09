import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'


function Staff() {
  const [staff,setStaff] = useState([])

  useEffect(()=>{
    const fetchAllStaff = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/Staff")
        setStaff(res.data)
        console.log(staff)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllStaff() 
  },[])

  return (
    <>
    <Navbar/>

    <h1>Staff Table</h1>
    <button><AddData fields={['emplid', 'position']} endpoint="staff"/></button>

    <table className='staff-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((member, index) => (
          <tr key={index}>
            <td>{member.emplid}</td>
            <td>{member.position}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default Staff
