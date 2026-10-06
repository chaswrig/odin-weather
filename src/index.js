// src/index.js
import "./styles.css";
import { weatherLoader } from "./weather_loader.js";
import { gifLoader } from "./gif_loader.js";

//Basic skeleton. API implementation will be added to the specific modules

const weatherBtn = document.getElementById("weather-btn");
weatherBtn.addEventListener("click", async () => {
    let weather = await weatherLoader(78254);
    weatherBtn.textContent = weather;
    const image = document.getElementById("gif");
    image.src = await gifLoader(weather);
});
