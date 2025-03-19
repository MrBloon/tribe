"use client";

import React, { useEffect, useState } from 'react';
import styles from './ThemeParticles.module.scss';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';

interface ConfettiParticlesProps {
  isPreview?: boolean;
}

const ConfettiParticles: React.FC<ConfettiParticlesProps> = ({ isPreview = false }) => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine: Engine) => {
        await loadConfettiPreset(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);

  return (
    <Particles
      id={isPreview ? "confetti-particles-preview" : "confetti-particles"}
      className={styles.confettiParticles}
      options={{
        preset: "confetti",
        particles: {
          number: {
            value: isPreview ? 300 : 100
          },
          color: {
            value: ["#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"]
          },
          shape: {
            type: ["circle", "square", "triangle"]
          },
          opacity: {
            value: { min: 0.3, max: 0.8 }
          },
          size: {
            value: { min: 1, max: 5 }
          },
          move: {
            enable: true,
            speed: isPreview ? 1.5 : 3,
            direction: "bottom",
            straight: false,
            gravity: {
              enable: true,
              acceleration: 0.5
            }
          }
        },
        emitters: {
          direction: "top",
          position: {
            x: 50,
            y: 0
          },
          rate: {
            delay: isPreview ? 0.2 : 0.1,
            quantity: isPreview ? 2 : 5
          },
          size: {
            width: 100,
            height: 0
          }
        }
      }}
    />
  );
};

export default ConfettiParticles; 