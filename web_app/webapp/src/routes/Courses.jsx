import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import AddData from '../components/AddData'
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

  const  handleDelete = async (id)=>{

    try {
      const pkName = "CourseID"
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

    <h1>Courses Table</h1>
    <button><AddData fields={['CourseID','Course_Name', 'Course_Code', 'hours', 'credits', 'description', 'department_id']} endpoint="courses"/></button>

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
            <td> <button >Edit</button></td>
              <td> <button onClick={()=>handleDelete(course.CourseID)}>Delete</button></td>
            
          </tr>
        ))
        }{console.log(courses)}
      </tbody>
    </table>

    </>
  )
}

export default courses
