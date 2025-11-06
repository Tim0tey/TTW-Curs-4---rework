<script setup>
import { ref } from 'vue'
const link = ref ('https://emanuel.ro')
const target = ref("_blank")
</script>

<template>
<a :href="link" target="_blank">Go to link</a>
</template>