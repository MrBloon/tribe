"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import styles from './EventHeader.module.scss';
import { 
  Star, 
  Calendar, 
  CalendarDays, 
  Compass, 
  Search, 
  Bell 
} from 'lucide-react';

interface EventHeaderProps {
  currentTime?: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ 
  currentTime = '14:23 UTC+1'
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Button 
          variant="ghost" 
          size="icon" 
          className={styles.iconButton}
          onClick={() => console.log('Home clicked')}
        >
          <Star size={24} strokeWidth={2} />
        </Button>
        
        <nav className={styles.nav}>
          <Button
            variant="ghost"
            className={styles.navButton}
            onClick={() => console.log('Events clicked')}
          >
            <Calendar size={20} strokeWidth={2} />
            <span>Événements</span>
          </Button>
          
          <Button
            variant="ghost"
            className={styles.navButton}
            onClick={() => console.log('Calendars clicked')}
          >
            <CalendarDays size={20} strokeWidth={2} />
            <span>Calendriers</span>
          </Button>
          
          <Button
            variant="ghost"
            className={styles.navButton}
            onClick={() => console.log('Discover clicked')}
          >
            <Compass size={20} strokeWidth={2} />
            <span>Découvrir</span>
          </Button>
        </nav>
      </div>
      
      <div className={styles.rightSection}>
        <span className={styles.timeDisplay}>{currentTime}</span>
        <span className={styles.createEventText}>Créer un événement</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className={styles.iconButton}
          onClick={() => console.log('Search clicked')}
        >
          <Search size={20} strokeWidth={2} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className={styles.iconButton}
          onClick={() => console.log('Notifications clicked')}
        >
          <Bell size={20} strokeWidth={2} />
        </Button>
        <Avatar className={styles.avatar}>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default EventHeader; 