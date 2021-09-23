function city(name, population, treasury) {
  const result = {
    name: name,
    population: population,
    treasury: treasury,
  }

  return result;
}

console.log(city('Tortuga',
  7000,
  15000
));
/*
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000
}
*/

console.log(city('Santo Domingo',
  12000,
  23500
));
/*
{
  name: 'Santo Domingo',
  population: 12000,
  treasury: 23500
}
*/