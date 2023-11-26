import React from 'react';
import Plot from 'react-plotly.js';

class StatusPieChart extends React.Component {
  render() {
    
    const { darkMode } = this.props;

    const data = [
      {
        values: [this.props.attempted, this.props.notAttempted, this.props.successful],
        labels: ['Attempted', 'Not Attempted', 'Successful'],
        type: 'pie',
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
        marker: {
          colors: ['orange', 'grey', 'green']
        },
        hoverinfo: 'label+percent'
      }
    ];

    const layout = {
        title: 'Problem Status Distribution',
        showlegend: true,
        autosize: true, // make the chart responsive
        margin: { l: 20, r: 20, t: 45, b: 20 }, // potentially reduced margins
        paper_bgcolor: this.props.darkMode ? 'rgb(26,26,26)' : 'white',
        plot_bgcolor: this.props.darkMode ? 'rgb(26,26,26)' : 'white',
        font: {
          color: this.props.darkMode ? 'white' : 'black', // sets the text color based on darkMode
        },
      };
      
  
      // Define a style object for the container
      const style = {
        width: '100%', // Full width of the container
        height: '100%', // Full height of the container
        // Adjust padding and other styling as needed
      };
  
      return <Plot data={data} layout={layout} style={style} />;
    }
  }
  
  export default StatusPieChart;