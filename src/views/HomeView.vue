<template>
  <SearchBar/>
  <div>
    <div
      v-if="storeCountryAPI.country.length > 0"
      class="grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-10 mt-3"
    >
      <div
        v-for="pays in storeCountryAPI.countryDisplay"
        :key="pays.name.common"
        class="drop-shadow-2xl"
      >
        <!-- Component qui définit chaque carte de pays -->
        <CardCountry :pays="pays">

        </CardCountry>
      </div>
    </div>
    
  </div>
</template>



<script setup>
import { useCountryAPI } from '@/store/apiCountry';
import CardCountry from '@/components/CardCountry.vue'
import SearchBar from '@/components/SearchBar.vue'

const storeCountryAPI = useCountryAPI()
storeCountryAPI.countryAPI()
</script>
