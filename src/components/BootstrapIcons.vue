<script setup>
defineProps(['icon'])
defineEmits(['iconClick'])

</script>

<template>
    <h3>Bootstrap Icons <i :class = "`bi bi -airplane-${icon}`"></i></h3>
</template>

