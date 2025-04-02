export interface LoginAppleParams {
  code: string
  bundle_id: string
  service_id: string
}

export interface IUser {
  key: string
  email: string
  nick_name?: string
  name?: string
  role?: string
  source?: string
}

export interface FeedbackParams {
  name: string
  email: string
  message?: string
}
