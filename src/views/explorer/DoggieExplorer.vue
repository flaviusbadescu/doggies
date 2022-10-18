<script setup lang="ts">
import ContactImage from "@/components/images/ContactImage.vue";
import DoggieSearch from "./DoggieSearch.vue";
</script>

<template>
  <div class="flex flex-col">
    <div class="mt-20 mb-10 w-24 h-24 ml-auto mr-auto">
      <ContactImage />
    </div>
    <div class="text-3xl flex justify-center">The Doggies Explorer</div>

    <DoggieSearch />
  </div>
</template>
