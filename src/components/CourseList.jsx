import React, { useContext } from 'react'; 
import '../styles/CourseList.css';
import { AppContext } from '../context/AppContext';

const CourseList = () => {
    const { classes, setClasses, selectedTerm, courses } = useContext(AppContext);

    const RemoveClass = (id) => {
        setClasses(prevClasses => {
            const { [id]: removed, ...remainingClasses } = prevClasses; 
            console.log('Class removed:', id, 'Updated classes:', remainingClasses); 
            return remainingClasses; 
        });
    }; 

    const AddClass = (id) => {
        setClasses(prevClasses => {
            console.log(`Adding class with id: ${id}`); 
            return {
                ...prevClasses, 
                [id]: true
            };
        });
    }; 

    return (
        <div className="course-grid">
            {Object.entries(courses).filter(([id, course]) => (course.term === selectedTerm))
                .map(([id, course]) => (
                    <div key={id} className={`course-card ${(id in classes) ? 'active' : ''}`} onClick={() => (id in classes) ? RemoveClass(id) : AddClass(id)}>
                        <strong className='course-name'>{course.term} CS {course.number}</strong>
                        <p className='course-title'>{course.title}</p>
                        <p className='course-meets'>{course.meets}</p>
                    </div>
                ))}
        </div>
    );
}

export default CourseList;
