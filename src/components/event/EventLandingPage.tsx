"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventHeader from './EventHeader';
import styles from './EventLandingPage.module.scss';
import { 
  Image, 
  Plus, 
  ChevronDown, 
  Globe, 
  Clock, 
  MapPin, 
  FileText, 
  Ticket, 
  Check, 
  Users 
} from 'lucide-react';
import EventThemeSelector from './EventThemeSelector';
import { useTheme } from '@/lib/ThemeContext';
import ThemeParticles from './ThemeParticles';

const EventLandingPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={styles.container}>
      {/* Theme Particles Background */}
      <ThemeParticles theme={theme} />
      
      {/* Header */}
      <EventHeader />
      
      <div className={styles.content}>
        <div className={styles.gridContainer}>
          {/* Left Column - Preview Image */}
          <div className={styles.leftColumn}>
            {/* Preview Image */}
            <Card className={styles.previewImage}>
              <div className={styles.previewImageContainer}>
                <div className={styles.previewImageContent}>
                  <Image 
                    size={80}
                    className={styles.previewImageIcon}
                    strokeWidth={1.5}
                  />
                  <p className={styles.previewImageText}>Image de l&apos;événement</p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                className={styles.addImageButton}
              >
                <Plus size={24} className="text-white" strokeWidth={2} />
              </Button>
            </Card>
            
            {/* Theme Selector */}
            <EventThemeSelector />
          </div>
          
          {/* Right Column - Event Form */}
          <div className={styles.rightColumn}>
            <Card className={styles.formCard} style={{ paddingTop: 0, marginTop: 0 }}>
              <CardContent className={styles.formCardContent} style={{ paddingTop: 0, marginTop: 0 }}>
                {/* Calendar Selector and Visibility Toggle Row */}
                <div className={styles.calendarRow}>
                  <div className={styles.calendarSelector}>
                    <div className={styles.calendarAvatar}>
                      C
                    </div>
                    <span className={styles.calendarText}>Calendrier personnel</span>
                    <ChevronDown size={16} className={styles.calendarDropdownIcon} strokeWidth={2} />
                  </div>
                  
                  <div className={styles.visibilitySelector}>
                    <Globe size={16} className={styles.visibilityIcon} strokeWidth={1.5} />
                    <span className={styles.visibilityText}>Public</span>
                    <ChevronDown size={16} className={styles.calendarDropdownIcon} strokeWidth={2} />
                  </div>
                </div>
                
                {/* Event Title */}
                <div className={styles.eventTitleInput}>
                  <input
                    type="text"
                    placeholder="Nom de l'événement"
                    aria-label="Event title"
                    className={styles.eventTitleField}
                    onChange={e => console.log('Title changed:', e.target.value)}
                  />
                </div>
                
                {/* Date & Time Selector */}
                <div className={styles.dateTimeSection}>
                  {/* Start time */}
                  <div className={styles.dateTimeRow}>
                    <div className={styles.dateTimeDot}>
                      <div className={styles.startDot}></div>
                    </div>
                    <span className={styles.dateTimeLabel}>Début</span>
                    <div className={styles.dateTimeButtons}>
                      <Button variant="outline" className={styles.dateButton}>
                        dim. 16 mars
                      </Button>
                      <Button variant="outline" className={styles.timeButton}>
                        12:30
                      </Button>
                    </div>
                  </div>
                  
                  {/* End time */}
                  <div className={styles.dateTimeRow}>
                    <div className={styles.dateTimeDot}>
                      <div className={styles.endDot}></div>
                    </div>
                    <span className={styles.dateTimeLabel}>Fin</span>
                    <div className={styles.dateTimeButtons}>
                      <Button variant="outline" className={styles.dateButton}>
                        dim. 16 mars
                      </Button>
                      <Button variant="outline" className={styles.timeButton}>
                        13:30
                      </Button>
                    </div>
                  </div>
                  
                  {/* Timezone */}
                  <div className={styles.timezoneRow}>
                    <Clock size={16} className={styles.timezoneIcon} strokeWidth={1.5} />
                    <span className={styles.timezoneText}>GMT+01:00 Paris</span>
                  </div>
                </div>
                
                {/* Location Input */}
                <div className={styles.locationInput}>
                  <div className={styles.locationRow}>
                    <MapPin size={20} className={styles.locationIcon} strokeWidth={1.5} />
                    <span className={styles.locationText}>Ajouter le lieu de l&apos;événement</span>
                  </div>
                  <div className={styles.locationSubtext}>Lieu hors ligne ou lien virtuel</div>
                </div>
                
                {/* Description Input */}
                <div className={styles.descriptionInput}>
                  <div className={styles.descriptionRow}>
                    <FileText size={20} className={styles.descriptionIcon} strokeWidth={1.5} />
                    <span className={styles.descriptionText}>Ajouter une description</span>
                  </div>
                </div>
                
                {/* Event Options */}
                <div className={styles.optionsSection}>
                  <h3 className={styles.optionsTitle}>Options d&apos;événement</h3>
                  <div className={styles.optionsList}>
                    {/* Tickets */}
                    <div className={styles.optionRow}>
                      <div className={styles.optionLeft}>
                        <Ticket size={20} className={styles.optionIcon} strokeWidth={1.5} />
                        <span className={styles.optionLabel}>Billets</span>
                      </div>
                      <div className={styles.optionRight}>
                        <span>Gratuit</span>
                        <ChevronDown size={16} className="rotate-[-90deg]" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Validation */}
                    <div className={styles.optionRow}>
                      <div className={styles.optionLeft}>
                        <Check size={20} className={styles.optionIcon} strokeWidth={1.5} />
                        <span className={styles.optionLabel}>Validation requise</span>
                      </div>
                      <div className={styles.toggleContainer}>
                        {/* Toggle inactive */}
                        <div className={styles.toggleCircle}></div>
                      </div>
                    </div>
                    
                    {/* Capacity */}
                    <div className={styles.optionRow}>
                      <div className={styles.optionLeft}>
                        <Users size={20} className={styles.optionIcon} strokeWidth={1.5} />
                        <span className={styles.optionLabel}>Capacité</span>
                      </div>
                      <div className={styles.optionRight}>
                        <span>Illimité</span>
                        <ChevronDown size={16} className="rotate-[-90deg]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Create Event Button - Positioned below Options */}
                <div className={styles.createEventButton}>
                  <Button
                    className={styles.createEventBtn}
                    onClick={() => console.log('Create event button clicked')}
                  >
                    Créer un événement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLandingPage; 