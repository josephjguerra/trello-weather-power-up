window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    // return array of card badges for the given card
    return t.card('all')
    .then(function(card) {
      console.log(card);
    })
  }
});
