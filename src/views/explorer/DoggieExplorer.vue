<script setup lang="ts">
import DoggieSearch from "./DoggieSearch.vue";
import ContactImage from "@/components/images/ContactImage.vue";
</script>

<template>
  <div>
    <div class="mt-20 mb-10 w-24 h-24 ml-auto mr-auto">
      <ContactImage />
    </div>
    <div class="text-3xl">The Doggies Explorer</div>

    <DoggieSearch />
  </div>
</template>
