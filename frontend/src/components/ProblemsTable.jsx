import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Link, Container } from '@chakra-ui/react';
import axios from 'axios';

const ProblemsTable = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/problems')
      .then(response => setProblems(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <Container centerContent p={4}>
      <Box borderWidth="1px" borderRadius="lg" borderColor="black" width="190%" overflowX="auto" >
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Problem Name</Th>
              <Th>Difficulty</Th>
              <Th>Notes</Th>
              <Th>Time Complexity</Th>
              <Th>Space Complexity</Th>
              <Th>Attempts</Th>
              <Th>Success</Th>
              <Th>Last Attempted</Th>
              <Th>Next Scheduled</Th>
            </Tr>
          </Thead>
          <Tbody>
            {problems.map(problem => (
              <Tr key={problem._id}>
                <Td>
                  <Link href={problem.url} isExternal>
                    {problem.problemName}
                  </Link>
                </Td>
                <Td>{problem.difficulty}</Td>
                <Td maxW="200px" overflow="auto">{problem.notes}</Td>
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
    </Container>
  );
};

export default ProblemsTable;
