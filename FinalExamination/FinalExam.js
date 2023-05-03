//create array for cards
//objects in array should describe properties of cards
deck = []
pile = []
const cards = [
{value: 1 , suit: 'hearts', color:'red'},
{value: 2 , suit: 'hearts', color:'red'},
{value: 3 , suit: 'hearts', color:'red'},
{value: 4 , suit: 'hearts', color:'red'},
{value: 5 , suit: 'hearts', color:'red'},
{value: 6 , suit: 'hearts', color:'red'},
{value: 7 , suit: 'hearts', color:'red'},
{value: 8 , suit: 'hearts', color:'red'},
{value: 9 , suit: 'hearts', color:'red'},
{value: 10 , suit: 'hearts', color:'red'},
{value: 11 , suit: 'hearts', color:'red'},
{value: 12 , suit: 'hearts', color:'red'},
{value: 13 , suit: 'hearts', color:'red'},

{value: 1 , suit: 'diamonds', color:'red'},
{value: 2 , suit: 'diamonds', color:'red'},
{value: 3 , suit: 'diamonds', color:'red'},
{value: 4 , suit: 'diamonds', color:'red'},
{value: 5 , suit: 'diamonds', color:'red'},
{value: 6 , suit: 'diamonds', color:'red'},
{value: 7 , suit: 'diamonds', color:'red'},
{value: 8 , suit: 'diamonds', color:'red'},
{value: 9 , suit: 'diamonds', color:'red'},
{value: 10 , suit: 'diamonds', color:'red'},
{value: 11 , suit: 'diamonds', color:'red'},
{value: 12 , suit: 'diamonds', color:'red'},
{value: 13 , suit: 'diamonds', color:'red'},

{value: 1 , suit: 'spades', color:'black'},
{value: 2 , suit: 'spades', color:'black'},
{value: 3 , suit: 'spades', color:'black'},
{value: 4 , suit: 'spades', color:'black'},
{value: 5 , suit: 'spades', color:'black'},
{value: 6 , suit: 'spades', color:'black'},
{value: 7 , suit: 'spades', color:'black'},
{value: 8 , suit: 'spades', color:'black'},
{value: 9 , suit: 'spades', color:'black'},
{value: 10 , suit: 'spades', color:'black'},
{value: 11 , suit: 'spades', color:'black'},
{value: 12 , suit: 'spades', color:'black'},
{value: 13 , suit: 'spades', color:'black'},

{value: 1 , suit: 'clubs', color:'black'},
{value: 2 , suit: 'clubs', color:'black'},
{value: 3 , suit: 'clubs', color:'black'},
{value: 4 , suit: 'clubs', color:'black'},
{value: 5 , suit: 'clubs', color:'black'},
{value: 6 , suit: 'clubs', color:'black'},
{value: 7 , suit: 'clubs', color:'black'},
{value: 8 , suit: 'clubs', color:'black'},
{value: 9 , suit: 'clubs', color:'black'},
{value: 10 , suit: 'clubs', color:'black'},
{value: 11 , suit: 'clubs', color:'black'},
{value: 12 , suit: 'clubs', color:'black'},
{value: 13 , suit: 'clubs', color:'black'},]


// issues with null object on cardContainer
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer =
    document.querySelector('.card-container')
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.textContent = '${card.value} of ${card.suit}';
      cardElement.classList.add('card')
      cardElement.dataset.value = card.value
      cardElement.dataset.suit = card.suit
      cardElement.dataset.color = card.color
      
    
       cardContainer.appendChild(cardElement)
    })   
})
//need to create funtions for my listeners
//event.target possibly
//need event listeners
//dropzone needs to contained with dom function??
 cards = document.querySelectorAll('.card');
const dropZones =
document.querySelectorAll('.drop-zone')
cards.forEach(card => {
    card.addEventListener('dragstart',() => {
        card.classList.add('dragging')
    })
    card.addEventListener('dragend', () => {
        card.classList.remove('dragging')
    })
})

//check win or loss
//need to make check function for both
//need to determine if all cards make it to foundation

function checkWin(){
    if(foundationPiles.every(pile => pile.length === 13)){
        alert("congrats you've won!")
        restartGame()
    }
}
    function checkloss(){
        let 
    }


    // win loss rate
    //need local storage
