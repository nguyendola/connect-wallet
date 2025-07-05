"use client";

import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "wagmi/chains";
import { createStorage, cookieStorage } from "wagmi";
import React, { useEffect, useState, Suspense } from "react";
import {
  metaMaskWallet,
  trustWallet,
  binanceWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets";

const projectId = "a33697df89d7621b28b9a7a1bd8ef5e9";

const config = getDefaultConfig({
  appName: "Mini Demo Connect Wallet",
  projectId,
  chains: [mainnet],
  ssr: true,
  storage: createStorage({ storage: cookieStorage }),
  wallets: [
    {
      groupName: "Popular",
      wallets: [
        metaMaskWallet,
        trustWallet,
        binanceWallet,
        okxWallet,
      ],
    },
  ],
});

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

function RainbowKitWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: "#0E76FD",
        accentColorForeground: "white",
        borderRadius: "large",
        fontStack: "system",
        overlayBlur: "small",
      })}
    >
      {children}
    </RainbowKitProvider>
  );
}

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div suppressHydrationWarning={true}>
        {children}
      </div>
    );
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <RainbowKitWrapper>
            <div suppressHydrationWarning={true}>
              {children}
            </div>
          </RainbowKitWrapper>
        </Suspense>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 