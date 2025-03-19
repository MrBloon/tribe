"use client";

import React, { useEffect, useState } from 'react';
import styles from './ThemeParticles.module.scss';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadFireworksPreset } from '@tsparticles/preset-fireworks';

interface FireworkParticlesProps {
  isPreview?: boolean;
}

const FireworkParticles: React.FC<FireworkParticlesProps> = ({ isPreview = false }) => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine: Engine) => {
        // Load the fireworks preset
        await loadFireworksPreset(engine);
      }).then(() => {
        setInit(true);
      }).catch(error => {
        console.error("Error initializing firework particles:", error);
      });
    }
  }, [init]);

  return (
    <Particles
      id={isPreview ? "firework-particles-preview" : "firework-particles"}
      className={styles.fireworkParticles}
      options={{
        preset: "fireworks",
        fullScreen: false,
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 60, // Reduced from 120 to improve performance
        // Disable sound to prevent AudioContext errors
        sound: {
          enable: false
        },
        particles: {
          number: {
            value: isPreview ? 15 : 25 // Reduced particle count
          },
          color: {
            value: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ffffff"]
          },
          opacity: {
            value: { min: 0.7, max: 1 },
            animation: {
              enable: true,
              speed: 1, // Reduced animation speed
              sync: true // Set to true for better performance
            }
          },
          size: {
            value: { min: isPreview ? 2 : 3, max: isPreview ? 5 : 8 }, // Reduced max size
            animation: {
              enable: true,
              speed: 2, // Reduced animation speed
              sync: true // Set to true for better performance
            }
          },
          move: {
            speed: isPreview ? 4 : 8, // Reduced move speed
            outModes: {
              default: "destroy"
            },
            gravity: {
              enable: true,
              acceleration: 9.8,
            },
            trail: {
              enable: true,
              length: 3 // Reduced trail length
            }
          },
          life: {
            duration: {
              value: { min: 1, max: 2 } // Shortened lifespan
            },
            count: 1
          }
        },
        emitters: [
          {
            // Left side
            life: {
              count: 0,
              duration: 0.1,
              delay: 0
            },
            rate: {
              delay: isPreview ? 2 : 1.2, // Increased delay between emissions
              quantity: isPreview ? 1 : 2 // Reduced quantity
            },
            position: {
              x: 20,
              y: 100
            }
          },
          {
            // Center
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.6
            },
            rate: {
              delay: isPreview ? 2.2 : 1.4, // Increased delay
              quantity: isPreview ? 1 : 2 // Reduced quantity
            },
            position: {
              x: 50,
              y: 100
            }
          },
          {
            // Right side
            life: {
              count: 0,
              duration: 0.1,
              delay: 1.2
            },
            rate: {
              delay: isPreview ? 2.4 : 1.6, // Increased delay
              quantity: isPreview ? 1 : 2 // Reduced quantity
            },
            position: {
              x: 80,
              y: 100
            }
          }
        ],
        detectRetina: true
      }}
    />
  );
};

export default FireworkParticles; 