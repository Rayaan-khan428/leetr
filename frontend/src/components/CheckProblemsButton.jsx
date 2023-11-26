import React from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

function CheckProblemsButton() {
    const handleCheck = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/problems/checkNextScheduled');
            alert(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to check problems');
        }
    };

    return (
        <Button onClick={handleCheck}>
            Check Problems
        </Button>
    );
}

export default CheckProblemsButton;
