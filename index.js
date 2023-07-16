
// Question 1
const name = "Eric";
console.log(`Hello ${name}, would you like to learn some Python today?`);

// Question 2
const personName = "John Smith";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// Question 3
const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// Question 4
const famousPerson = 'Albert Einstein';
const message = `Hello ${famousPerson}, would you like to learn some Python today?`;
console.log(message);

// Question 5
const personNameWithWhitespace = "\t  John Doe\n";
console.log(personNameWithWhitespace);
console.log(personNameWithWhitespace.trim());

// Question 6
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

// Question 7
const favoriteNumber = 42;
console.log(`My favorite number is ${favoriteNumber}.`);

// Question 8
// Adding comments to two programs:
// Program 1: Calculates the area of a rectangle
const length = 5;
const width = 3;
const area = length * width;
console.log(`The area of the rectangle is ${area}.`);

// Program 2: Converts temperature from Celsius to Fahrenheit
const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);

// Question 9
const names = ['John', 'Jane', 'Alice'];
names.forEach((name) => {
  console.log(name);
});

// Question 10
const greetings = 'Hello, ';
names.forEach((name) => {
  console.log(greetings + name + '!');
});

// Question 11
const transportationModes = ['car', 'motorcycle', 'bicycle'];
transportationModes.forEach((mode) => {
  console.log(`I would like to own a ${mode}.`);
});

// Question 12
const dinnerGuests = ['Albert Einstein', 'Isaac Newton', 'Marie Curie'];
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please RSVP.`);
});

// Question 13
console.log(`${dinnerGuests[1]} can't make it to dinner.`);
dinnerGuests[1] = 'Nikola Tesla';
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please RSVP.`);
});

// Question 14
console.log('Good news! The dinner table got bigger.');
const additionalGuests = ['Galileo Galilei', 'Charles Darwin', 'Ada Lovelace'];
dinnerGuests.push(...additionalGuests);
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please RSVP.`);
});

// Question 15
console.log('Unfortunately, the dinner table will not arrive on time.');
console.log('We can only invite two guests for dinner.');
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
dinnerGuests.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner. Please RSVP.`);
});
dinnerGuests.length = 0;
console.log(dinnerGuests);

// Question 16
const placesToVisit = ['Paris', 'Tokyo', 'Rome', 'New York', 'Sydney'];
console.log('Original order:');
console.log(placesToVisit);
console.log('Alphabetical order:');
console.log(placesToVisit.sort());
console.log('Original order:');
console.log(placesToVisit);
console.log('Reverse alphabetical order:');
console.log(placesToVisit.reverse());
console.log('Original order:');
console.log(placesToVisit);
console.log('Reversed order:');
console.log(placesToVisit.reverse());
console.log('Alphabetical order:');
console.log(placesToVisit.sort());

// Question 17
const dinnerGuestCount = dinnerGuests.length;
console.log(`There are ${dinnerGuestCount} people invited to dinner.`);

// Question 18
const items = ['mountain', 'river', 'country', 'city', 'language'];
console.log(items);

// Question 19
const favoriteThings = {
  mountains: ['Mount Everest', 'Mount Kilimanjaro'],
  rivers: ['Amazon River', 'Nile River'],
  countries: ['Italy', 'Australia'],
  cities: ['Paris', 'Tokyo'],
  languages: ['Spanish', 'Mandarin'],
};
console.log(favoriteThings);

// Question 20
// Intentional error:
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[3]); // Accessing an index that doesn't exist

// Question 21
console.log("Conditional tests:");
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');
console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);
console.log("Is 10 < 7? I predict False.");
console.log(10 < 7);
console.log("Is 4 === 4? I predict True.");
console.log(4 === 4);
console.log("Is 2 !== 2? I predict False.");
console.log(2 !== 2);
console.log("Is 'apple' === 'orange'? I predict False.");
console.log('apple' === 'orange');
console.log("Is 'cat' !== 'dog'? I predict True.");
console.log('cat' !== 'dog');
console.log("Is 'apple' !== 'banana' && 5 > 2? I predict True.");
console.log('apple' !== 'banana' && 5 > 2);
console.log("Is 'orange' === 'apple' || 10 < 5? I predict False.");
console.log('orange' === 'apple' || 10 < 5);
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));
console.log("Is 'kiwi' in fruits? I predict False.");
console.log(fruits.includes('kiwi'));

// Question 22
const alienColor = 'green';
if (alienColor === 'green') {
  console.log('You just earned 5 points!');
}

// Question 23
const alienColor1 = 'red';
if (alienColor1 === 'green') {
  console.log('You just earned 5 points for shooting the alien.');
} else {
  console.log('You just earned 10 points!');
}

// Question 24
const alienColor2 = 'yellow';
if (alienColor2 === 'green') {
  console.log('You just earned 5 points!');
} else if (alienColor2 === 'yellow') {
  console.log('You just earned 10 points!');
}

// Question 25
const age = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Question 26
const favoriteFruits = ["banana", "apple", "orange"];

if (favoriteFruits.includes("banana")) {
  console.log("You really like bananas!");
}

// Add more if statements for other fruits

// Question 27
const userName1 = ["admin", "user1", "user2", "user3", "user4"];

userName1.forEach((name) => {
  if (name === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
});

// Question 28
const userName = ["admin", "user1", "user2", "user3", "user4"];

if (userName.length === 0) {
  console.log("We need to find some users!");
}

// Remove all usernames from the array and check the message

// Question 29
const currentUsers = ["user1", "user2", "user3"];
const newUsers = ["user2", "user4", "user5"];

newUsers.forEach((user) => {
  if (currentUsers.includes(user)) {
    console.log(`Sorry, ${user}, you will need to enter a new username.`);
  } else {
    console.log(`Congratulations, ${user}, your username is available.`);
  }
});

// Question 30
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let ending;
  switch (number) {
    case 1:
      ending = "st";
      break;
    case 2:
      ending = "nd";
      break;
    case 3:
      ending = "rd";
      break;
    default:
      ending = "th";
  }
  console.log(`${number}${ending}`);
});

// Question 31
const pizzaNames = ["pepperoni", "margherita", "veggie"];

pizzaNames.forEach((pizzaName) => {
  console.log(`I like ${pizzaName} pizza.`);
});

console.log("I really love pizza!");

// Question 32
const animals = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});

console.log("Any of these animals would make a great pet!");

// Question 33
function make_shirt1(size, message) {
  console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt1("L", "I love TypeScript");
make_shirt1("M", "Hello World!");
make_shirt1("S", "Coding is fun!");

// Question 34
function make_shirt(size = "L", message = "I love TypeScript") {
  console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt();
make_shirt("M");
make_shirt("S", "Hello World!");

// Question 35
function describe_city(city, country = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// Question 36
function city_country(city, country) {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

// Question 37
function make_album(artist, title) {
  return {
    artist: artist,
    title: title,
  };
}

const album11 = make_album("Artist 1", "Album 1");
const album21 = make_album("Artist 2", "Album 2");
const album31 = make_album("Artist 3", "Album 3");

console.log(album11);
console.log(album21);
console.log(album31);

// Question 38
function make_album1(artist, title, tracks) {
  const album = {
    artist: artist,
    title: title,
  };

  return album;
}

const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2");

console.log(album1);
console.log(album2);

// Question 39
function show_magicians(magicians) {
  magicians.forEach((magician) => console.log(magician));
}

const magicians = ["Magician 1", "Magician 2", "Magician 3"];
show_magicians(magicians);

// Question 40
function make_great(magicians) {
  return magicians.map((magician) => magician + " the Great");
}

const magicians1 = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians1 = make_great(magicians1);
show_magicians(greatMagicians1);

// Question 41
function make_great1(magicians) {
  return magicians.map((magician) => magician + " the Great");
}

const magicians2 = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians = make_great([...magicians2]);
show_magicians(magicians2);
show_magicians(greatMagicians);

// Question 42
function sandwich(...ingredients) {
  console.log(`You ordered a sandwich with ${ingredients.join(", ")}.`);
}

sandwich("bread", "lettuce", "tomato");
sandwich("bread", "cheese", "ham", "mayo", "mustard");
sandwich("bread", "peanut butter", "jelly");

// Question 43
function carInfo(manufacturer, model, options) {
  const car = {
    manufacturer: manufacturer,
    model: model,
  };

  Object.assign(car, options);

  console.log(car);
}

carInfo("Honda", "Civic", { color: "blue", features: "GPS, Bluetooth" });
carInfo("Toyota", "Corolla", { color: "red", features: "Backup camera" });
