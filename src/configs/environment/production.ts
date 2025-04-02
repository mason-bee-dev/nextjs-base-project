import { mainnet } from "viem/chains"
import { Environments } from "../env"

// TODO: update variables to .env.local

const PRODUCTION_ENV: Environments = {
  IS_PRODUCTION: true,
  API: {
    ROOT_URL: process.env.CUSTOM_API_ROOT_URL || "",
    "X-API-KEY": process.env.CUSTOM_API_KEY || "",
  },
  ASSETS: {
    ROOT_URL: "https://assets-tickify.s3.ap-southeast-1.amazonaws.com",
  },
  RAINBOWKIT: {
    ACTIVE_CHAIN: mainnet,
    PROJECT_ID: "9ef7ccf9f37a9ab2062189888bfe678c",
    RPC_URL: "https://ethereum-rpc.publicnode.com",
  },
}

// Add debugging in development
if (process.env.NODE_ENV === "development") {
  console.log("API Root URL:", process.env.CUSTOM_API_ROOT_URL)
  console.log("API Key:", process.env.CUSTOM_API_KEY)
}

export default PRODUCTION_ENV
