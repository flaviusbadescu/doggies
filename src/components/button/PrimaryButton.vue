<script setup lang="ts">
defineProps<{
  label: string;
  disabled?: boolean;
  onClick: () => void;
}>();
</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2"
    :class="{ 'bg-blue-200 hover:bg-blue-200 cursor-not-allowed': disabled }"
    v-on:click="onClick"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
