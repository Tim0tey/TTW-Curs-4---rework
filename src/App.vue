<script setup>
import { ref } from 'vue'
const showIcons= ref(false)
import YourNumberOne from './components/YourNumberOne.vue'
import StuedntsGrades from './components/StuedntsGrades.vue'
import BlindLink from './components/BlindLink.vue'
import { onMounted, onUpdated } from 'vue'
import BootstrapIcons from './components/BootstrapIcons.vue'


onMounted(() => {
  console.log('App Mounted')
})

onUpdated(() => {
  console.log('App updated')
})



const ClickHandler = () => {
  message.value = "Button clicked"
}

const randomNumber = ref(null)
const updateRandomNumber = () => {
  randomNumber.value = Math.random()
}

const counter = ref(0)
const incrementCounter = () => {
  counter.value++
}

const students = ref([
  { name: "Timo", grade: 7 },
  { name: "turkish", grade: 8 },
  { name: "Erik", grade: 10 },
])

const randomGrades = ref(null)
const updateRandomGrades = () => {
  randomGrades.value = Math.random()
}
</script>

<template>
  <YourNumberOne />
  <hr>
  <StuedntsGrades />
  <hr>
  <BlindLink />
  <hr>
  <input type="checkbox" v-model="showIcons">
  <div>
    <BootstrapIcons v-if="showIcons" />
    <BootstrapIcons v-else />
  </div>
  <br>
  <input type="text" @change="console.log('text changed')"
    @input="console.log('you have typed: ' + $event.target.value)" @keydown="console.log('you pressed: ' + $event.key)">
  </input>
  <br>
  <a :href="link" target="_blank">Visit emanuel Website</a>
  <br></br>
  <hr>
  <br></br>
  <h3>Display a random number</h3>
  <button @click="updateRandomNumber">Get a random number</button>
  <div v-if="randomNumber">
    <div v-if="randomNumber >= 0.5">number is bigger or equal than 0.5</div>
    <div v-else>number is lower than 0.5</div>
  </div>
  <br></br>
  <div v-if="randomNumber && randomNumber >= 0.5">number is bigger or equal than 0.5</div>
  <div v-else-if="randomNumber && randomNumber">number is lower than 0.5</div>
  <br>
  <hr>
  <h3>Counter</h3>
  <button @click="counter++">Increment v1</button>
  <button @click="">Increment v2</button>

  <div>{{ counter }}</div>

  <hr>
  <h3>Bootstrap-icons</h3>
  <i class="bi bi-apple"></i>

  <hr>
  <h3>Test V-For</h3>
  <ul>
    <li v-for="(student, index) of students" :key="index">
      Name: {{ student.name }}, Grade: {{ student.grade }}
    </li>
  </ul>
  <h3>Vezi ce nota ai primit</h3>
  <button @click="updateRandomGrades">Get a random number</button>
  <div v-if="randomGrades">
    <div v-if="randomGrades >= grades">grades</div>
    <div v-else>number is lower than 0.5</div>
  </div>


</template>

<style>
@import "bootstrap-icons";
/*@import "tailwindcss"; */
</style>
