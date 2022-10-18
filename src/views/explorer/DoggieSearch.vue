<script setup lang="ts">
import PrimaryButton from "@/components/button/PrimaryButton.vue";
import { useDoggieStore } from "@/stores/doggieStore";
import { ref } from "vue";

const tokenId = ref();
const store = useDoggieStore();

const onSearchHandler = () => {
  if (tokenId.value) {
    store.fetchDoggieById(tokenId.value);
  }
};

const onRandomSearchHandler = () => {
  const randomTokenId = Math.floor(1000 + Math.random() * 9000);
  tokenId.value = randomTokenId;
  store.fetchDoggieById(randomTokenId);
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
  <PrimaryButton
    :disabled="store.loading"
    label="Search"
    :onClick="onSearchHandler"
  />
  <PrimaryButton
    :disabled="store.loading"
    label="Random Search"
    :onClick="onRandomSearchHandler"
  />
</template>
