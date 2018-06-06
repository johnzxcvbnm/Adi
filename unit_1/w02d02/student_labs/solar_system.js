const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// console.log(solarSystem[0].ringSystem);
// console.log(solarSystem[4].moons);
// console.log(solarSystem[7].moons[1]);

// solarSystem[1].moons.push("Endor");
// console.log(solarSystem[1].moons);

// solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"]});
// console.log(solarSystem);
// console.log(solarSystem[8].ringSystem);

// solarSystem[2].diameter = 5000;
// console.log(solarSystem[2]);
// solarSystem[0].ringSystem = true;
// console.log(solarSystem[0].ringSystem);


//Both loops do the samething, just different ways to do the samething
// for(let i = 0; i < solarSystem.length; i++){
//   if(solarSystem[i].ringSystem){
//     console.log(solarSystem[i]);
//   }
// }
//
// for(let planet of solarSystem){
//   if(planet.ringSystem){
//     console.log(planet);
//   }
// }

const system = {
  Mercury:
   { radiusp: 'same ',
     name: 'Mercury',
     density: 5.43,
     tilt: 2,
     image: 'textures/mercury.gif',
     rotationperiod: 1408,
     period: 0.24,
     radiuse: 2439,
     satellites: 0,
     au: 0.3871,
     eccentricity: 0.206,
     velocity: 47.89,
     mass: 0.06,
     inclination: 7 },
  Venus:
   { radiusp: 'same ',
     name: 'Venus',
     density: 5.25,
     tilt: 177.3,
     image: 'textures/venus.gif',
     rotationperiod: 5832,
     period: 0.62,
     radiuse: 6052,
     satellites: 0,
     au: 0.7233,
     eccentricity: 0.007,
     velocity: 35.04,
     mass: 0.82,
     inclination: 3.4 },
  Earth:
   { radiusp: 6357,
     name: 'Earth',
     density: 5.52,
     tilt: 23.45,
     image: 'textures/earth.gif',
     rotationperiod: 23.93,
     period: 1,
     radiuse: 6378,
     satellites: 1,
     au: 1,
     eccentricity: 0.017,
     velocity: 29.79,
     mass: 1,
     inclination: 0 },
  Mars:
   { radiusp: 3380,
     name: 'Mars',
     density: 3.95,
     tilt: 25.19,
     image: 'textures/mars.gif',
     rotationperiod: 24.62,
     period: 1.88,
     radiuse: 3397,
     satellites: 2,
     au: 1.524,
     eccentricity: 0.093,
     velocity: 24.14,
     mass: 0.11,
     inclination: 1.85 },
  Jupiter:
   { radiusp: 66854,
     name: 'Jupiter',
     density: 1.33,
     tilt: 3.12,
     image: 'textures/jupiter.gif',
     rotationperiod: 9.92,
     period: 11.86,
     radiuse: 71490,
     satellites: 69,
     au: 5.203,
     eccentricity: 0.048,
     velocity: 13.06,
     mass: 317.89,
     inclination: 1.3 },
  Saturn:
   { radiusp: 54360,
     name: 'Saturn',
     density: 0.69,
     tilt: 26.73,
     image: 'textures/saturn.gif',
     rotationperiod: 10.66,
     period: 29.46,
     radiuse: 60268,
     satellites: 30,
     au: 9.539,
     eccentricity: 0.056,
     velocity: 9.64,
     mass: 95.18,
     inclination: 2.49 },
  Uranus:
   { radiusp: 24973,
     name: 'Uranus',
     density: 1.29,
     tilt: 97.86,
     image: 'textures/uranus.gif',
     rotationperiod: 17.24,
     period: 84.01,
     radiuse: 25559,
     satellites: 24,
     au: 19.19,
     eccentricity: 0.046,
     velocity: 6.81,
     mass: 14.53,
     inclination: 0.77 },
  Neptune:
   { radiusp: 24340,
     name: 'Neptune',
     density: 1.64,
     tilt: 29.6,
     image: 'textures/neptune.gif',
     rotationperiod: 16.11,
     period: 164.79,
     radiuse: 25269,
     satellites: 8,
     au: 30.06,
     eccentricity: 0.01,
     velocity: 5.43,
     mass: 17.14,
     inclination: 1.77 },
  Pluto:
   { radiusp: 'same',
     name: 'Pluto',
     density: 2.03,
     tilt: 122.46,
     image: 'textures/pluto.gif',
     rotationperiod: 153.3,
     period: 248.54,
     radiuse: 1160,
     satellites: 1,
     au: 39.48,
     eccentricity: 0.248,
     velocity: 4.74,
     mass: 0.002,
     inclination: 17.15 }
}

// console.log(system.Mercury.mass);
// console.log(system.Venus.eccentricity);
// console.log(system.Jupiter.satellites +
//             system.Saturn.satellites +
//             system.Uranus.satellites +
//             system.Neptune.satellites);

// console.log(system.Mercury.radiusp);
//
// if(typeof(system.Mercury.radiusp) === "string"){
//   system.Mercury.radiusp = system.Mercury.radiuse;
// }
//
// console.log(system.Mercury.radiusp);

// let jupiterMoment = system.Jupiter.velocity * system.Jupiter.mass;
// let plutoMoment = system.Pluto.velocity * system.Pluto.mass;
//
// console.log(jupiterMoment);
// console.log(plutoMoment);
// console.log(jupiterMoment - plutoMoment);


const PlanetX =
 { radiusp: 2567,
   name: 'PlanetX',
   density: 5.43,
   tilt: 2,
   image: 'textures/mercury.gif',
   rotationperiod: 1408,
   period: 0.24,
   radiuse: 2439,
   satellites: 0,
   au: 0.3871,
   eccentricity: 0.206,
   velocity: 47.89,
   mass: 0.06,
   inclination: 7
 }

system.PlanetX = PlanetX;
 // console.log(system);


 const movies = [
                { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
                { title: "Eraserhead", director: "David Lynch", year: 1978 },
                { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
              ]

// console.log(movies);
// console.log("------------------");
// movies.sort(function(a, b) {
//   var nameA = a.title.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.title.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//
//   // names must be equal
//   return 0;
// });
// console.log(movies);


solarSystem.sort(function(a, b) {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
// console.log(solarSystem);

const sortArrayOfObjects = (arr, key) => {
  if(typeof(key) === "string"){
    arr.sort(function(a, b) {
      let nameA = a[key].toUpperCase(); // ignore upper and lowercase
      let nameB = b[key].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else {
      arr.sort(function(a, b) {
        return a - b;
      });
  }
  return arr;
}

// console.log(sortArrayOfObjects(movies, "year"));
