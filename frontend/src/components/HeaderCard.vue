<template>
  <header class="page-header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
})
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
}

h1 {
  font-size: clamp(2.25rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #f4f1e8;
  text-transform: uppercase;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
}
</style>
