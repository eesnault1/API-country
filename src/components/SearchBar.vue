<template>
    <div class="flex justify-between my-8 ">
        <div class="bg-white rounded-lg drop-shadow-2xl flex justify-center items-center gap-3 p-3 ">
            <font-awesome-icon icon="fa-solid fa-search" />
            <input
              class="w-80 outline-none"
              type="text"
              id="name" 
              name="name"
              placeholder="Rechercher un pays..."
              v-model="storeCountryAPI.searchName"
              @keyup.enter="storeCountryAPI.searchNameCountry()"
            >
        </div>
        <select
          id="region-select"
          class="px-5 cursor-pointer bg-white rounded-lg drop-shadow-2xl"
          @change="storeCountryAPI.searchRegionCountry()"
          v-model="storeCountryAPI.regionSelected"
        >
            <option value="">Filtrer par région</option>
            <option value="Africa">Afrique</option>
            <option value="Americas">Amérique</option>
            <option value="Asia">Asie</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Océanie</option>
        </select>


    </div>
</template>

<script setup>
import { useCountryAPI } from '@/store/apiCountry';
const storeCountryAPI = useCountryAPI()

</script>
