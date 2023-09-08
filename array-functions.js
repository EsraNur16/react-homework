// const users = ["Mehmet", "Ahmet", "Murat"];

const users = [
  {
    name: "Mehmet",
    age: 10,
  },
  {
    name: "Mehmet",
    age: 29,
  },
  {
    name: "Sevilay",
    age: 40,
  },
];

/* 
push
map
find
filter
some
every
includes
*/

//PUSH --------------------------------------
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

//MAP ---------------------------------------
// users.map((item) => {
//   //   console.log(item);
//   console.log(item.name);
// });

// FIND -------------------------------------
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);

//FILTER -------------------------------------
// const filtered = users.filter(
//   //   (item) => item.name === "Mehmet" && item.age < 20
//   ({ name, age }) => name === "Mehmet" && age < 20
// );
// console.log(filtered);

//SOME ---------------------------------------
// const some = users.some((item) => item.age === 11);
// console.log(some);

//EVERY ---------------------------------------
// const every = users.every((item) => item.age > 20);
// console.log(every);

//INCLUDES ------------------------------------
// const meyveler = ["elma", "armut", "muz", "limon"];
// const isIncluded = meyveler.includes("portakal");
// console.log(isIncluded);
