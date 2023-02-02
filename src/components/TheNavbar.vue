<template>
    <div class="w-full shadow-md">
        <div class="flex items-center justify-between p-5 m-auto w-11/12 h-22 ">
            <router-link to="/">Accueil</router-link>
            <div class="flex items-center">
                <font-awesome-icon icon="fa-regular fa-moon" />
                <DarkMode/>
            </div>
        </div>
    </div>


</template>

<script setup>
import DarkMode from './DarkMode.vue';



</script>
