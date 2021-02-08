window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    // return array of card badges for the given card
    return t.card('coordinates')
    .then(function(card) {
      console.log(card);
    if (card.coordinates) {
      const { latitude, longtidue } = card.coordinates;
      // card has location, so let's fetch the current weather
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtidue}&appid=%%APP_ID%%`)
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherData) {
        return[{
          text: weatherData.main.temp.toString()
        },{
          text: weatherData.wind.speed.toString()
        }]
      });
    }
    return [];
    })
  }
});
