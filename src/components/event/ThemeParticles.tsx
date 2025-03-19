"use client";

import React from 'react';
import styles from './ThemeParticles.module.scss';
import ConfettiParticles from './ConfettiParticles';
import EmojiParticles from './EmojiParticles';
import FireworkParticles from '@/components/event/FireworkParticles';

interface ThemeParticlesProps {
  theme: 'Minimal' | 'Emoji' | 'Confetti' | 'Firework';
  isPreview?: boolean;
}

const ThemeParticles: React.FC<ThemeParticlesProps> = ({ theme, isPreview = false }) => {  
  return (
    <div className={isPreview ? styles.previewParticlesContainer : styles.particlesContainer}>
      {theme === 'Confetti' && (
        <ConfettiParticles isPreview={isPreview} />
      )}
      
      {theme === 'Emoji' && (
        <EmojiParticles isPreview={isPreview} />
      )}
      
      {theme === 'Firework' && (
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
          <FireworkParticles isPreview={isPreview} />
        </div>
      )}
      
      {theme === 'Minimal' && (
        <div className={styles.minimalParticles}>
          {/* Minimal theme has no particles */}
        </div>
      )}
      
      {theme !== 'Minimal' && theme !== 'Confetti' && theme !== 'Emoji' && theme !== 'Firework' && (
        <div className={styles.themeMessage}>
          {theme} theme particles will be implemented here
        </div>
      )}
    </div>
  );
};

export default ThemeParticles; 