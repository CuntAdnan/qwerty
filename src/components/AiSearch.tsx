"use client"
import React from 'react';

const AiSearch = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-20 ">
      <div className="flex items-center gap-3 bg-white rounded-lg p-2 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 px-2">
          <span className="font-semibold">
            <span className="text-red-500">R</span>M
            <span className="text-red-500">ax</span>
          </span>
          <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">AI</span>
        </div>
        <input
          type="text"
          placeholder="Curious? Let AI Uncover the Answers!"
          className="flex-1 p-2 outline-none text-gray-600 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default AiSearch;