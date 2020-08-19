export type NavigateStep = {
  type: "navigate";
  arguments: [string];
};

export type ExecStep = {
  type: "exec";
  arguments: [string];
  waitForNetworkIdle?: boolean;
  networkIdleTimeout?: number;
};

export type WebPageTestJob = {
  runs: number;
  bwDown: number;
  bwUp: number;
  latency: number;
  cpuThrottle: number;
  mobile: boolean;
  url?: string;
  script?: string;
};
