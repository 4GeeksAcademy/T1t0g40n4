import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() { 
  //write your code here
  

generateExcuse();
}
function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "wen I was praying"];
  
  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random()* action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random()*when.length);
  
  let excuse = `${who[whoExcuse]} ${action[actionExcuse]} ${what[whatExcuse]} ${when[whenExcuse]}.`;

  document.getElementById("excuse").innerHTML = excuse;
}