<script setup>
import { useCounter } from '@/stores/counter';
const counter = useCounter();

</script>

<template>
    <h3>Tasks Page
    </h3>
    <button type="button" class="bored" @click="counter.count++">Increment Global Counter
        {{ counter.count }}
    </button>

    <h4 class="text-xl">Reset Store</h4>
    <button type="button" class="border m-2" @click="counter.$reset()">Reset Counter</button>

    <h4 class="text-xl">
        Patch Student Grades
    </h4>
    <button type="button" class="border m-2" @click="counter.$patch({
        count:8,
        level:5
    })">Set multiple state at the one time {{  counter.level }}</button>


</template>