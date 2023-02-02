<template>
    <button @click="toggleDark()" class="">
        Dark Mode
    </button>
</template>


<script setup>
import {useDark, useToggle} from'@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>