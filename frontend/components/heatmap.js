'use client'
import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/navbar";
import ReactVirtualizedTable, { rows } from "@/components/table";
import StatusPieChart from "@/components/pieChart"; // Ensure this path is correct
import ContributionHeatmap from "@/components/contributionHeatmap"; // Import the contribution heatmap component

export default function Home() {
  // Set the initial darkMode state to true
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for the StatusPieChart
  const [attempted, setAttempted] = useState(50);
  const [notAttempted, setNotAttempted] = useState(20);
  const [successful, setSuccessful] = useState(30);

  // Placeholder for dummy data for the ContributionHeatmap
  const contributionsData = []; // You will need to replace this with actual data

  const filteredData = rows.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-[rgb(26,26,26)] text-white' : 'bg-white text-black'}`}>
      <header className="w-full">
        <PrimarySearchAppBar 
          darkMode={darkMode} 
          handleThemeChange={() => setDarkMode(!darkMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </header>
      <main className="flex-grow p-14">
        {/* ContributionHeatmap component */}
        <ContributionHeatmap data={contributionsData} darkMode={darkMode} />

        {/* StatusPieChart component wrapped in a div for styling */}
        <div className="mb-8 pie-chart-container" style={{ width: '30%', height: 'auto' }}>
          <StatusPieChart attempted={attempted} notAttempted={notAttempted} successful={successful} darkMode={darkMode} />
        </div>

        {/* Your existing table */}
        <ReactVirtualizedTable data={filteredData} darkMode={darkMode} />
      </main>
    </div>
  );
}