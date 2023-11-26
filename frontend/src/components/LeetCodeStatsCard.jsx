import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Text } from '@chakra-ui/react';


const LeetCodeStatsCard = ({ stats }) => {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Box p={4} align="center">
        
        <Text textAlign="center" mb={2} fontSize="lg" fontWeight="bold">
          LeetCode Stats
        </Text>

      </Box>

      <StatGroup>
        <Stat>
          <StatLabel>Total Solved</StatLabel>
          <StatNumber>{stats.totalSolved} / {stats.totalQuestions}</StatNumber>
          <StatHelpText>Problems</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Acceptance Rate</StatLabel>
          <StatNumber>{stats.acceptanceRate}%</StatNumber>
          <StatHelpText>Rate</StatHelpText>
        </Stat>
      </StatGroup>

      <StatGroup>
        <Stat>
          <StatLabel>Ranking</StatLabel>
          <StatNumber>#{stats.ranking}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Contribution Points</StatLabel>
          <StatNumber>{stats.contributionPoints}</StatNumber>
        </Stat>
      </StatGroup>

      <StatGroup>
        <Stat>
          <StatLabel>Reputation</StatLabel>
          <StatNumber>{stats.reputation}</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default LeetCodeStatsCard;
