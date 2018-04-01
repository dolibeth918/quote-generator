const quotes = [
    "<q>People get built different. We don't need to figure it out, we just need to respect it.</q></br>-Princess Bubblegum",
    "Sucking at something is the first step towards being sorta good at something. </br>-Jake the Dog",
    "Something weird might just be something familiar viewed from a different angle. </br>-Marcy the Vampire",
    "Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you. </br>-Tyrion Lannister",
    "A mind needs books as a sword needs a whetstone if it is to keep its edge. </br>-Tyrion Lannister",
    "In my experience eloquent men are right every bit as often as imbeciles. </br>-Tyrion Lannister",
    "Weddings are basically funerals with cake. </br>-Rick Sanchez",
    "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. </br>-Morty Smith",
    "I find your lack of faith disturbing. </br>-Darth Vader",
    "Never tell me the odds! </br>-Han Solo" ,
    "Do. Or do not. There is no try. </br>-Yoda",
    "The force is strong with this one. </br>-Darth Vader",
    "What, so everyone's supposed to sleep every single night now? Y-you realize that nighttime makes up half of all time? </br>-Rick Sanchez",
    "Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it.</br>-Albus Dumbledore"
];

function generateQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = document.getElementById('displayQuote').innerHTML = quotes[randomIndex];
}