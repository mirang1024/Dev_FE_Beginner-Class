import { throttle, debounce } from "lodash-es";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
  <h1>Hello, world!</h1>
  <input />
  </div>
`;

// throttle
window.addEventListener(
  "scroll",
  throttle((event) => {
    console.log("스크롤 이벤트 발생!", event);
  }, 1000)
);

// debounce
const inputEl = document.querySelector("input")!;
inputEl.addEventListener(
  "input",
  debounce((event) => {
    console.log((event.target as HTMLInputElement).value);
  }, 1000)
);
