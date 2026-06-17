async function getWeather()
{
    let city = document.getElementById("city").value;

    let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY=${city}&aqi=no`
    );

    let data = await response.json();

    document.getElementById("cityname").innerHTML =
        "City: " + data.location.name;

    document.getElementById("temperature").innerHTML =
        "Temperature: " + data.current.temp_c + " °C";

    document.getElementById("humidity").innerHTML =
        "Humidity: " + data.current.humidity + "%";

    document.getElementById("condition").innerHTML =
        "Condition: " + data.current.condition.text;
}