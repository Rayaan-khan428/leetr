import React, { useState } from 'react';
import PrimarySearchAppBar from "@/components/PrimarySearchAppBar";
import ReactVirtualizedTable, { rows } from "@/components/ReactVirtualizedTable";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter rows based on search query
  const getFilteredData = () => {
    return rows.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Filtered data based on the search query
  const filteredData = getFilteredData();

  return (
    <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-[rgb(26,26,26)] text-white' : 'bg-white text-black'}`}>
      <header className="w-full">
        <PrimarySearchAppBar 
          darkMode={darkMode}
          handleThemeChange={() => setDarkMode(prevMode => !prevMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </header>
      <main className="flex-grow p-14">
        <ReactVirtualizedTable data={filteredData} darkMode={darkMode} />
      </main>
    </div>
  );
}
