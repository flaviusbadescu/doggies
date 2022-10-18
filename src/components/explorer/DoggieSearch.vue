<script setup lang="ts">
import { useDoggieStore } from "@/stores/doggieStore";
import { ref } from "vue";

const tokenId = ref();

const store = useDoggieStore();

const onSearchHandler = () => {
  if (tokenId.value) {
    console.log(tokenId.value);
    store.fetchDoggieById(tokenId.value);
  }
};
</script>

<template>
  <div class="mt-10 mb-5">Token ID</div>
  <input
    type="number"
    min="0"
    class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    v-model="tokenId"
  />
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2"
    v-on:click="onSearchHandler"
  >
    Search
  </button>
</template>
