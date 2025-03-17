"use client";

import React from 'react';
import { Input } from "@/components/ui/input";

interface EventTitleInputProps {
  placeholder?: string;
}

const EventTitleInput: React.FC<EventTitleInputProps> = ({
  placeholder = "Nom de l'événement"
}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Title changed:', e.target.value);
  };
  
  return (
    <div className="w-full">
      <Input
        type="text"
        placeholder={placeholder}
        aria-label="Event title"
        className="w-full text-4xl font-light text-gray-500 bg-transparent border-none shadow-none placeholder:text-gray-400 focus-visible:ring-0 px-0"
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default EventTitleInput; 