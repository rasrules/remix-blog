import fetch from 'cross-fetch';
import { JSDOM } from 'jsdom';
import { SPAN_CLASSES, STATUS_TEXT} from './NotionServiceConstants';


global.DOMParser = new JSDOM().window.DOMParser;
export async function checkNotionServiceState(): Promise<Response> {
    try {
      // if we can connect to the database and make a simple query
      // and make a HEAD request to ourselves, then we're good.
      const htmlResponse = await fetch("https://status.notion.so", {method: "GET"});
      const data = await htmlResponse.text();
      verifyStatusResponse(data);
      return new Response("OK");
    } catch (error: unknown) {
      console.log("healthcheck ❌", { error });
      return new Response("ERROR", { status: 500, statusText: "ERROR" });
    }
}

export const verifyStatusResponse = (htmlData: string) => {
    const html = new DOMParser().parseFromString(htmlData, "text/html");
    const statusSpanText = html.documentElement.getElementsByClassName(SPAN_CLASSES)[0].textContent;
    if(!statusSpanText?.includes(STATUS_TEXT))
      throw Error("Notion services invalid state");
}
