"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CreateEventButton.module.scss';

interface CreateEventButtonProps {
  onClick?: () => void;
  text?: string;
}

const CreateEventButton: React.FC<CreateEventButtonProps> = ({
  onClick = () => console.log('Create event button clicked'),
  text = 'Créer un événement'
}) => {
  return (
    <Button
      variant="default"
      className={styles.createEventButton}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CreateEventButton; 