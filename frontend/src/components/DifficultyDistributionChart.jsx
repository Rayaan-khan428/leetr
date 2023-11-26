import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
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
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    return (
        <div>
            <h2>Difficulty Distribution</h2>
            <Pie data={data} />
        </div>
    );
}

export default DifficultyDistributionChart;
