<script setup>

import { useCounter } from '@/stores/counter'
const counterStore = useCounter()

const props= defineProps(['startCount'])

import{ref} from 'vue'
const counter = ref(props.startCount)

const incrementCounter = () =>{
  counter.value++
}
</script>

<template>
  <h3>Counter</h3>
  <button class="bored" @click="counter++">Increment v1</button>
  <button class="bored" @click="incrementCounter">Increment v2</button>
  <button class="bored" @click="counterStore.count++">Increment v3</button>
  <div>{{ counter }}</div>
</template>