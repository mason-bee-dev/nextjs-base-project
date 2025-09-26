"use client"
import React, { useState } from "react"
import { handleGetEvents } from "@/services/events/action"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { EVENTS_PAGINATION } from "@/configs/constants/events"
import { useQuery } from "@tanstack/react-query"
import { IEvent } from "@/types/events.type"
import { map } from "lodash"
import { lightlinkPegasus, sepolia } from "viem/chains"
import { useSwitchChain, useChainId, useChains } from "wagmi"

export default function DemoPage() {
  const [pageIndex, setPageIndex] = useState(0)
  const { switchChain } = useSwitchChain()
  const chainId = useChainId()
  const chains = useChains()

  const currentChain = chains.find((chain) => chain.id === chainId)

  const fetchEvents = async () => {
    const response = await handleGetEvents({
      page_index: pageIndex ? pageIndex + 1 : 1,
      page_size: EVENTS_PAGINATION.PAGE_SIZE,
      filter_status: "upcoming",
    })

    const { data } = response

    return data
  }

  const { isLoading, data: events } = useQuery({
    queryKey: ["fetchEvents"],
    queryFn: fetchEvents,
  })

  return (
    <div className="demo-page p-8">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <ConnectButton />
      <div className="mt-4 mb-4">
        <div className="rounded-lg bg-gray-100 p-3">
          <p className="text-sm text-gray-700">
            <strong>Current Chain:</strong> {currentChain?.name || "Unknown"}{" "}
            (ID: {chainId})
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => switchChain({ chainId: lightlinkPegasus.id })}>
          Switch to Lightlink Pegasus
        </button>
        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={() => switchChain({ chainId: sepolia.id })}>
          Switch to Sepolia
        </button>
      </div>
      <div className="mt-8"></div>
      <div className="mt-8 hidden space-y-4">
        {map(events?.items, (event: IEvent) => (
          <div
            className="flex w-[250px] items-center justify-between gap-4"
            key={event.key}>
            <h3 className="truncate">{event.title}</h3>
            <button
              className="cursor-pointer rounded-2xl bg-white p-2 text-xs font-semibold text-black"
              onClick={() => {
                console.log("clicked")
              }}>
              {isLoading ? "Loading..." : "View"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
