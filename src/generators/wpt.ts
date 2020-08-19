import { NavigateStep, ExecStep } from "../types.ts";

type AstNode = NavigateStep | ExecStep;

export default function wptScriptGenerator(node: AstNode): string {
  switch (node.type) {
    case "navigate":
      return ["navigate", node.arguments[0]].join("\t");

    case "exec":
      let ret = [];

      if (node.networkIdleTimeout) {
        ret.push(["setActivityTimeout", node.networkIdleTimeout].join("\t"));
      }

      if (node.waitForNetworkIdle || node.networkIdleTimeout) {
        ret.push(["execAndWait", node.arguments[0]].join("\t"));
      } else {
        ret.push(["exec", node.arguments[0]].join("\t"));
      }

      return ret.join("\n");
  }

  return "; Unknown command";
}
