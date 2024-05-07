"use strict";

const hours = 50;
const wage = 10;
let pay = 0;

if (hours <= 40) {
  pay = hours * wage;
} else if (hours > 40) {
  const overTime = hours - 40;
  const overTimeRate = wage * 1.5;
  pay = wage * 40 + overTime * overTimeRate;
}

console.log(`Total paycheck is ${pay}`);

const million = 1000000;

const weekstToEarnAMillion = Math.ceil(million / pay);
console.log(
  `With wage $${wage} and hours ${hours} it will take ${weekstToEarnAMillion} weeks to earn a million.`
);
