"use client"
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../@UI/Button/Button.client";

function BackButton() {
  const router = useRouter();

  const handleBack = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    router.back();
  };

  return (
    <Button onClick={handleBack} className="mr-4">
      Back
    </Button>
  );
}

export default React.memo(BackButton);
