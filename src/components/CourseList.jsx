import React from 'react'; 
import '../styles/courseList.css';


const CourseList = ({ courses, selectedTerm }) => (
    <div className="course-grid">
      {Object.entries(courses).filter(([id, course]) => (course.term===selectedTerm))
      .map(([id, course]) => (
        <div key={id} className="course-card">
          <strong className='course-name'>{course.term} CS {course.number}</strong>
          <p className='course-title'>{course.title}</p>
          <p className='course-meets'>{course.meets}</p>
        </div>
      ))}
    </div>
  );
  
  
export default CourseList;
  