"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import styles from './CalendarSelector.module.scss';

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
    <div className={styles.container}>
      <Button
        variant="ghost"
        className={styles.button}
        onClick={handleCalendarClick}
      >
        <Avatar className={styles.avatar}>
          <AvatarFallback className={styles.avatarFallback}>C</AvatarFallback>
        </Avatar>
        <span className={styles.text}>{calendarName}</span>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowIcon}
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