import type { Doggie } from "@/types/Doggie";
import type { DoggieResponse } from "@/types/DoggieResponse";
import axios from "axios";
import { ethers } from "ethers";

const ENDPOINT = `https://api.etherscan.io/api`;
const API_KEY = import.meta.env.VITE_ETHERSCAN_API;
const CONTRACT_ADDRESS = import.meta.env.VITE_DOGGIE_CONTRACT;

const provider = ethers.getDefaultProvider("homestead", {
  etherscan: API_KEY,
  alchemy: import.meta.env.VITE_ALCHEMY_API,
});

const fetchDoggieById = async (tokenId: number): Promise<Doggie> => {
  const contract = await getContract();

  const owner = await contract.ownerOf(tokenId);
  const tokenURI = await contract.tokenURI(tokenId);
  const tokenData = await axios
    .get<DoggieResponse>(tokenURI)
    .then((response) => response.data);

  return {
    ...tokenData,
    owner,
  };
};

const getContract = async () => {
  const response = await axios.get(ENDPOINT, {
    params: {
      module: "contract",
      action: "getabi",
      address: CONTRACT_ADDRESS,
      apikey: API_KEY,
    },
  });
  const contractAbi = response.data.result;

  return new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider);
};

export const api = {
  etherscan: {
    fetchDoggieById: fetchDoggieById,
  },
};
