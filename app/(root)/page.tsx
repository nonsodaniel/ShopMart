"use client";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
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
