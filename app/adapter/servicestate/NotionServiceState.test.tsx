import { verifyStatusResponse } from "./NotionServiceState";
import { SPAN_CLASSES, STATUS_TEXT } from "./NotionServiceConstants";

it("should finish OK", () => {
  expect(() => {
    const htmlText: string = `<html><body><p class='${SPAN_CLASSES}'>${STATUS_TEXT}</p></body>`;
    verifyStatusResponse(htmlText);
  }).not.toThrow(Error);
});

it("should throw error", () => {
  expect(() => {
    const htmlText: string = "<html><body><p class='test'>Test Text</p></body>";
    verifyStatusResponse(htmlText);
  }).toThrow(Error);
});
