"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './VisibilitySelector.module.scss';

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
    <div className={styles.container}>
      <Button
        variant="ghost"
        className={styles.button}
        onClick={handleVisibilityClick}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 3V13" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className={styles.text}>
          {isPublic ? 'Public' : 'Privé'}
        </span>
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

export default VisibilitySelector; 