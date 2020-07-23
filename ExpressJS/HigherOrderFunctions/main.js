/* 
HIGHER ORDER ARRAY METHODS
We will be looking over 
    Map
    Filter
    Sort
    Reduce
    forEach
*/

// The arrays we are gonna use are:
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*** ============= forEach ============== ***/
// standard for loop below
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
// prints out the nine companies

// forEach(iteratorOfArray, indexOfArray, entireArray)
// companies.forEach(function (company) {
//   console.log(company.name);
// });

/***============ Filter =========== ***/
// get 21 and older
// with a for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// filter(iterator, index, entireArray)
// const canDrink = ages.filter(function(age){
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);
// same thing

// in one line
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// Filter Retail Company
// const retailCompany = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// console.log(retailCompany);

// one-liner
// const retailCompany = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompany);

// Get 1980s Companies
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// Get Companies that lasted more than 10 years
// const lastedCompanies = companies.filter(
//   (company) => company.end - company.start > 10
// );
// console.log(lastedCompanies);

/***========== MAP ============***/
// Create Array of Comapany Names
// const companyName = companies.map((company) => company.name);
// console.log(companyName);

// Create Array of Company Names and Year of Business
// const testMap = companies.map(
//   (company) =>
//     `Name:${company.name}, Year of Business:${company.end - company.start}`
// );
// console.log(testMap);

// Ages Squared
// const ageSquared = ages.map((age) => age * age);
// console.log(ageSquared);

// Say you want to use two maps, like square ages and double it
// const ageSquaredandDoubled = ages.map((age) => age * age).map((age) => age * 2);
// console.log(ageSquaredandDoubled);

/***==========SORT==========***/
// Sort Companies by start year
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a, b) => (a > b ? 1 : -1));
// console.log(sortedAges);

// const sortedDescendingAges = ages.sort((a, b) => (a < b ? 1 : -1));
// console.log(sortedDescendingAges);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// const DescendOrderAges = ages.sort((a, b) => b - a);
// console.log(DescendOrderAges);

/***==========REDUCE=========***/
// for Loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// reduce
// const AgeSum = ages.reduce(function (total, age) {
//   return total + age;
// }, (total = 0));
// console.log(AgeSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Total Years for all Companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  (total = 0)
);
console.log(totalYears);
