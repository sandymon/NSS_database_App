import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import AddData from '../components/AddData'

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

  const  handleDelete = async (id)=>{

    try {
      const pkName = "sectionID"
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
    
      if (confirmed) {
          // If user confirms, proceed with deletion
          const res = await axios.delete(`http://localhost:8100/course_sections/${id}/${pkName}`);
          alert(res.statusText)

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

    <h1>Course Sections Table</h1>
    <button><AddData fields={['sectionID', 'CourseID', 'semester_year', 'room_Number', 'schedule', 'instructor_emplid']} endpoint="course_sections"/></button>
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
            <td> <button >Edit</button></td>
            <td> <button onClick={()=>handleDelete(section.sectionID)}>Delete</button></td>
        </tr>
        ))}
    </tbody>
    </table>
        
    </>
  )
}

export default CourseSections
