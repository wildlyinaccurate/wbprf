import puppeteerGenerator from "./src/generators/puppeteer.ts";
import wptGenerator from "./src/generators/wpt.ts";

const script = [
  { type: "navigate", arguments: ["https://wildlyinaccurate.com/"] },
  {
    type: "exec",
    arguments: ["document.querySelector('article a').click()"],
    waitForNetworkIdle: true,
  },
];

console.log("Input:");
console.log(script, "\n");
console.log("WPT script:");
console.log(script.map(wptGenerator).join("\n"), "\n");
console.log("Puppeteer code:");
console.log(script.map(puppeteerGenerator).join("\n"), "\n");
