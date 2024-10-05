import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoursePage from './components/CoursePage'; 


const queryClient = new QueryClient(); 

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CoursePage/>
    </QueryClientProvider>
  ); 
};

export default App;
