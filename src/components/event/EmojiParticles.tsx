"use client";

import React, { useEffect, useState } from 'react';
import styles from './ThemeParticles.module.scss';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadFull } from "tsparticles";

interface EmojiParticlesProps {
  isPreview?: boolean;
}

const EmojiParticles: React.FC<EmojiParticlesProps> = ({ isPreview = false }) => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine: Engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      }).catch(error => {
        console.error("Error initializing emoji particles:", error);
      });
    }
  }, [init]);
  
  return (
    <Particles
      id={isPreview ? "emoji-particles-preview" : "emoji-particles"}
      className={styles.emojiParticles}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          number: {
            value: isPreview ? 3 : 15
          },
          shape: {
            type: "char",
            options: {
              char: {
                value: "😀",
                font: "Arial",
                weight: "bold"
              }
            }
          },
          opacity: {
            value: 1 // Increased from 0.3 to 0.8 for better visibility
          },
          size: {
            value: { min: isPreview ? 15 : 20, max: isPreview ? 30 : 40 }
          },
          move: {
            enable: true,
            speed: isPreview ? 10 : 11.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 7
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default EmojiParticles; 