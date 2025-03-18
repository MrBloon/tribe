"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './LocationInput.module.scss';

interface LocationInputProps {
  placeholder?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({
  placeholder = 'Lieu hors ligne ou lien virtuel'
}) => {
  const handleLocationClick = () => {
    console.log('Location input clicked');
  };
  
  return (
    <div className={styles.container}>
      <Button
        variant="outline"
        className={styles.button}
        onClick={handleLocationClick}
      >
        <div className={styles.content}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M10 18.3333C13.3333 15 16.6667 12.0151 16.6667 8.33333C16.6667 4.65152 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65152 3.33334 8.33333C3.33334 12.0151 6.66668 15 10 18.3333Z" 
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

export default LocationInput; 