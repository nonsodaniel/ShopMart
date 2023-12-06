"use client";

import { StoreModal } from "@/components/modals/StoreModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []); //to handle error incase the app is still in server side rendering

  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
};
