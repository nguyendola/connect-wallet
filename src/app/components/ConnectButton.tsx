"use client";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState, Suspense } from "react";

function ConnectButtonInner() {
  return <RainbowConnectButton />;
}

export default function ConnectButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Loading...
      </button>
    );
  }

  return (
    <Suspense fallback={
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Loading...
      </button>
    }>
      <ConnectButtonInner />
    </Suspense>
  );
} 