<script setup>
import { ref } from 'vue'

const number = ref(1)

const increment = () => {
  number.value++
}
</script>

<template>
  <div class="your-number-one">
    <h3>You are Number One!</h3>
    <p>Count: {{ number }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.your-number-one {
  padding: 1rem;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
  background: #f9f9f9;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #369b70;
}
</style>