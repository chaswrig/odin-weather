import { getKey } from "./weather_key.js";

export async function weatherLoader(zipCode) {
  let temp = 0.0;
  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipCode}?key=${getKey()}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.currentConditions.temp);
    temp = response.currentConditions.temp
  })

  return temp;
}