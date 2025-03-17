"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface VisibilitySelectorProps {
  isPublic?: boolean;
}

const VisibilitySelector: React.FC<VisibilitySelectorProps> = ({
  isPublic = true
}) => {
  const handleVisibilityClick = () => {
    console.log('Visibility selector clicked');
  };

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 py-2 rounded-md hover:bg-neutral-50 focus-visible:ring-0"
        onClick={handleVisibilityClick}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-600"
        >
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 3V13" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-sm text-gray-600">
          {isPublic ? 'Public' : 'Privé'}
        </span>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path 
            d="M4 6L8 10L12 6" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default VisibilitySelector; 