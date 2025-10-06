<template>
  <div class="person-card">
    <div class="card-image">
      <img :src="imageUrl" :alt="`${person.firstname} ${person.lastname}`" />
    </div>
    <div class="card-content">
      <h3 class="person-name">{{ person.firstname }} {{ person.lastname }}</h3>
      <p class="person-phone">{{ person.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      return `https://picsum.photos/200/300?${Math.random()}`;
    }
  }
}
</script>

<style scoped>
.person-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: clamp(220px, 19vw, 260px);
  background-color: #2a2820;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 22px 38px rgba(0, 0, 0, 0.45);
  transform: translateZ(0);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.person-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 28px 48px rgba(0, 0, 0, 0.55);
}

.card-image {
  position: relative;
  aspect-ratio: 3 / 4;
  background: #1a1914;
  overflow: hidden;
}

.card-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.4) 100%);
  mix-blend-mode: multiply;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.01);
  transition: transform 0.35s ease;
}

.person-card:hover .card-image img {
  transform: scale(1.04);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 22px 30px;
  background-color: #dcd7cf;
  color: #1e1c16;
}

.person-name {
  margin: 0;
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: capitalize;
}

.person-detail {
  margin: 0;
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #3f372f;
  white-space: pre-line;
}
</style>
