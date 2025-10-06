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
  padding-top: 12px;
}

h1 {
  margin: 0;
  font-family: 'Bungee', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  color: #f5f1dd;
  text-transform: uppercase;
  text-shadow: 0 8px 18px rgba(0, 0, 0, 0.55);
}
</style>
