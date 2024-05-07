import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function CourseSections() {
  const [courseSections,setCourseSections] = useState([])

  useEffect(()=>{
    const fetchAllCourseSections = async ()=>{
      try{
        const res = await axios.get("http://localhost:8100/course_sections")
        setCourseSections(res.data)
        console.log(courseSections)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCourseSections() 
  },[])

  return (
    <>
      <Navbar/>

    <h1>Course Sections Table</h1>
    <table className='course-sections-table'>
    <thead>
        <tr>
        <th>Section ID</th>
        <th>Course ID</th>
        <th>Semester Year</th>
        <th>Room Number</th>
        <th>Schedule</th>
        <th>Instructor Emplid</th>
        </tr>
    </thead>
    <tbody>
        {courseSections.map((section, index) => (
        <tr key={index}>
            <td>{section.sectionID}</td>
            <td>{section.CourseID}</td>
            <td>{section.semester_year}</td>
            <td>{section.room_Number}</td>
            <td>{section.schedule}</td>
            <td>{section.instructor_emplid}</td>
        </tr>
        ))}
        {console.log(courseSections)}
    </tbody>
    </table>
        
    </>
  )
}

export default CourseSections
