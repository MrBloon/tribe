"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface EventOptionsProps {
  ticketType?: string;
  requiresValidation?: boolean;
  capacity?: string;
}

const EventOptions: React.FC<EventOptionsProps> = ({
  ticketType = 'Gratuit',
  requiresValidation = false,
  capacity = 'Illimité'
}) => {
  const handleTicketClick = () => {
    console.log('Ticket options clicked');
  };
  
  const handleValidationToggle = () => {
    console.log('Validation toggle clicked');
  };
  
  const handleCapacityClick = () => {
    console.log('Capacity options clicked');
  };
  
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm text-gray-600">Options d&apos;événement</h3>
      
      {/* Tickets */}
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path 
              d="M2.5 7.49999L17.5 4.16666M2.5 7.49999V15C2.5 15.9205 3.24619 16.6667 4.16667 16.6667H15.8333C16.7538 16.6667 17.5 15.9205 17.5 15V4.16666M2.5 7.49999L8.33333 9.16666M17.5 4.16666V7.49999M8.33333 9.16666V16.6667M8.33333 9.16666L17.5 7.49999" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-600">Billets</span>
        </div>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-sm text-gray-700 p-0 h-auto hover:bg-transparent"
          onClick={handleTicketClick}
        >
          <span>{ticketType}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      
      {/* Validation Required */}
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path 
              d="M16.6667 5L7.5 14.1667L3.33337 10" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-600">Validation requise</span>
        </div>
        <Switch
          checked={requiresValidation}
          onCheckedChange={handleValidationToggle}
          className={`${
            requiresValidation ? 'bg-green-500' : 'bg-gray-200'
          }`}
        />
      </div>
      
      {/* Capacity */}
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path 
              d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M5 16.6667C6.38071 15.5427 8.19286 14.8333 10 14.8333C11.8071 14.8333 13.6193 15.5427 15 16.6667" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle 
              cx="10" 
              cy="10" 
              r="7.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
            />
          </svg>
          <span className="text-sm text-gray-600">Capacité</span>
        </div>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-sm text-gray-700 p-0 h-auto hover:bg-transparent"
          onClick={handleCapacityClick}
        >
          <span>{capacity}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default EventOptions; 