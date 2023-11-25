'use client'
import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/navbar";
import ReactVirtualizedTable, { rows } from "@/components/table";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query in the "title" column
  const filteredData = rows.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="w-full">
        <PrimarySearchAppBar 
          className="w-full" 
          darkMode={darkMode} 
          handleThemeChange={() => setDarkMode(!darkMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </header>
      <div className="flex-grow p-4">
      <ReactVirtualizedTable data={filteredData} />
      </div>
    </div>
  );
}
