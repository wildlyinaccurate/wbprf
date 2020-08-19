## Project goals

- Define an AST that describes web performance automation
- Provide reference implementations for common tools
  - Output as WebPageTest script
  - Output as Puppeteer code
- Support enough "commands" to perform common tasks
  - Navigation
  - Trigger click/input/submit events
  - Execute arbitrary JS
  - Resize the viewport
  - Apply throttling

## Run the sample

Requires [deno](https://deno.land/).

```
$ deno run --no-check sample.ts
Input:
[
  { type: "navigate", arguments: [ "https://wildlyinaccurate.com/" ] },
  {
    type: "exec",
    arguments: [ "document.querySelector('article a').click()" ],
    waitForNetworkIdle: true
  }
]

WPT script:
navigate	https://wildlyinaccurate.com/
execAndWait	document.querySelector('article a').click()

Puppeteer code:
await page.goto("https://wildlyinaccurate.com/");
await page.evaluate("document.querySelector('article a').click()");
```
