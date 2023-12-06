"use client";
import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/useStoreModal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const onClose = useStoreModal((state) => state.onClose);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="p-4">
      <Modal
        title="A sample modal"
        description="This is my first sample modal"
        isOpen
        onClose={() => null}
      />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
