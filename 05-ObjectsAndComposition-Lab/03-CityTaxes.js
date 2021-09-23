function cityTaxes(name, population, treasury) {
  const result = {
    name,
    population,
    treasury,
    taxRate: 10,
    //Increase treasury by  population * taxRate
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    // Increase population by given percentage
    applyGrowth(percent) {
      this.population += Math.floor(this.population * (percent / 100));
    },
    // Decrease treasury by given percentage
    applyRecession(percent) {
      this.treasury -= Math.ceil(this.treasury * (percent / 100));
    }
  };

  return result;
}


// case 1:
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

/*
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000,
  taxRate: 10,
  collectTaxes: [Function: collectTaxes],
  applyGrowth: [Function: applyGrowth],
  applyRecession: [Function: applyRecession]
}
*/


// case 2:
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
/*
85000
7350
*/