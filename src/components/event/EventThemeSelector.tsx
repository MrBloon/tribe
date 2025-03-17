"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EventThemeSelectorProps {
  currentTheme?: string;
}

const EventThemeSelector: React.FC<EventThemeSelectorProps> = ({
  currentTheme = 'Minimal'
}) => {
  const handleThemeClick = () => {
    console.log('Theme selector clicked');
  };
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">Thème</span>
        <span className="text-sm text-gray-500">{currentTheme}</span>
      </div>
      <Card className="border border-gray-200">
        <CardContent className="relative p-0">
          <Button
            variant="ghost"
            className="w-full h-32 bg-gray-50 rounded hover:bg-gray-100 hover:border-gray-300 flex items-center justify-center relative overflow-hidden"
            onClick={handleThemeClick}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path 
                d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H15M9 3V21M9 21H5C3.89543 21 3 20.1046 3 19V15M9 21H15M15 3H19C20.1046 3 21 3.89543 21 5V9M15 3V21M15 21H19C20.1046 21 21 20.1046 21 19V15" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-11 h-11 rounded bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center absolute -bottom-5 left-2 shadow-sm border-gray-200"
            onClick={() => console.log('Randomize theme clicked')}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path 
                d="M3.33334 5.83333H14.1667M14.1667 5.83333C14.1667 5.83333 16.6667 5.83333 16.6667 8.33333M14.1667 5.83333L11.6667 3.33333M14.1667 5.83333L11.6667 8.33333M3.33334 14.1667H14.1667M14.1667 14.1667C14.1667 14.1667 16.6667 14.1667 16.6667 11.6667M14.1667 14.1667L11.6667 16.6667M14.1667 14.1667L11.6667 11.6667" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventThemeSelector; 