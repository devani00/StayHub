'use client';

import { useEffect } from "react";

import EmptyState from "./components/EmptyState";  

interface ErrorStateProps {
    error: Error
}

const ErrorState:React.FC<ErrorStateProps> = ({
    error
}) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return ( 
        <EmptyState 
            title="Error"
            subtitle="Somrthing Went Wrong!"
        />
     );
}
 
export default ErrorState;