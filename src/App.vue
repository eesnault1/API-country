<template>
  <TheNavbar>
  </TheNavbar>
  <div class="m-8">
    <router-view/>

  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue';
</script>

<style>
html.dark{
  color-scheme:dark;
}
</style>
