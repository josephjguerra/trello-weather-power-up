console.log('Hello Trello!');

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    // return array of card badges for the given card
    return [];
  }
});
