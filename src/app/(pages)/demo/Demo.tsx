"use client"
import React, { useState } from "react"
import { handleGetEvents } from "@/services/events/action"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { EVENTS_PAGINATION } from "@/configs/constants/events"
import { useQuery } from "@tanstack/react-query"
import { IEvent } from "@/types/events.type"
import { map } from "lodash"

export default function DemoPage() {
  const [pageIndex, setPageIndex] = useState(0)

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
      <div className="mt-8"></div>
      <div className="mt-8 space-y-4">
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
