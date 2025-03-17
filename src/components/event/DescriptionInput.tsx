"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface DescriptionInputProps {
  placeholder?: string;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  placeholder = 'Ajouter une description'
}) => {
  const handleDescriptionClick = () => {
    console.log('Description input clicked');
  };
  
  return (
    <div className="flex items-center w-full">
      <Button
        variant="outline"
        className="flex items-center w-full p-3 h-auto rounded border border-dashed border-gray-200 hover:border-gray-300 hover:bg-transparent justify-start font-normal"
        onClick={handleDescriptionClick}
      >
        <div className="flex items-center space-x-2 text-gray-400">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path 
              d="M16.6667 9.16667H3.33337M3.33337 9.16667L7.5 5M3.33337 9.16667L7.5 13.3333" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm">{placeholder}</span>
        </div>
      </Button>
    </div>
  );
};

export default DescriptionInput; 