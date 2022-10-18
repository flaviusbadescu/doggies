import type { DoggieResponse } from "./DoggieResponse";

export type Doggie = DoggieResponse & {
  owner: string;
};
