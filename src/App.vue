<script setup>
import { onMounted} from 'vue'
 onMounted(() => {
  console.log('App mounted')
 })

 onUpdate(() => {
  console.log('App updated')
 })
 const message = "Hello people from earth!"
</script>

<template>
  <h1>You did it!</h1>
  <button  @click = " console.log('Button clicked')">Click me>
  </button>

  <p>
    {{ message }}
  </p>
  <br>
  <input type="text" 
  @change="console.log('Text changed')"
  @input ="console.log('Ypu have typed')">
</template>

<style scoped></style>
