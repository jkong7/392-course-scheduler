import React from 'react'; 

const CourseList = ({ courses }) => (
    <ul>
        { Object.entries(courses).map(([id, course]) => (
            <li key={id}>
                <strong>{course.term} {course.number}</strong>: {course.title} <br/> 
                Meets: {course.meets}
            </li>
        ))}
    </ul>
); 
  
export default CourseList;
  