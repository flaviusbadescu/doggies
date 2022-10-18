<script setup lang="ts">
import ImageLoader from "@/components/loader/ImageLoader.vue";
import TableLoader from "@/components/loader/TableLoader.vue";
import TextLoader from "@/components/loader/TextLoader.vue";

defineProps<{
  isLoading: boolean;
}>();
</script>

<template>
  <div v-if="isLoading">
    <div class="grid grid-flow-row lg:grid-cols-2 md:grid-cols-1">
      <TextLoader />
      <div class="grid lg:justify-end justify-start mt-10 lg:mt-0">
        <ImageLoader />
      </div>
    </div>
    <div class="mt-10">
      <TableLoader :rows="9" />
    </div>
  </div>
</template>
