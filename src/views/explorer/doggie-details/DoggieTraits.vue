<script setup lang="ts">
import type { Traits } from "@/types/DoggieResponse";

defineProps<{
  traits: Traits[];
}>();
</script>

<template>
  <div class="grid grid-flow-col grid-cols-2 mt-10 bg-slate-300 p-4">
    <div class="grid justify-center">Trait</div>
    <div class="grid justify-center">Value</div>
  </div>
  <div
    v-for="(trait, index) in traits"
    v-bind:key="index"
    class="grid grid-flow-col grid-cols-2 p-2 border"
  >
    <div>
      {{ trait.trait_type }}
    </div>
    <div>{{ trait.value || "N/A" }}</div>
  </div>
</template>
