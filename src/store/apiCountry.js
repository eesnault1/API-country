import axios from 'axios'
import { defineStore } from 'pinia'

export const useCountryAPI = defineStore('countryAPI', {
    state: () => ({ 
        country: [], 
        countryDisplay : [],
        searchName: "",
        regionSelected: "",
        countryView : [],
    }),
    actions: {
        async countryAPI() {
                await axios
                .get(`https://restcountries.com/v3.1/all`)
                .then(resp => {
                    this.country = resp.data
                    console.log(this.country)
                    this.countryDisplay = this.country
                })
                .catch(error => {
                    console.log(error)
                })
        },
        searchNameCountry() {
            this.countryDisplay = this.country.filter((pays)=>{
              return pays.name.common.toLowerCase().includes(this.searchName.toLowerCase())
            })
            this.searchRegionCountry()
          },
          searchRegionCountry(){
            if(this.regionSelected === ''){
              this.countryDisplay = this.country.filter((pays)=>{
                return pays.name.common.toLowerCase().includes(this.searchName.toLowerCase())
              })
            } else {
              this.countryDisplay = this.country.filter(pays => {
                return pays.region === this.regionSelected && 
                       pays.name.common.toLowerCase().includes(this.searchName.toLowerCase())
              })
            }
          },                    
        searchCountryView(paysName){
            this.countryView = this.country.filter(pays => pays.name.common === paysName)
        }
    },
    getters: {
    },
  })