import cities from "./cities_list.js";
import flightTime from "./flight_times_list.js";
import { DateTime } from "luxon";

export default class TimeCalculator {
  calcArrivalDateTime(
    departureCity,
    arrivalCity,
    departureDateTime,
    inputFlightTime,
  ) {
    const flightDuration = this.#getFlightDuration(
      departureCity,
      arrivalCity,
      inputFlightTime,
    );
    const departureDateTimeObj = this.#getDepartureDateTime(
      departureCity,
      departureDateTime,
    );
    const arrivalDateTimeObj = this.#getArrivalDateTimeObj(
      departureDateTimeObj,
      flightDuration,
      arrivalCity,
    );

    return {
      arrivalDateTime: arrivalDateTimeObj.toFormat("yyyy/MM/dd HH:mm"),
      flightTime: flightDuration,
    };
  }

  calcTimeDifference(departureCity, arrivalCity, departureDateTime) {
    const baseDateTime = DateTime.fromFormat(
      departureDateTime,
      "yyyy/MM/dd HH:mm",
      {
        zone: cities[departureCity],
      },
    );

    const departureTime = baseDateTime.setZone(cities[departureCity]);
    const arrivalTime = baseDateTime.setZone(cities[arrivalCity]);

    const diffInHours = arrivalTime.offset - departureTime.offset;

    return diffInHours / 60;
  }

  #getFlightDuration(departureCity, arrivalCity, inputFlightTime) {
    if (inputFlightTime) {
      const [hours, minutes] = inputFlightTime.split(":").map(Number);
      return { hours, minutes };
    } else {
      const flightKey = `${departureCity}-${arrivalCity}`;
      return flightTime[flightKey];
    }
  }

  #getDepartureDateTime(departureCity, departureDateTime) {
    return DateTime.fromFormat(departureDateTime, "yyyy/MM/dd HH:mm", {
      zone: cities[departureCity],
    });
  }

  #getArrivalDateTimeObj(departureDateTimeObj, flightDuration, arrivalCity) {
    return departureDateTimeObj
      .plus({ minutes: flightDuration.hours * 60 + flightDuration.minutes })
      .setZone(cities[arrivalCity]);
  }
}
