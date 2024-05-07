"use strict";

const fullName = "Yulia Hernandez";
const age = 29;
const birthday = "September 21";
const pineapplePizza = true;
const lifeEvent = [
  "I was born in Russia",
  "I lived in China for a year.",
  "I worked as a nanny.",
  "I love going to Disneyland.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I don't like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvent.length; i++) {
  console.log(lifeEvent[i]);
}

let counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter += 1;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter += 1;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
