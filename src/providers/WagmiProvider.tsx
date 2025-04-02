"use client"
import React from "react"
import "viem/window"
import "@rainbow-me/rainbowkit/styles.css"
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { WagmiProvider as WagmiProviderBase, http } from "wagmi"
import { APP_ENVIRONMENTS } from "@/configs/env"
const { ACTIVE_CHAIN } = APP_ENVIRONMENTS.RAINBOWKIT

const config = getDefaultConfig({
  appName: "Ezel App",
  projectId: APP_ENVIRONMENTS.RAINBOWKIT.PROJECT_ID,
  chains: [ACTIVE_CHAIN],
  transports: {
    [ACTIVE_CHAIN.id]: http(APP_ENVIRONMENTS.RAINBOWKIT.RPC_URL),
  },
})

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProviderBase config={config}>
      <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
    </WagmiProviderBase>
  )
}
