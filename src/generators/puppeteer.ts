import { NavigateStep, ExecStep } from "../types.ts";

type AstNode = NavigateStep | ExecStep;

export default function wptScriptGenerator(node: AstNode): string {
  switch (node.type) {
    case "navigate":
      return `await page.goto(${JSON.stringify(node.arguments[0])});`;

    case "exec":
      return `await page.evaluate(${JSON.stringify(node.arguments[0])});`;
  }

  return "// Unknown command";
}
