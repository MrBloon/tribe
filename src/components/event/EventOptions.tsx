"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import styles from './EventOptions.module.scss';

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
    <div className={styles.container}>
      <h3 className={styles.title}>Options d&apos;événement</h3>
      
      {/* Tickets */}
      <div className={styles.optionRow}>
        <div className={styles.optionLabel}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.optionIcon}
          >
            <path 
              d="M2.5 7.49999L17.5 4.16666M2.5 7.49999V15C2.5 15.9205 3.24619 16.6667 4.16667 16.6667H15.8333C16.7538 16.6667 17.5 15.9205 17.5 15V4.16666M2.5 7.49999L8.33333 9.16666M17.5 4.16666V7.49999M8.33333 9.16666V16.6667M8.33333 9.16666L17.5 7.49999" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.optionText}>Billets</span>
        </div>
        <Button
          variant="ghost"
          className={styles.optionButton}
          onClick={handleTicketClick}
        >
          <span>{ticketType}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <path 
              d="M6 4L10 8L6 12" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      
      {/* Validation */}
      <div className={styles.optionRow}>
        <div className={styles.optionLabel}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.optionIcon}
          >
            <path 
              d="M6.66667 9.16667L9.16667 11.6667L13.3333 7.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className={styles.switchLabel}>Validation requise</span>
            <p className={styles.switchDescription}>
              Vous devrez approuver chaque participant
            </p>
          </div>
        </div>
        <div className={styles.switchContainer}>
          <Switch 
            checked={requiresValidation}
            onCheckedChange={handleValidationToggle}
          />
        </div>
      </div>
      
      {/* Capacity */}
      <div className={styles.optionRow}>
        <div className={styles.optionLabel}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.optionIcon}
          >
            <path 
              d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6.66667 9.16666V5.83333C6.66667 4.72826 7.10566 3.66846 7.8871 2.88702C8.66854 2.10559 9.72834 1.66666 10.8334 1.66666C11.9384 1.66666 12.9982 2.10559 13.7797 2.88702C14.5611 3.66846 15.0001 4.72826 15.0001 5.83333V9.16666" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.optionText}>Capacité</span>
        </div>
        <Button
          variant="ghost"
          className={styles.optionButton}
          onClick={handleCapacityClick}
        >
          <span>{capacity}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <path 
              d="M6 4L10 8L6 12" 
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