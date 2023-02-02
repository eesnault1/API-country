<template>
    <div
      class="bg-white rounded-lg overflow-hidden"
      @click="viewCountry(pays)"
    >
        <img
          :src="`${pays.flags.svg}`"
          class="w-full h-52 object-cover"
        />
        <div class="p-8">
            <div class="font-bold">
                {{ pays.name.common }}
            </div>
            <div class="mt-3">
                <div class="flex gap-2 items-center">
                    <div class="font-semibold">
                        Population : 
                    </div>
                    <div class="text-slate-700">
                        {{ pays.population }}
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="font-semibold">
                        Région : 
                    </div>
                    <div class="text-slate-700">
                        {{ pays.region }}
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="font-semibold">
                        Capital : 
                    </div>
                    <div v-if="pays.capital" class="text-slate-700">
                        {{ pays.capital[0]}}
                    </div>
                    <div v-else>
                        Undefined
                    </div>
                </div>
            </div>
        </div>



    </div>


</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps(['pays'])


const router = useRouter()
const viewCountry = (pays) => {
  const name = pays.name.common
  router.push({
    name: 'CountryView',
    params: {name : name},
  })
}
</script>
