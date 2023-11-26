'use client';
import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from "/components/PrimarySearchAppBar";
import ReactVirtualizedTable, { rows } from "/components/ReactVirtualizedTable";
import axios from 'axios'

export default function Home() {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(true);

  // State for handling search query
  const [searchQuery, setSearchQuery] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/problems')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
        <ReactVirtualizedTable data={data} darkMode={darkMode} />
      </main>
    </div>
  );
}
