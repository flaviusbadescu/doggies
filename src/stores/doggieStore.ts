import { api } from "@/api/api";
import type { Doggie } from "@/types/Doggie";
import { defineStore } from "pinia";

type RootState = {
  doggie: Doggie | null;
};

export const useDoggieStore = defineStore("doggie", {
  state: (): RootState => ({
    doggie: null,
  }),
  actions: {
    async fetchDoggieById(tokenId: number) {
      this.doggie = await api.etherscan.fetchEtherscan(tokenId);
    },
  },
});
