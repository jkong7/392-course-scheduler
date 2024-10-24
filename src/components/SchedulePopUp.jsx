import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import '../styles/SchedulePopUp.css';

const SchedulePopUp = () => {
    const { classes, courses }= useContext(AppContext); 
    return (
      <div className="main">
        <div className="title">Your Course Plan</div>
        {Object.keys(classes).length === 0 ? (
          <p>No classes selected yet.</p>
        ) : (
          <ul>
            {Object.keys(classes).map((classKey) => (
              <li key={classKey} className="course-item">
                <strong>{courses[classKey].term} {courses[classKey].number}</strong>
                <div>{courses[classKey]?.title}</div>
                <span>{courses[classKey]?.meets}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default SchedulePopUp; 