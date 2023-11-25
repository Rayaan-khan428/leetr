'use client'
import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/navbar";
import ReactVirtualizedTable, { rows } from "@/components/table";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = rows.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`flex flex-col h-screen w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="w-full">
        <PrimarySearchAppBar 
          darkMode={darkMode} 
          handleThemeChange={() => setDarkMode(!darkMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </header>
      <main className="flex-grow p-4 overflow-hidden">
        <ReactVirtualizedTable data={filteredData} darkMode={darkMode} />
      </main>
    </div>
  );
}
