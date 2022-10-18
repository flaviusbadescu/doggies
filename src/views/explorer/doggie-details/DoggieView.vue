<script setup lang="ts">
import { useDoggieStore } from "@/stores/doggieStore";
import DoggieTraits from "./DoggieTraits.vue";

const store = useDoggieStore();
</script>

<template>
  <div v-if="store?.doggie">
    <div class="grid grid-flow-row grid-cols-2">
      <div>
        <div>
          <div class="font-bold">Title and Owner:</div>
          <div>{{ store.doggie.name }}</div>
        </div>

        <div class="mt-2 max-w-xs">
          <div class="font-bold">Description</div>
          <div>{{ store.doggie.description }}</div>
        </div>
      </div>
      <div class="grid justify-end">
        <img
          loading="lazy"
          class="max-w-[250px]"
          v-bind:src="store.doggie.image_url"
        />
      </div>
    </div>
    <DoggieTraits :traits="store.doggie.attributes" />
  </div>
</template>
