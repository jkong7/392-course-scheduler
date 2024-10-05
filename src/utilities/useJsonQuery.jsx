import React from 'react'; 
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const fetchJson = async (url) => {
    const response = await fetch(url); 
    if (!response.ok) throw response; 
    return response.json(); 
}; 

const useJsonQuery = (url) => {
    const { data, isLoading, error } = useQuery({
        queryKey: [url], 
        queryFn: () => fetchJson(url)
    })
    return [ data, isLoading, error ]; 
}; 

export default useJsonQuery; 