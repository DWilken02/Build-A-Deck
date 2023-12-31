window.onload = () => {
  const deckElement = document.querySelector('#deck');
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  const deck = [];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push(rank + " of " + suit);
    });
  });
  deck.forEach(function(card){
    const liElement = document.createElement("li");
    liElement.append(card);
    deckElement.append(liElement);
  })
}