import { verifyStatusResponse } from ".";

it("should finish OK", () => {
  expect(() => {
    const tag = "p";
    const text = "ID1";
    const classes = "myclass other";
    const htmlText: string = `<html><body><${tag} class='${classes}'>${text}</${tag}></body>`;
    verifyStatusResponse(htmlText, tag, classes, text);
  }).not.toThrow(Error);
});

it("should throw error", () => {
  expect(() => {
    const htmlText: string = "<html><body><p class='test'>Test Text</p></body>";
    verifyStatusResponse(htmlText, "div", "none", "some value");
  }).toThrow(Error);
});
