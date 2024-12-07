import React from 'react';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="sticky z-10 top-0 flex justify-between bg-slate-100 shadow-md border-b-2 px-12 py-4 font-mono border-b-gray-300 drop-shadow-md">
        <a href="/"><h1 className="font-bold text-4xl uppercase bg-gradient-to-br from-cyan-500 from-20% via-teal-500 via-60% to-indigo-500 inline-block text-transparent bg-clip-text">Blog Page</h1></a>
      <SearchBar />
    </header>
  );
}
