<template>
  <div class="persons-view">
    
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

export default {
  name: 'PersonsView',
  components: {
    PersonCard
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.header p {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}


.error {
  text-align: center;
  color: white;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.retry-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.persons-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .persons-grid {
    gap: 15px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .persons-view {
    padding: 15px;
  }
}
</style>
