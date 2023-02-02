export class countryViewClasses {
    constructor(name, population, region, subRegion, capital, topLevelDomain, currencies, languages)
    {
      this.name = {value : name, texte : 'Nom'}
      this.population = {value : population.toLocaleString('fr', {useGrouping: true}), texte : 'Population'} 
      this.region = {value : region, texte : 'Région'} 
      this.subRegion = {value : subRegion, texte : 'Sub-région'} 
      this.capital = {value : capital, texte : 'Capitale'} 
      this.topLevelDomain = {value : topLevelDomain, texte : 'Nom de domaine'} 
      // Pour la devise 
      this.currencies = {value : '', texte : 'Devises'};
      let currencyNames = [];
      for (const currency in currencies) {
        currencyNames.push(currencies[currency].name);
      }
      this.currencies.value = currencyNames.join(', ');
      // Pour les langues parlées 
      this.languages = {value : Object.values(languages).join(', '), texte : 'Langues parlées'} 
    }      
}