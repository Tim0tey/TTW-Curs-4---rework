<script setup>
</script>

<template>
  <header>
    <nav class ="flex gap-4 p-4 bg-gray-200">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/flowers">Flowers</RouterLink>
      <RouterLink to="/computed">Computed</RouterLink>
      <RouterLink to="/tasks">Tasks</RouterLink>
    </nav>
</header>

  <RouterView />
</template>

<style>
.btn-primary {
  background-color: yellow;
}

</style>