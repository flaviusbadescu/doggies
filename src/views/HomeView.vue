<script setup lang="ts">
import DoggieView from "@/views/explorer/doggie-details/DoggieView.vue";
import DoggieExplorer from "@/views/explorer/DoggieExplorer.vue";
</script>

<template>
  <div class="flex justify-center">
    <DoggieExplorer />
  </div>
  <div class="h-1 bg-gray-400 flex w-[80%] m-auto mt-20 mb-10" />
  <div class="w-[80%] m-auto lg:p-20 pb-20">
    <DoggieView />
  </div>
</template>
