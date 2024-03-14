import { jestPreviewConfigure } from 'jest-preview';
import { TextEncoder, TextDecoder } from 'util';
import { Response } from 'cross-fetch';
//import './app/styles/global.css';


Object.assign(global, { TextDecoder, TextEncoder, Response });
jestPreviewConfigure({
  // Enable autoPreview so Jest Preview runs automatically
  // whenever your test fails, without you having to do anything!
  autoPreview: true,
});
