import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'

function employers() {
  const [employers,setEmployers] = useState([])

  useEffect(()=>{
    const fetchAllemployers = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/Employers")
        setEmployers(res.data)
        console.log(employers)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllemployers() 
  },[])

  return (
    <>
    <Navbar/>

    <h1>Employers Table</h1>
    <button><AddData fields={['Employer_id','EmployerName', 'Industry', 'address']} endpoint="employers"/></button>

    <table className='employers-table'>
      <thead>
        <tr>
          <th>Employer ID</th>
          <th>Employer Name</th>
          <th>Industry</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {employers.map((employer, index) => (
          <tr key={index}>
            <td>{employer.employer_id}</td>
            <td>{employer.EmployerName}</td>
            <td>{employer.Industry}</td>
            <td>{employer.address}</td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default employers
