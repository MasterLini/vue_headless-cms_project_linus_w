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
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 250px;
  margin: 10px;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.person-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
  text-align: center;
}

.person-name {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.person-phone {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
