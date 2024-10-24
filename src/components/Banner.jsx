import React, { useContext } from 'react'; 
import { AppContext } from '../context/AppContext';

const Banner = () => {
    const { title } = useContext(AppContext); 
    return (
        <h1>{title}</h1>
    )
}

export default Banner; 