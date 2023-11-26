import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Link, Badge } from '@chakra-ui/react';
import axios from 'axios';

const ProblemsTable = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/problems')
      .then(response => setProblems(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const getBadgeStyle = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return { bg: '#90ee90', color: 'black' }; // Light green
      case 'Medium':
        return { bg: '#F9C31C', color: 'black' }; // Orange
      case 'Hard':
        return { bg: '#ff6347', color: 'black' }; // Tomato red
      default:
        return { bg: '#d3d3d3', color: 'black' }; // Light gray
    }
  };

  return (
    <Box overflowX="auto" p={8}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontWeight="bold">Problem Name</Th>
            <Th fontWeight="bold">Difficulty</Th>
            <Th fontWeight="bold">Notes</Th>
            <Th fontWeight="bold">Time Complexity</Th>
            <Th fontWeight="bold">Space Complexity</Th>
            <Th fontWeight="bold">Attempts</Th>
            <Th fontWeight="bold">Success</Th>
            <Th fontWeight="bold">Last Attempted</Th>
            <Th fontWeight="bold">Next Scheduled</Th>
          </Tr>
        </Thead>
        <Tbody>
          {problems.map(problem => (
            <Tr key={problem._id}>
              <Td>
                <Link href={problem.url} isExternal>{problem.problemName}</Link>
              </Td>
              <Td>
                <Badge 
                  borderRadius="sm" // Slightly rounded corners
                  {...getBadgeStyle(problem.difficulty)}
                >
                  {problem.difficulty}
                </Badge>

              </Td>
              <Td>{problem.notes}</Td>
              <Td>{problem.timeComplexity}</Td>
              <Td>{problem.spaceComplexity}</Td>
              <Td>{problem.attempts}</Td>
              <Td>{problem.success}</Td>
              <Td>{new Date(problem.lastAttempted).toLocaleDateString()}</Td>
              <Td>{new Date(problem.nextScheduled).toLocaleDateString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProblemsTable;
