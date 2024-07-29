function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.';
  } else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet(460));

function ternaryCheckCity(city){
  // Write your code here!
return city==='NYC' ? "Ok, sounds good.": "No go."
       
}
console.log(ternaryCheckCity('NYC'));



function switchOnCharmFromTip(message) {
  // Write your code here!
  let tipMessage;
  
  switch (message) {
      case 'generous':
          tipMessage = 'Thank you so much.';
          break;
      case 'not as generous':
          tipMessage = 'Thank you.';
          break;
      default: 
          tipMessage = 'Bye.';
          break;
  }
  
  return tipMessage;
}

console.log(switchOnCharmFromTip('generous'));


