"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './DateTimeSelector.module.scss';

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
    <div className={styles.container}>
      {/* Start and End Time Section */}
      <div className={styles.timeSection}>
        {/* Start Time Row */}
        <div className={styles.timeRow}>
          <div className={styles.indicator}>
            <div className={styles.startDot}></div>
          </div>
          <span className={styles.label}>Début</span>
          <div className={styles.buttonGroup}>
            <Button
              variant="outline"
              size="sm"
              className={styles.dateButton}
            >
              {startDate}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={styles.timeButton}
            >
              {startTime}
            </Button>
          </div>
        </div>
        
        {/* End Time Row */}
        <div className={styles.timeRow}>
          <div className={styles.indicator}>
            <div className={styles.endDot}></div>
          </div>
          <span className={styles.label}>Fin</span>
          <div className={styles.buttonGroup}>
            <Button
              variant="outline"
              size="sm"
              className={styles.dateButton}
            >
              {endDate}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={styles.timeButton}
            >
              {endTime}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Time Zone Section */}
      <div className={styles.timeZoneSection}>
        <span className={styles.timeZoneLabel}>Fuseau horaire</span>
        <span className={styles.timeZoneValue}>{timeZone}</span>
      </div>
    </div>
  );
};

export default DateTimeSelector; 