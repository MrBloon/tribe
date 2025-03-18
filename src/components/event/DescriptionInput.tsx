"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './DescriptionInput.module.scss';

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
    <div className={styles.container}>
      <Button
        variant="outline"
        className={styles.button}
        onClick={handleDescriptionClick}
      >
        <div className={styles.content}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path 
              d="M16.6667 9.16667H3.33337M3.33337 9.16667L7.5 5M3.33337 9.16667L7.5 13.3333" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.text}>{placeholder}</span>
        </div>
      </Button>
    </div>
  );
};

export default DescriptionInput; 