"use client";

import React, { useEffect } from 'react';
import styles from './ThemeParticles.module.scss';
import ConfettiParticles from './ConfettiParticles';
import EmojiParticles from './EmojiParticles';

interface ThemeParticlesProps {
  theme: 'Minimal' | 'Emoji' | 'Confetti';
  isPreview?: boolean;
}

const ThemeParticles: React.FC<ThemeParticlesProps> = ({ theme, isPreview = false }) => {  
  // Debug log to check when theme changes
  useEffect(() => {
    console.log(`Theme changed to: ${theme}, isPreview: ${isPreview}`);
  }, [theme, isPreview]);

  // Log emoji rendering
  if (theme === 'Emoji') {
    console.log("Rendering EmojiParticles component");
  }

  return (
    <div className={isPreview ? styles.previewParticlesContainer : styles.particlesContainer}>
      {theme === 'Confetti' && (
        <ConfettiParticles isPreview={isPreview} />
      )}
      
      {theme === 'Emoji' && (
        <EmojiParticles isPreview={isPreview} />
      )}
      
      {theme === 'Minimal' && (
        <div className={styles.minimalParticles}>
          {/* Minimal theme has no particles */}
        </div>
      )}
      
      {theme !== 'Minimal' && theme !== 'Confetti' && theme !== 'Emoji' && (
        <div className={styles.themeMessage}>
          {theme} theme particles will be implemented here
        </div>
      )}
    </div>
  );
};

export default ThemeParticles; 