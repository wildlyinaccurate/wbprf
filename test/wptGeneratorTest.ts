import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import generate from "../src/generators/wpt.ts";

Deno.test("WPT navigate", () => {
  const result = generate({
    type: "navigate",
    arguments: ["https://wildlyinaccurate.com/"],
  });

  assertEquals(result, "navigate\thttps://wildlyinaccurate.com/");
});

Deno.test("WPT exec (no wait)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.body.style.display = 'none'"],
  });

  assertEquals(result, "exec\tdocument.body.style.display = 'none'");
});

Deno.test("WPT exec (with wait)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.querySelector('button').click()"],
    waitForNetworkIdle: true,
  });

  assertEquals(result, "execAndWait\tdocument.querySelector('button').click()");
});

Deno.test("WPT exec (with custom wait time)", () => {
  const result = generate({
    type: "exec",
    arguments: ["document.querySelector('button').click()"],
    networkIdleTimeout: 2000,
  });

  assertEquals(
    result,
    [
      "setActivityTimeout\t2000",
      "execAndWait\tdocument.querySelector('button').click()",
    ].join("\n"),
  );
});
