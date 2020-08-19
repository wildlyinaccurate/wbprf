import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import generate from "../src/generators/puppeteer.ts";

Deno.test("Puppeteer navigate", () => {
  const result = generate({
    type: "navigate",
    arguments: ["https://wildlyinaccurate.com/"],
  });

  assertEquals(result, 'await page.goto("https://wildlyinaccurate.com/");');
});

Deno.test("Puppeteer exec (no wait)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.body.style.display = 'none'"],
  });

  assertEquals(
    result,
    "await page.evaluate(\"document.body.style.display = 'none'\");",
  );
});

Deno.test("Puppeteer exec (with wait)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.querySelector('button').click()"],
    waitForNetworkIdle: true,
  });

  assertEquals(
    result,
    "await page.evaluate(\"document.querySelector('button').click()\");",
  );
});

Deno.test("Puppeteer exec (with custom wait time)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.querySelector('button').click()"],
    networkIdleTimeout: 2000,
  });

  assertEquals(
    result,
    "await page.evaluate(\"document.querySelector('button').click()\");",
  );
});
