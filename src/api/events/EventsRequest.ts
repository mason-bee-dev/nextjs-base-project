import { BaseRequest } from "../BaseRequest"
import { GetEventsParams } from "./events.type"

export class EventsRequest extends BaseRequest {
  protected _route: string = ""

  public async getEvents(query: GetEventsParams) {
    return await this.get("/events/public/list", query)
  }
}
