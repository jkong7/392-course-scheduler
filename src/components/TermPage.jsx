import React, { useState } from 'react'; 
import CourseList from './courseList';
import ScheduleButton from './ScheduleButton'; 
import TermSelector from './TermSelector'

const TermPage = ({ courses }) => {
    const [selectedTerm, setSelectedTerm]=useState('Fall'); 
    const [classes, setClasses] = useState({}); 

    return (
        <div>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseList courses={courses} selectedTerm={selectedTerm} classes={classes} setClasses={setClasses}/>
            <ScheduleButton classes={classes} courses ={courses}/>
        </div>
    );
};

export default TermPage; 

