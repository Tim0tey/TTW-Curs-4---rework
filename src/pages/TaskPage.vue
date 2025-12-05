<script setup>
import { useCounter } from '@/stores/counter';
const counter = useCounter();

</script>

<template>
    <h3>Tasks Page
    </h3>
    <button type="button" class="bored" @click="counter.count++">Increment Global Counter
        {{ cunter.count }}
    </button>
</template>