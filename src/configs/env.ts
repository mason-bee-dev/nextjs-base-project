import { Chain } from "viem"
import PRODUCTION_ENV from "./environment/production"
import STAGE_ENV from "./environment/stage"

export type Environments = {
  IS_PRODUCTION: boolean
  API: {
    ROOT_URL: string
    "X-API-KEY": string
  }
  ASSETS: {
    ROOT_URL: string
  }
  RAINBOWKIT: {
    ACTIVE_CHAIN: Chain
    PROJECT_ID: string
  }
}

export const APP_ENVIRONMENTS: Environments = {
  stage: STAGE_ENV,
  production: PRODUCTION_ENV,
}[process.env.NEXT_PUBLIC_CONFIG_ENV === "production" ? "production" : "stage"]
