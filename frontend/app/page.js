'use client';
import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/PrimarySearchAppBar";
import ReactVirtualizedTable, { rows } from "@/components/ReactVirtualizedTable";

export default function Home() {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(true);

  // State for handling search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter data based on search query
  const getFilteredData = () => {
    return rows.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Filtered data for the table
  const filteredData = getFilteredData();

  return (
    <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-[rgb(26,26,26)] text-white' : 'bg-white text-black'}`}>
      {/* Header with Search Bar */}
      <header className="w-full">
        <PrimarySearchAppBar 
          darkMode={darkMode} 
          handleThemeChange={() => setDarkMode(prevMode => !prevMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </header>
    
      {/* Main Content with Virtualized Table */}
      <main className="flex-grow p-14">
        <ReactVirtualizedTable data={filteredData} darkMode={darkMode} />
      </main>
    </div>
  );
}
