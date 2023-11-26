import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { useTheme } from '@mui/material/styles';

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(title, difficulty, notes, timeComplexity, spaceComplexity, attempts, success, lastAttempt, nextAttempt) {
  return { title, difficulty, notes, timeComplexity, spaceComplexity, attempts, success, lastAttempt, nextAttempt };
}

const columns = [
  { width: 200, label: 'Title', dataKey: 'title' },
  { width: 120, label: 'Difficulty', dataKey: 'difficulty', numeric: false },
  { width: 120, label: 'Notes', dataKey: 'notes', numeric: false },
  { width: 120, label: 'Time Complexity', dataKey: 'timeComplexity', numeric: false },
  { width: 120, label: 'Space Complexity', dataKey: 'spaceComplexity', numeric: false },
  { width: 120, label: 'Attempts', dataKey: 'attempts', numeric: true },
  { width: 120, label: 'Success', dataKey: 'success', numeric: true },
  { width: 120, label: 'Last Attempt', dataKey: 'lastAttempt', numeric: false },
  { width: 120, label: 'Next Attempt', dataKey: 'nextAttempt', numeric: false },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(...randomSelection, index);
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

function fixedHeaderContent(darkMode) {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: darkMode ? '#212121' : '#fff', // Conditional background color
            color: darkMode ? '#fff' : '#000', // Conditional text color
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(index, row, darkMode) {
  // Determine the background color based on the row index
  const backgroundColor = index % 2 === 0 ? 'rgb(26,26,26)' : 'rgb(42,42,42)';
  
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
          sx={{
            color: darkMode ? '#fff' : '#000', // Text color based on dark mode
            backgroundColor: darkMode ? backgroundColor : '#fff' // Background color based on row index and dark mode
          }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}


export { rows };

export default function ReactVirtualizedTable({ data, darkMode }) {
  // The useTheme hook must be called inside a component or another hook.
  const theme = useTheme();

  // Styles must be declared inside the component or a useMemo hook if they depend on props or state.
  const tableRowCellStyles = {
    backgroundColor: darkMode ? '#212121' : '#fff', // Use a darker color for visibility
    color: darkMode ? '#fff' : '#000',
  };

  // This is your Paper component that wraps the TableVirtuoso.
  return (
    <Paper sx={{
      height: 650, // Ensure this calculates to a valid CSS value
      width: '100%',
      bgcolor: darkMode ? 'grey.900' : 'grey.50',
      color: darkMode ? 'grey.50' : 'grey.900',
      overflow: 'auto', // Add scroll if content overflows
    }}>
      <TableVirtuoso
        data={data}
        components={{
          ...VirtuosoTableComponents,
          Table: (props) => (
            <Table {...props} style={tableRowCellStyles} />
          ),
          TableRow: ({ item: _item, ...props }) => (
            <TableRow {...props} style={tableRowCellStyles} />
          ),
          TableCell: (props) => (
            <TableCell {...props} style={tableRowCellStyles} />
          ),
        }}
        fixedHeaderContent={() => fixedHeaderContent(darkMode)}
        itemContent={(index, row) => rowContent(index, row, darkMode)}
      />
    </Paper>
  );
}