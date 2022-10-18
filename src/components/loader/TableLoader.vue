<script setup lang="ts">
defineProps<{
  rows: number;
}>();
</script>

<template>
  <div>
    <div class="animate-pulse pb-20">
      <div class="bg-slate-300 h-16 w-full"></div>
      <div
        v-for="index of rows"
        :key="index"
        class="bg-slate-300 h-10 w-full mt-1"
      />
    </div>
  </div>
</template>
