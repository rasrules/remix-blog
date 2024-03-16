import fetch from "cross-fetch";
import { parse } from "node-html-parser";
import {
  SPAN_CLASSES,
  STATUS_TEXT,
  STATUS_TAG,
} from "./NotionServiceConstants";

export async function checkNotionServiceState(): Promise<Response> {
  try {
    // if we can connect to the database and make a simple query
    // and make a HEAD request to ourselves, then we're good.
    const htmlResponse = await fetch("https://status.notion.so", {
      method: "GET",
    });
    const data = await htmlResponse.text();
    verifyStatusResponse(data);
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500, statusText: "ERROR" });
  }
}

export const verifyStatusResponse = (htmlData: string) => {
  const html = parse(htmlData);
  const result = html
    .getElementsByTagName(STATUS_TAG)
    .filter(
      (elem) => elem.rawTagName === "span" && elem.classNames === SPAN_CLASSES,
    );
  const statusSpanText = result[0]?.text;
  if (!statusSpanText?.includes(STATUS_TEXT))
    throw Error("Notion services invalid state");
};
