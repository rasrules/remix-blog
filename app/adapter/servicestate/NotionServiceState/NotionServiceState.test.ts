import { verifyStatusResponse } from ".";
import { ParseParametersDictionary } from "../types";

it("should finish OK", () => {
  expect(() => {
    const parameters: ParseParametersDictionary = {
      tagToFind: "p",
      textToFind: "ID1",
      tagClasses: "myclass other",
    };
    const htmlText: string = `<html><body><${parameters.tagToFind} class='${parameters.tagClasses}'>\
    ${parameters.textToFind}</${parameters.tagToFind}></body>`;
    verifyStatusResponse(htmlText, parameters);
  }).not.toThrow(Error);
});

it("should throw error", () => {
  expect(() => {
    const parameters: ParseParametersDictionary = {
      tagToFind: "div",
      textToFind: "none",
      tagClasses: "some value",
    };
    const htmlText: string = "<html><body><p class='test'>Test Text</p></body>";
    verifyStatusResponse(htmlText, parameters);
  }).toThrow(Error);
});
