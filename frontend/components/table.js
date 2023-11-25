import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

// hard code data (remove)
const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

// datakeys (may have to change based on database)
function createData(title, difficulty, notes, timeComplexity, spaceComplexity, attempts, success, lastAttempt, nextAttempt) {
  return { title, difficulty, notes, timeComplexity, spaceComplexity, attempts, success, lastAttempt, nextAttempt };
}

// width can be changed based on length of items
const columns = [
  {
    width: 200,
    label: 'Title',
    dataKey: 'title',
  },
  {
    width: 120,
    label: 'Difficulty',
    dataKey: 'difficulty',
    numeric: false,
  },
  {
    width: 120,
    label: 'Notes',
    dataKey: 'notes',
    numeric: false,
  },
  {
    width: 120,
    label: 'Time Complexity',
    dataKey: 'timeComplexity',
    numeric: false,
  },
  {
    width: 120,
    label: 'Space Complexity',
    dataKey: 'spaceComplexity',
    numeric: false,
  },
  {
    width: 120,
    label: 'Attempts',
    dataKey: 'attempts',
    numeric: true,
  },
  {
    width: 120,
    label: 'Success',
    dataKey: 'success',
    numeric: true,
  },
  {
    width: 120,
    label: 'Last Attempt',
    dataKey: 'lastAttempt',
    numeric: false,
  },
  {
    width: 120,
    label: 'Next Attempt',
    dataKey: 'nextAttempt',
    numeric: false,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}