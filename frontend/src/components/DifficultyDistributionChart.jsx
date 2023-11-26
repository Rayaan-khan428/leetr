import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Stat, StatLabel, StatGroup, useColorModeValue } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components if using Chart.js v3 or later
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const DifficultyDistributionChart = () => {
    const [distribution, setDistribution] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/problems/difficultyDistribution')
            .then(res => res.json())
            .then(data => setDistribution(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    const data = {
        labels: distribution.map(item => item.difficulty),
        datasets: [{
            data: distribution.map(item => item.count),
            backgroundColor: ['#68D391', '#4299E1', '#ED8936'], // Using Chakra UI color palette
            hoverBackgroundColor: ['#68D391', '#4299E1', '#ED8936']
        }]
    };

    const chartBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box height="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" bg={chartBgColor}>
            <StatGroup>
                <Stat>
                    <StatLabel textAlign="center" mb={2} fontSize="lg" fontWeight="bold">
                        Difficulty Distribution
                    </StatLabel>
                </Stat>
            </StatGroup>
            <Box height="300px" width="300px" mx="auto">
                <Pie data={data} options={{ maintainAspectRatio: false }} />
            </Box>
        </Box>
    );
}

export default DifficultyDistributionChart;
