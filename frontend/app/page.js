'use client'
import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/PrimarySearchAppBar";
import ReactVirtualizedTable, { rows } from "@/components/ReactVirtualizedTable";

export default function Home() {
  // Set the initial darkMode state to true
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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
      <div className="flex-grow p-14">
        <ReactVirtualizedTable data={filteredData} darkMode={darkMode} />
      </div>
    </div>
  );
}
