import { mainnet } from "viem/chains"
import { Environments } from "../env"

// TODO: update variables to .env.local

const PRODUCTION_ENV: Environments = {
  IS_PRODUCTION: true,
  API: {
    ROOT_URL:
      "https://4tnzjg4rvi.execute-api.ap-southeast-1.amazonaws.com/prod",
  },
  ASSETS: {
    ROOT_URL: "https://assets-tickify.s3.ap-southeast-1.amazonaws.com",
  },
  RAINBOWKIT: {
    ACTIVE_CHAIN: mainnet,
    PROJECT_ID: "9ef7ccf9f37a9ab2062189888bfe678c",
  },
}

export default PRODUCTION_ENV
