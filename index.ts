// Question 1
// Install Node.js, TypeScript and VS Code on your computer

// Question 2
console.log("This is staring of Assignment");
const personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Question 3
const personName1: string = "azeem babar is great man";
const toTitleCase = (inputString: string) =>
  inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
const titleCaseOutput = toTitleCase(personName1);
console.log(titleCaseOutput);

// Question 4
const quote: string = 'A person who never made a mistake never tried anything new.';
const author: string = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// Question 5
const famous_person: string = 'Albert Einstein';
const message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

// Question 6
const nameWithWhitespace: string = '\t   John Doe  \n';
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// Question 7, 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Question 9
const favoriteNumber: number = 42;
console.log(`My favorite number is ${favoriteNumber}`);

// Question 10
// Program 1: This program calculates the sum of two numbers
const num1: number = 5;
const num2: number = 3;
console.log(num1 + num2);

// Program 2: This program checks if a given number is even or odd
const number: number = 17;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Question 11
const names: string[] = ["John", "Jane", "Alice"];
names.forEach((personName) => console.log(personName));

// Question 12
const names1: string[] = ["John", "Jane", "Alice"];
names1.forEach((personName) => console.log(`Hello ${personName}, it's nice to see you.`));

// Question 13
const transportation: string[] = ["car", "motorcycle", "bicycle"];
transportation.forEach((item) => console.log(`I would like to own a ${item}.`));

// Question 14
const guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner. Please join us.`));

// Question 15
const guests1: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log(`${guests1[1]} can't make it to dinner.`);

guests[1] = "Isaac Newton";

guests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`));

// Question 16
const guests2: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log("Good news! We found a bigger dinner table.");

guests2.unshift("Isaac Newton");
guests2.splice(2, 0, "Galileo Galilei");
guests2.push("Leonardo da Vinci");

guests2.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner. Please join us.`));

// Question 17
const guests3: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log("We apologize, but the new dinner table won't arrive in time for the dinner.");

console.log("We can only invite two guests for dinner.");

while (guests3.length > 2) {
  const removedGuest = guests3.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

guests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`));

guests.length = 0;
console.log(guests);

// Question 18
const placesToVisit: string[] = ["Paris", "Tokyo", "Cairo", "New York", "Rome"];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());

console.log("Original order (still):");
console.log(placesToVisit);

console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

console.log("Original order (still):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Original order (reversed again):");
console.log(placesToVisit);

console.log("Sorted order:");
console.log(placesToVisit.slice().sort());

console.log("Reverse sorted order:");
console.log(placesToVisit.slice().sort().reverse());

// Question 19
const dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log(`The number of people invited to dinner is ${dinnerGuests.length}.`);

// Question 20
const items: string[] = ["mountains", "rivers", "countries", "cities", "languages"];

// Array of items
console.log(items);

// Array of TypeScript objects
const objects: { [key: string]: string }[] = [
  { name: "mountains" },
  { name: "rivers" },
  { name: "countries" },
  { name: "cities" },
  { name: "languages" },
];
console.log(objects);

// Question 21
console.log(items[10]); // This will throw an "index out of bounds" error

// Question 22
const car: string = "subaru";
console.log(`Is car == 'subaru'? I predict ${car == "subaru"}.`);

// Add more conditional tests...

// Question 23
const car1: string = "Subaru";
console.log(car1 == "subaru");
console.log(car1.toLowerCase() == "subaru");

// Add more conditional tests...

// Question 24
const alienColor: string = "green";

if (alienColor === "green") {
  console.log("The player just earned 5 points.");
}

// Add another version of this program that fails the if test

// Question 25
const alienColor1: string = "green";

if (alienColor1 === "green") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

// Add another version of this program that runs the else block

// Question 26
const alienColor2: string = "yellow";

if (alienColor2 === "green") {
  console.log("The player just earned 5 points.");
} else if (alienColor2 === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alienColor2 === "red") {
  console.log("The player just earned 15 points.");
}

// Add three versions of this program, one for each color

// Question 28
const age: number = 25;

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

// Question 29
const favoriteFruits: string[] = ["banana", "apple", "orange"];

if (favoriteFruits.includes("banana")) {
  console.log("You really like bananas!");
}

// Add more if statements for other fruits

// Question 30
const userName1: string[] = ["admin", "user1", "user2", "user3", "user4"];

userName1.forEach((name) => {
  if (name === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
});

// Question 31
const userName: string[] = ["admin", "user1", "user2", "user3", "user4"];

if (userName.length === 0) {
  console.log("We need to find some users!");
}

// Remove all usernames from the array and check the message

// Question 32
const currentUsers: string[] = ["User1", "user2", "user3"];
const newUsers: string[] = ["user1", "user4", "user5"];

const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());

newUsers.forEach((user) => {
  const lowercaseUser = user.toLowerCase();
  if (lowercaseCurrentUsers.includes(lowercaseUser)) {
    console.log(`Sorry, ${user}, you will need to enter a new username.`);
  } else {
    console.log(`Congratulations, ${user}, your username is available.`);
  }
});


// Question 33
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let ending: string;
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

// Question 34
const pizzaNames: string[] = ["fageta", "malai-boti", "veggie"];

pizzaNames.forEach((pizzaName) => {
  console.log(`I like ${pizzaName} pizza.`);
});

console.log("I really love pizza!");

// Question 35
const animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});

console.log("Any of these animals would make a great pet!");

// Question 36
function make_shirt1(size: string, message: string) {
  console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt1("L", "I love TypeScript");
make_shirt1("M", "Hello World!");
make_shirt1("S", "Coding is fun!");

// Question 37
function make_shirt(size: string = "L", message: string = "I love TypeScript") {
  console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt();
make_shirt("M");
make_shirt("S", "Hello World!");

// Question 38
function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// Question 39
function city_country(city: string, country: string): string {
  return `${city}, ${country}.`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

// Question 40
const make_album = (artist: string, title: string) => ({ artist, title });

const album11 = make_album("Artist 1", "Album 1");
const album21 = make_album("Artist 2", "Album 2");
const album31 = make_album("Artist 3", "Album 3");

console.log(album11);
console.log(album21);
console.log(album31);

// Question 41
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const show_magicians = (names: string[]):void => {
  names.forEach(name => console.log(name))
}

show_magicians(magicians);


// Question 42

const make_great = (magicians: string[]):string[] => {
  return magicians.map((magician) => magician + " the Great");
}
const magicians1: string[] = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians1: string[] = make_great(magicians1);
console.log(greatMagicians1);


// Question 43
const make_great2 = (names: string[]): string[] => names.map(name => `Great ${name}`);
const show_magicians2 = (names: string[]): void => names.forEach(name => console.log(name));
const greatMagicians: string[] = make_great2([...magicians]);
const originalMagicians: string[] = [...magicians];
console.log("Original Magicians:");
show_magicians2(originalMagicians);

// Question 44
const orderSandwich = (...items: string[]): void => {
  console.log("Sandwich Order:");
  console.log(items.length === 0 ? "No items selected." : `Items: ${items.join(", ")}`);
  console.log("=====================");
};

orderSandwich("Lettuce", "Tomato", "Cheese");
orderSandwich("Turkey", "Bacon");
orderSandwich("Avocado");
orderSandwich(); // No items selected

// Question 45
function carInfo(manufacturer: string, model: string, options: { [key: string]: string }) {
  const car: { [key: string]: string } = {
    manufacturer: manufacturer,
    model: model,
  };

  Object.assign(car, options);

  console.log(car);
}

carInfo("Honda", "Civic", { color: "blue", features: "GPS, Bluetooth" });
carInfo("Toyota", "Corolla", { color: "red", features: "Backup camera" });

console.log("This is End of Document")
