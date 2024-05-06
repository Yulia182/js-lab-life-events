"use strict";

const fullName = "Mitch Cuckovich";
const age = 25;
const birthday = "January 24";
const pineapplePizza = true;
const lifeEvent = [
  "I was born in Troy, Michigan.",
  "I went to Hope College.",
  "I participated in junior olympics when I was 10 years old.",
  "I love to be in nature.",
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

let counter = 0; //?
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
