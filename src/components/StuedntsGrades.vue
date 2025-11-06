<script>
import { ref } from 'vue';
const message = ref('Button clicked!');
const link = ref('https://emanuel.ro/');
</script>

<template>
     <a :href="link" target="_blank">Go to the link!</a>
  <div v-if="Math.random() > 0.5">
    <p>Random number is greater than 0.5</p>
  </div>
  <div v-else>
    <p>Random number is less than or equal to 0.5</p>
  </div>

  <h1>You did it!</h1>
  <button @click="clickHandler">Click me</button>
  <p>{{ message }}</p>
  <br>
  <input type="text" v-model="message" @change="console.log('Input changed!')"
    @input="console.log('You have typed: ' + $event.target.value)" @keyup="console.log('Key up event detected!')" />
  </br>
</template>