import { sepolia } from "viem/chains"
import { Environments } from "../env"

const STAGE_ENV: Environments = {
  IS_PRODUCTION: false,
  API: {
    ROOT_URL: "https://15dv3yayq3.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  ASSETS: {
    ROOT_URL: "https://pellar-dev.s3.ap-southeast-1.amazonaws.com",
  },
  RAINBOWKIT: {
    ACTIVE_CHAIN: sepolia,
    PROJECT_ID: "9ef7ccf9f37a9ab2062189888bfe678c",
  },
}

export default STAGE_ENV
