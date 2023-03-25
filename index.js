function writeCards(namesArray, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
  } 
const cards = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(cards);

function countDown(num){
    for (let i = num; i >= 0;i--){
        console.log(i);
    }
}