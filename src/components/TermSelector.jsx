import React, { useContext } from 'react'; 
import { AppContext } from '../context/AppContext'; 

import ScheduleButton from './ScheduleButton';

const TermSelector = () => {
    const { selectedTerm, setSelectedTerm } = useContext(AppContext); 

    return (
        <div className="term-selector">
            <div className="term-buttons">
                <button onClick={() => setSelectedTerm('Fall')} className={selectedTerm === 'Fall' ? 'active' : ''}> Fall </button>
                <button onClick={() => setSelectedTerm('Winter')} className={selectedTerm === 'Winter' ? 'active' : ''}> Winter </button>
                <button onClick={() => setSelectedTerm('Spring')} className={selectedTerm === 'Spring' ? 'active' : ''}> Spring </button>
            </div>
            <ScheduleButton/>
        </div>
    );
};  

export default TermSelector;
