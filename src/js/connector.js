window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    // return array of card badges for the given card
    return t.card('coordinates')
    .then(function(card) {
      console.log(card);
    if (card.coordinates) {
      const { latitude, longitude } = card.coordinates;
      // card has location, so let's fetch the current weather
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=%%APP_ID%%&units=imperial`)
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherData) {
        return[{
          text: `${Math.round(weatherData.main.temp)}°F`
        },{
          text: `🌬 ${Math.round(weatherData.wind.speed)} mph`
        },{
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          text: weatherData.weather[0].main
        }]
      });
    }
    return [];
    })
  }
});
