#!/usr/bin/env node

import UserInput from "./user_input.js";
import TimeCalculator from "./time_calculator.js";

const userInput = new UserInput();
const timeCalculator = new TimeCalculator();

const departureCity = await userInput.selectDepartureCity();
const arrivalCity = await userInput.selectArrivalCity(departureCity);
const departureDateTime = await userInput.inputDepartureDateTime();

let inputFlightTime = null;
const flightTimeKnown = await userInput.askFlightTimeKnown();
if (flightTimeKnown) {
  inputFlightTime = await userInput.inputFlightTime();
}

const arrivalDetails = await timeCalculator.calcArrivalDateTime(
  departureCity,
  arrivalCity,
  departureDateTime,
  inputFlightTime,
);

const timeDifference = timeCalculator.calcTimeDifference(
  departureCity,
  arrivalCity,
  departureDateTime,
);

console.log(`出発: ${departureCity} - ${departureDateTime} ※現地時間`);
console.log(
  `到着: ${arrivalCity} - ${arrivalDetails.arrivalDateTime} ※現地時間`,
);
console.log(
  `フライト時間: ${arrivalDetails.flightTime.hours}時間${arrivalDetails.flightTime.minutes}分`,
);

console.log(`時差(${departureCity} → ${arrivalCity}): ${timeDifference}時間`);
