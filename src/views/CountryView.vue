<template >
    <button
      class="flex gap-2 px-3 py-1 border rounded-lg mb-5 shadow-md"
      @click="this.$router.go(-1)"
    >
        <div>
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </div>
        <div>
            Retour
        </div>
    </button>
    <div class="flex items-center gap-10">
        <div class="w-1/3">
            <img
              :src="`${storeCountryAPI.countryView[0].flags.svg}`"
              class="w-full h-52 object-cover"
            />
        </div>
        <div class="w-1/2 m-auto">
            <div class="font-bold text-2xl mb-4">
                {{ countryDisplayArray.name.value }}
            </div>
            <div
              v-for="item in countryDisplayArray"
              :key="item.texte"
              class="flex gap-2"
            >
                <div class="font-semibold">
                    {{ item.texte }} :
                </div>
                <div class="text-slate-700">
                    {{ item.value }}

                </div>
            </div>
            <div
              class="flex flex-wrap items-center gap-2 mt-3"
              v-if="listCCA3Border !== undefined"
            >
                <div class="font-semibold">
                    Pays frontalier :  
                </div>
                <div
                  class = "cursor-pointer px-4 border border-gray-500"
                  v-for="pays in borderCountry"
                  :key="pays"
                  @click="viewCountry(pays)"
                >
                    {{ pays.name.common }}
                </div>


            </div>
        </div>

    </div>
</template>

<script setup>
// Import général
import { ref , watch} from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

// import store
import { useCountryAPI } from '@/store/apiCountry';

// import composable
import {countryViewClasses} from '../composable/countryViewDisplay'


const storeCountryAPI = useCountryAPI()
// Permet de récup l'ID du chemin  
const route = useRoute()
let countryDisplayArray = ref([])
let listCCA3Border = ref([])
let borderCountry = ref([])

storeCountryAPI.searchCountryView(route.params.name)
// Création de classe pour display le country
const displayClasses = () => {
    countryDisplayArray.value = new countryViewClasses(
    storeCountryAPI.countryView[0].name.common,
    storeCountryAPI.countryView[0].population,
    storeCountryAPI.countryView[0].region,
    storeCountryAPI.countryView[0].subregion,
    storeCountryAPI.countryView[0].capital[0],
    storeCountryAPI.countryView[0].tld[0],
    storeCountryAPI.countryView[0].currencies,
    storeCountryAPI.countryView[0].languages,
    )   
}
displayClasses()


// Récupère les pays frontaliers au pays qui est affiché
const listBorderCountry = () => {
    borderCountry.value = []
    listCCA3Border.value = storeCountryAPI.countryView[0].borders
    if(listCCA3Border.value !== undefined){
        listCCA3Border.value.forEach(el=> {
            borderCountry.value.push(...storeCountryAPI.country.filter(pays => pays.cca3 === el))
        }) 
    } 
}
listBorderCountry()

// Permet de renvoyver vers le pays quand on clic surle pays border (en double sur CardCountry)
const router = useRouter()
const viewCountry = (pays) => {
  router.push({
    name: 'CountryView',
    params: {name : pays.name.common},
  })

}

// Recharger les données du pays lorsque la route change
// Met à jour les données du pays affiché
watch(() => route.params.name, async (newValue) => {
  await 
  storeCountryAPI.searchCountryView(newValue);
  listBorderCountry()
  displayClasses()
});


</script>
