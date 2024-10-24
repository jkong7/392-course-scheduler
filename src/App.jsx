import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppProvider from './context/AppContext';
import Banner from './components/Banner';
import TermSelector from './components/TermSelector';
import CourseList from './components/CourseList';

const queryClient = new QueryClient(); 

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppProvider> 
              <Banner/>
              <TermSelector/>
              <CourseList/>
            </AppProvider>
        </QueryClientProvider>
    ); 
};

export default App;
