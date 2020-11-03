//get h1 from the HTML
const answer = document.querySelector('#answer');

//get today's date
const today = new Date();

//this function checks to see if the current day is Friday
function checkForFriday(currentDate){
  if(currentDate.getDay() === 6){
    answer.innerHTML = "YES :)"
  } else {
    answer.innerHTML = "NO :("
  }
} //end of checkForFriday

checkForFriday(today);
