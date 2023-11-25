'use client' // important to make sure that it is compiling before hitting server or something , idk but it saved me a bug problem

import ReactVirtualizedTable from "@/components/table"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReactVirtualizedTable/> 
    </main>
  )
}
