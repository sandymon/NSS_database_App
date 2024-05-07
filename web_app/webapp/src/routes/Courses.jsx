import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import Navbar from './Navbar'

function courses() {
  const [courses,setCourses] = useState([])

  useEffect(()=>{
    const fetchAllCourses = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/courses")
        setCourses(res.data)
        
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCourses() 
   
  },[])

  return (
    <>
    <Navbar/>

    <h1>Courses Table</h1>

    <table className='courses-table'>
      <thead>
        <tr>
          <th>CourseID</th>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Hours</th>
          <th>Credits</th>
          <th>Description</th>
          <th>Department ID</th>
        </tr>
      </thead>
      <tbody>
        {
        courses.map((course, index) => (
          <tr key={index}>
            <td>{course.CourseID}</td>
            <td>{course.Course_Name}</td>
            <td>{course.Course_Code}</td>
            <td>{course.hours}</td>
            <td>{course.credits}</td>
            <td>{course.description}</td>
            <td>{course.department_id}</td>
          </tr>
        ))
        }{console.log(courses)}
      </tbody>
    </table>

    </>
  )
}

export default courses
