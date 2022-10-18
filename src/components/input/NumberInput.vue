<template>
  <input
    type="number"
    min="0"
    class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    @input="handleInput"
  />
</template>

<script lang="ts">
export default {
  prop: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
