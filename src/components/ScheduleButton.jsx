import React, { useState } from 'react';
import '../styles/SchedulePopUp.css';

const ScheduleButton = ({ classes, courses }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={()=>setActive(!active)} className="course-plan-button">
        Course Plan
      </button>
      {active && <SchedulePopUp classes={classes} courses={courses} />}
    </div>
  );
};

const SchedulePopUp = ({ classes, courses }) => {
  return (
    <div className="main active">
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

export default ScheduleButton; 
