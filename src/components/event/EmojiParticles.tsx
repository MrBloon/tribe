"use client";

import React, { useEffect, useState, useCallback } from 'react';
import styles from './ThemeParticles.module.scss';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine, Container } from '@tsparticles/engine';
import { loadFull } from "tsparticles";

interface EmojiParticlesProps {
  isPreview?: boolean;
}

const EmojiParticles: React.FC<EmojiParticlesProps> = ({ isPreview = false }) => {
  console.log("🚀 ~ isPreview:", isPreview)
  const [init, setInit] = useState(false);
  
  // Initialize tsparticles engine once
  useEffect(() => {
    console.log("Initializing emoji particles engine");
    if (!init) {
      initParticlesEngine(async (engine: Engine) => {
        console.log("Loading full tsparticles package");
        await loadFull(engine);
      }).then(() => {
        console.log("Emoji particles engine initialized");
        setInit(true);
      }).catch(error => {
        console.error("Error initializing emoji particles:", error);
      });
    }
  }, [init]);

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    console.log('Emoji particles loaded successfully', container);
  }, []);
  
  if (!init) {
    console.log("Emoji particles not initialized yet");
    return null;
  }

  console.log("Rendering emoji particles");
  
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
      particlesLoaded={particlesLoaded}
    />
  );
};

export default EmojiParticles; 