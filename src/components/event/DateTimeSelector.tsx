"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface DateTimeSelectorProps {
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  timeZone?: string;
}

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  startDate = 'dim. 16 mars',
  startTime = '12:30',
  endDate = 'dim. 16 mars',
  endTime = '13:30',
  timeZone = 'GMT+01:00'
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Start and End Time Section */}
      <div className="flex flex-col">
        {/* Start Time Row */}
        <div className="flex items-center mb-5">
          <div className="mr-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
          <span className="text-sm text-gray-600 mr-2">Début</span>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="px-3 py-2 rounded-md bg-gray-50 text-gray-700 text-sm border-gray-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {startDate}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="px-3 py-2 rounded-md bg-gray-50 text-gray-700 text-sm min-w-16 text-center border-gray-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {startTime}
            </Button>
          </div>
        </div>
        
        {/* End Time Row */}
        <div className="flex items-center">
          <div className="mr-2">
            <div className="w-3 h-3 rounded-full border-2 border-gray-400"></div>
          </div>
          <span className="text-sm text-gray-600 mr-2">Fin</span>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="px-3 py-2 rounded-md bg-gray-50 text-gray-700 text-sm border-gray-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {endDate}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="px-3 py-2 rounded-md bg-gray-50 text-gray-700 text-sm min-w-16 text-center border-gray-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {endTime}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Time Zone */}
      <div className="flex items-center ml-5">
        <Button 
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-transparent p-0 h-auto"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500 mr-2"
          >
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="mr-1">{timeZone}</span>
          <span className="text-gray-400">Paris</span>
        </Button>
      </div>
    </div>
  );
};

export default DateTimeSelector; 