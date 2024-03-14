import "@testing-library/jest-dom"; // So we can use toBeInTheDocument assertion
import { loader } from "./routes/healthcheck";

it("should show OK message", async () => {
  const testOkMessage = "OK";
  const response = await loader(undefined);
  expect(response.status).toBe(200);
  expect(response.statusText).toBe(testOkMessage);
});

it("should show test ERROR message", async () => {
  const testErrorMessage = "test ERROR";
  const fake = () =>
    Promise.resolve(
      new Response(testErrorMessage, {
        status: 500,
        statusText: testErrorMessage,
      }),
    );
  const response = await loader({ create: fake });
  expect(response.status).toBe(500);
  expect(response.statusText).toBe(testErrorMessage);
});
