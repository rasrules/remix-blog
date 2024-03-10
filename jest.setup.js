import { jestPreviewConfigure } from 'jest-preview';
import { TextEncoder, TextDecoder } from 'util';
//import './app/styles/global.css';


Object.assign(global, { TextDecoder, TextEncoder });
jestPreviewConfigure({
  // Enable autoPreview so Jest Preview runs automatically
  // whenever your test fails, without you having to do anything!
  autoPreview: true,
});
