import { api } from "@/api/api";
import type { Doggie } from "@/types/Doggie";
import { defineStore } from "pinia";

type RootState = {
  doggie: Doggie | null;
  loading: boolean;
  error: string | null;
};

export const useDoggieStore = defineStore("doggie", {
  state: (): RootState => ({
    doggie: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchDoggieById(tokenId: number) {
      try {
        this.loading = true;
        this.doggie = await api.etherscan.fetchDoggieById(tokenId);
        this.loading = false;
      } catch (error) {
        this.error = "Oops, something went wrong :(";
        this.doggie = null;
        this.loading = false;
      }
    },
  },
});
