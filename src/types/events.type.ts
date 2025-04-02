import { ICover } from "./common.type"

export interface ILocation {
  lat?: number
  lon?: number
  name: string
  display_name?: string
  city?: string
  country?: string
}

export interface ITicketTier {
  name: string
  capacity: number
  price: number
  currency: string
  start_date: number
  close_date: number
  key: string
  sold: number
  service_fee_rate: number
  service_fee: number
  location?: ILocation
  event_key?: string
}

export interface IEvent {
  key: string
  title: string
  category?: string
  description?: string
  start_date?: number
  close_date?: number
  location?: ILocation
  image?: ICover
  ticket_tiers?: ITicketTier[]
}
