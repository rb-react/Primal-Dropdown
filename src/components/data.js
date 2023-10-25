const countries = [
  { id: "1", name: "USA" },
  { id: "2", name: "India" },
  { id: "3", name: "Russia" },
  { id: "4", name: "France" },
];

const state = [
  { id: "1", countryId: "1", name: "Texass" },
  { id: "2", countryId: "1", name: "California" },
  { id: "3", countryId: "2", name: "Maharashtra" },
  { id: "4", countryId: "2", name: "Haryana" },
  { id: "5", countryId: "3", name: "Altai Territory" },
  { id: "6", countryId: "3", name: "Bryansk Region" },
  { id: "7", countryId: "4", name: "Corsica" },
  { id: "8", countryId: "4", name: "Paris Region" },
];

const cities = [
  { id: "1", stateId: "1", name: "Houston" },
  { id: "2", stateId: "1", name: "Austin" },
  { id: "3", stateId: "2", name: "Los Angeles" },
  { id: "4", stateId: "2", name: "Son Diego" },
  { id: "5", stateId: "3", name: "Pune" },
  { id: "6", stateId: "3", name: "Mumbai" },
  { id: "7", stateId: "4", name: "Faridabad" },
  { id: "8", stateId: "4", name: "Palwal" },
  { id: "9", stateId: "5", name: "Obsky" },
  { id: "10", stateId: "5", name: "Solonovsky" },
  { id: "11", stateId: "6", name: "Gromyki" },
  { id: "12", stateId: "6", name: "Dmitrovo" },
  { id: "13", stateId: "7", name: "Bastia" },
  { id: "14", stateId: "7", name: "Sartene" },
  { id: "15", stateId: "8", name: "Le Marais" },
  { id: "16", stateId: "8", name: "Bastille" },
];

export { countries, state, cities };
