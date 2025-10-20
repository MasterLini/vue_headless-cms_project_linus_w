<template>
  <div class="persons-view">
    <HeaderCard title="HTL Dornbirn 5bWI" />
    
    <div v-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchPersons" class="retry-btn">Retry</button>
    </div>
    
    <div v-else class="persons-grid">
      <PersonCard 
        v-for="person in persons" 
        :key="person.id" 
        :person="person" 
      />
    </div>
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
import HeaderCard from '../components/HeaderCard.vue'

export default {
  name: 'PersonsView',
  components: {
    PersonCard,
    HeaderCard
  },
  data() {
    return {
      persons: [],
      error: null
    }
  },
  async mounted() {
    await this.fetchPersons()
  },
  methods: {
    async fetchPersons() {
      try {
        this.error = null
        
        const response = await fetch('https://fakerapi.it/api/v2/persons?_quantity=20')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.status === 'OK' && data.data) {
          console.log('All persons data:', JSON.stringify(data.data, null, 2));
          this.persons = data.data
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error('Error fetching persons:', error)
        this.error = 'Failed to load persons. Please try again.'
      }
    }
  }
}
</script>

<style scoped>
.persons-view {
  min-height: 100vh;
  background-color: #3b3a13;
  padding: clamp(48px, 8vw, 96px) clamp(24px, 8vw, 120px) 120px;
  display: flex;
  flex-direction: column;
  gap: clamp(36px, 6vw, 72px);
}

.error {
  align-self: center;
  text-align: center;
  color: #f5f1dd;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.retry-btn {
  background-color: #f5f1dd;
  color: #3b3a13;
  border: none;
  padding: 14px 32px;
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
}

.retry-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.3);
}

.persons-grid {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(32px, 5vw, 60px);
  justify-items: center;
}

@media (max-width: 768px) {
  .persons-view {
    padding: 48px 24px 96px;
    gap: 48px;
  }

  .persons-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px;
  }
}
</style>
