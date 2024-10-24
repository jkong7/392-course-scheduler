// ScheduleButton.js
import React, { useState } from 'react';
import SchedulePopUp from './SchedulePopUp';

const ScheduleButton = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)} className="course-plan-button">
        Course Plan
      </button>
      {active && (
        <div className="overlay" onClick={() => setActive(false)}>
          <SchedulePopUp/>
        </div>
      )}
    </div>
  );
};


export default ScheduleButton;

