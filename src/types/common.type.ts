export interface ICover {
  name: string
  original: string
  large: string
  medium: string
  small: string
}

export interface IVoucherData {
  key: string
  event_key: string
  code: string
  quantity: number
  used_quantity: number
  type: "amount" | "percentage"
  value: number
  opening_date: number
  cut_off_date: number
  removed: boolean
  created: string
  modified: string
}
