"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CalendarSelectorProps {
  calendarName?: string;
}

const CalendarSelector: React.FC<CalendarSelectorProps> = ({
  calendarName = 'Calendrier personnel'
}) => {
  const handleCalendarClick = () => {
    console.log('Calendar selector clicked');
  };

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 py-2 rounded-md hover:bg-neutral-50 focus-visible:ring-0"
        onClick={handleCalendarClick}
      >
        <Avatar className="h-6 w-6 bg-blue-400 text-white">
          <AvatarFallback className="text-xs">C</AvatarFallback>
        </Avatar>
        <span className="text-sm text-gray-600">{calendarName}</span>
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

export default CalendarSelector; 