"use client";

import React from 'react';
import styles from './ThemeParticles.module.scss';

interface ThemeParticlesProps {
  theme: 'Minimal' | 'Emoji' | 'Confetti';
}

const ThemeParticles: React.FC<ThemeParticlesProps> = ({ theme }) => {
  // This is a placeholder component that will be implemented later
  // with tsparticles for different theme background effects
  
  return (
    <div className={styles.particlesContainer}>
      {/* tsparticles will be implemented here */}
      {theme === 'Confetti' && (
        <div className={styles.confettiParticles}>
          {/* Confetti particles will be implemented here */}
        </div>
      )}
      
      {theme === 'Emoji' && (
        <div className={styles.emojiParticles}>
          {/* Emoji particles will be implemented here */}
        </div>
      )}
      
      {theme === 'Minimal' && (
        <div className={styles.minimalParticles}>
          {/* Minimal particles (none) will be implemented here */}
        </div>
      )}
      
      {theme !== 'Minimal' && (
        <div className={styles.themeMessage}>
          {theme} theme particles will be implemented here
        </div>
      )}
    </div>
  );
};

export default ThemeParticles; 