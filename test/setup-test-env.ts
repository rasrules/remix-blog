import { installGlobals } from "@remix-run/node";
import "@testing-library/jest-dom/vitest";
//import '@testing-library/jest-dom/extend-expect';
import { jestPreviewConfigure } from 'jest-preview';


installGlobals();
jestPreviewConfigure({
  // Enable autoPreview so Jest Preview runs automatically
  // whenever your test fails, without you having to do anything!
  autoPreview: true,
});
