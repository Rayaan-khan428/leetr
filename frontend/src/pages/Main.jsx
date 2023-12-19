import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import DifficultyDistributionChart from '../components/DifficultyDistributionChart';
import LeetCodeStatsCard from '../components/LeetCodeStatsCard';
import ProblemsTable from '../components/ProblemsTable';

const LeetCodeStatsContainer = ({ username }) => {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching LeetCode stats:', error);
            }
            setIsLoading(false);
        };
  
        fetchData();
    }, [username]);
  
    if (isLoading) {
        return <Text>Loading...</Text>; // Use Text component for consistency
    }
  
    if (!stats) {
        return <Text>Error or no data</Text>; // Use Text component here as well
    }
  
    return <LeetCodeStatsCard stats={stats} />;
}

const Main = ({ username }) => {
    return ( 
        <>
            <Flex
                direction={["column", "row"]}
                wrap="wrap"
                justify="center"
                align="stretch"
                my={4} p={4}
            >
                <Box flex="1" minW={["100%", "360px"]} maxW={["100%", "49%"]} p={2}>
                    <DifficultyDistributionChart />
                </Box>

                <Box flex="1" minW={["100%", "360px"]} maxW={["100%", "49%"]} p={2} h="auto">
                    <LeetCodeStatsContainer username={username} />
                </Box>
            </Flex>

            <Box display="flex" justifyContent="center" my={4}>
                <ProblemsTable />
            </Box>
        </>
    );
};

export default Main;
