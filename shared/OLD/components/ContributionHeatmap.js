import Plot from 'react-plotly.js';

function ContributionHeatmap({ contributionsData }) {
  const data = [{
    x: contributionsData.map(entry => entry.date), // array of dates
    y: contributionsData.map(entry => entry.dayOfWeek), // array of day names
    z: contributionsData.map(entry => entry.count), // array of contribution counts
    type: 'heatmap',
    hoverongaps: false,
    colorscale: 'Greens', // Use a green color scale, similar to GitHub
  }];

  const layout = {
    title: 'Contributions in the Last Year',
    xaxis: {
      type: 'date',
    },
    yaxis: {
      type: 'category',
      dtick: 1, // Show every day of the week
    },
    // Add more layout configurations
  };

  return (
    <Plot data={data} layout={layout} />
  );
}
