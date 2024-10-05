import React, { useState } from 'react'; 
import CourseList from './CourseList'
import TermSelector from './TermSelector'

const TermPage = ({ courses }) => {
    const [selectedTerm, setSelectedTerm]=useState('Fall'); 

    return (
        <div>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseList courses={courses} selectedTerm={selectedTerm}/>
        </div>
    );
};

export default TermPage; 

