<script setup>
import { onMounted, onUpdated} from 'vue'
 onMounted(() => {
  console.log('App mounted')
 })

 onUpdated(() => {
  console.log('App updated')
 })
 import { ref } from 'vue'
const message = ref("Hello from vue")

const ClickHandler = () => {
  message.value = "Button clicked"
}
</script>

<template>
  <h1>You did it!</h1>
  <button  @click = " console.log('Button clicked')">Click me</button>

  <p>
    {{ message }}
  </p>
  <br>
  <input type="text" 
  @change="console.log('Text changed')"
  @input ="console.log('Yu have typed')">
</template>

<style scoped></style>
