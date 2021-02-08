import $ from 'jquery';
import GalaxyAge from './js/spaceage.js';
import Mercury from './js/mercury.js';




$("#ageInputField").submit(function(event) {
  event.preventDefault();
  const age = $("#textField").val();
  
  const newAge = new GalaxyAge(age);
  const mercury = new Mercury(age);
  mercury.mercuryAge();
  newAge.Venus();
  // newAge.lifeExpectency();
  // newAge.Mars();
  // // newAge.Jupiter();
  // $("#showHere").text(newAge.Venus());

});