import React, { createContext, useContext, useState } from 'react';
import useJsonQuery from '../utilities/useJsonQuery'; // Import your custom hook

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [classes, setClasses] = useState({});
    const [selectedTerm, setSelectedTerm] = useState('Fall');

    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error loading courses: {error.message}</h1>;

    const courses = data.courses 
    const title = data.title

    const useAppContext = () => {
        return useContext(AppContext); 
    }

    return (
        <AppContext.Provider value={{ title, courses, classes, setClasses, selectedTerm, setSelectedTerm }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
