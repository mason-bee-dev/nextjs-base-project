"use server"
import { RequestFactory } from "@/api"
import { GetEventsParams } from "@/api/events/events.type"
import { requestController } from "@/utils/request"
import { AxiosError } from "axios"

const eventsRequest = RequestFactory.getEventsRequest()

export const handleGetEvents = async (params: GetEventsParams) => {
  const { page_index, page_size, filter_status, filter_title } = params

  try {
    const response = await requestController(async () => {
      return await eventsRequest.getEvents({
        page_index,
        page_size,
        filter_status,
        filter_title,
        sort_start_date: "desc",
      })
    })
    return response
  } catch (e: any | AxiosError) {
    throw new Error(e?.message)
  }
}
