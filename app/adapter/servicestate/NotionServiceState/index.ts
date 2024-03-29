import fetch from "cross-fetch";
import { parse } from "node-html-parser";
import type { ParseParametersDictionary } from "../types";
import {
  SPAN_CLASSES,
  STATUS_TEXT,
  STATUS_TAG,
} from "./NotionServiceConstants";

const NotionParseParameters: ParseParametersDictionary = {
  tagToFind: STATUS_TAG,
  tagClasses: SPAN_CLASSES,
  textToFind: STATUS_TEXT,
};

export async function checkNotionServiceState(): Promise<Response> {
  try {
    // if we can connect to the database and make a simple query
    // and make a HEAD request to ourselves, then we're good.
    const htmlResponse = await fetch("https://status.notion.so", {
      method: "GET",
    });
    const data = await htmlResponse.text();
    verifyStatusResponse(data, NotionParseParameters);
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500, statusText: "ERROR" });
  }
}

export const verifyStatusResponse = (
  htmlData: string,
  parameters: ParseParametersDictionary,
) => {
  const html = parse(htmlData);
  const { tagToFind, tagClasses, textToFind } = parameters;
  const result = html
    .getElementsByTagName(tagToFind)
    .filter(
      (elem) => elem.rawTagName === tagToFind && elem.classNames === tagClasses,
    );
  const statusSpanText = result[0]?.text;
  if (!statusSpanText?.includes(textToFind))
    throw Error("Notion services invalid state");
};
