import React from 'react'; 

const TermSelector = ({ selectedTerm, setSelectedTerm }) => {
    return (
        <div>
            <button onClick={()=>setSelectedTerm('Fall')} className={(selectedTerm==='Fall') ? 'active' : ''}> Fall </button>
            <button onClick={()=>setSelectedTerm('Winter')} className={(selectedTerm==='Winter') ? 'active' : ''}> Winter </button>
            <button onClick={()=>setSelectedTerm('Spring')} className={(selectedTerm==='Spring') ? 'active' : ''}> Spring </button>
        </div>
    );
};  

export default TermSelector; 