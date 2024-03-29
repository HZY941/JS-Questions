/**
 * Find the country with the most population from the given information.
 *
 * @date 06/05/2022
 * @input arrays of information about country / city / population.
 * @output the console output of the country with most population.
 */
const countries = [
  { id: 1, name: "USA" },
  { id: 2, name: "England" },
  { id: 3, name: "Russia" },
  { id: 4, name: "New Zealand" },
];

const cities = [
  { id: 1, country_id: 1, name: "New York" },
  { id: 2, country_id: 1, name: "Seattle" },
  { id: 3, country_id: 1, name: "Los Angeles" },
  { id: 4, country_id: 1, name: "Houston" },
  { id: 5, country_id: 1, name: "San Diego" },
  { id: 6, country_id: 2, name: "London" },
  { id: 7, country_id: 2, name: "Manchester" },
  { id: 8, country_id: 3, name: "Moscow" },
  { id: 9, country_id: 3, name: "Novosibirsk" },
  { id: 10, country_id: 4, name: "Auckland" },
  { id: 11, country_id: 4, name: "Wellington" },
];

const populations = [
  { id: 1, city_id: 1, amount: 8419000000 },
  { id: 2, city_id: 2, amount: 724305 },
  { id: 3, city_id: 3, amount: 3967000 },
  { id: 4, city_id: 4, amount: 2310000 },
  { id: 5, city_id: 5, amount: 1410000 },
  { id: 6, city_id: 6, amount: 8982000 },
  { id: 7, city_id: 7, amount: 553230 },
  { id: 8, city_id: 8, amount: 11920000 },
  { id: 9, city_id: 9, amount: 1511000 },
  { id: 10, city_id: 10, amount: 1657000 },
  { id: 11, city_id: 11, amount: 212700 },
];

// solution - using filter and reducer calculate each country's total population and record the highest one.
const findCountryWithMostPop = (countries, cities, populations) => {
  let maxPop = 0;
  let maxPopCountry = "";
  countries.forEach((country) => {
    const totalPop = cities
      .filter((city) => city.country_id === country.id)
      .reduce((acc, city) => {
        return acc + populations.filter((p) => p.id === city.id)[0].amount;
      }, 0);

    if (totalPop > maxPop) {
      maxPop = totalPop;
      maxPopCountry = country.name;
    }
  });
  return `${maxPopCountry} has population of ${maxPop}`;
};

console.log(findCountryWithMostPop(countries, cities, populations));
