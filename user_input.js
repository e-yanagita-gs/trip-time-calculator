import Enquirer from "enquirer";
import cities from "./cities_list.js";
import { DateTime } from "luxon";

const { prompt } = Enquirer;

export default class UserInput {
  constructor() {
    this.cities = Object.keys(cities);
  }

  async selectDepartureCity() {
    const response = await prompt({
      type: "select",
      name: "departure_city",
      message: "出発地を選んでください:",
      choices: this.cities,
    });
    return response.departure_city;
  }

  async selectArrivalCity(departureCity) {
    const response = await prompt({
      type: "select",
      name: "arrival_city",
      message: "到着地を選んでください:",
      choices: this.cities.filter((city) => city.name !== departureCity),
    });
    return response.arrival_city;
  }

  async inputDepartureDateTime() {
    const response = await prompt({
      type: "input",
      name: "departure_date",
      message: "出発日時を入力(YYYY/MM/DD HH:MM):",
      validate: (value) => {
        const dateTime = DateTime.fromFormat(value, "yyyy/MM/dd HH:mm");
        return (
          dateTime.isValid ||
          "YYYY/MM/DD HH:MM 形式で有効な日時を入力してください"
        );
      },
    });
    return response.departure_date;
  }

  async askFlightTimeKnown() {
    const response = await prompt({
      type: "select",
      name: "flight_time_known",
      message: "フライト時間はわかりますか？",
      choices: ["はい", "いいえ※おおよその所用時間を使用します"],
    });
    return response.flight_time_known === "はい";
  }

  async inputFlightTime() {
    const response = await prompt({
      type: "input",
      name: "flight_time",
      message: "フライト時間を入力(時間:分):",
      validate: (value) => {
        const timePattern = /^\d{1,2}:\d{2}$/;
        return (
          timePattern.test(value) || "時:分 形式で有効な時間を入力してください"
        );
      },
    });
    return response.flight_time;
  }
}
