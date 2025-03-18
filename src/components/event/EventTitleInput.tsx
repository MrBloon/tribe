"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import styles from './EventTitleInput.module.scss';

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
    <div className={styles.container}>
      <Input
        type="text"
        placeholder={placeholder}
        aria-label="Event title"
        className={styles.input}
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default EventTitleInput; 