"use client";

import React from 'react';
import styles from './EventThemeSelector.module.scss';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useTheme, ThemeType } from '@/lib/ThemeContext';
import ThemeParticles from './ThemeParticles';

const EventThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (value: string) => {
    setTheme(value as ThemeType);
  };


  return (
    <div className={styles.container}>
      <div className={styles.themeButton}>
        <span className={styles.label}>Thème</span>
        <Select value={theme} onValueChange={handleThemeChange}>
          <SelectTrigger className={styles.selectTrigger}>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Minimal">Minimal</SelectItem>
            <SelectItem value="Emoji">Emoji</SelectItem>
            <SelectItem value="Confetti">Confetti</SelectItem>
          </SelectContent>
        </Select>

        {/* Theme preview area */}
        <div className={styles.themePreview}>
          <ThemeParticles theme={theme} isPreview={true} />
        </div>
      </div>
    </div>
  );
};

export default EventThemeSelector; 