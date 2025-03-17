"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

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
      className="w-full py-3 px-4 bg-[#8B0000] text-white hover:bg-[#7a0000]"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CreateEventButton; 