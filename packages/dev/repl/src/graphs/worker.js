import {expose, proxy} from 'comlink';
import dot from '@mischnic/dot-svg';
// import WASM_URL from "url:dot-wasm/dist/index.wasm";

const render = dot(/*() => WASM_URL*/);

expose({
  render: proxy((...a) => render.then(f => f(...a))),
});
