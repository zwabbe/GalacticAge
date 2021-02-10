import $ from 'jquery';
// import GalaxyAge from './js/spaceage.js';
import Mercury from './js/mercury.js';
import Mars from './js/mars.js';
import Venus from './js/venus.js';
import Jupiter from './js/jupiter.js';





$("#ageInputField").submit(function(event) {
  event.preventDefault();
  const age = $("#textField").val();
  

  const mercury = new Mercury(age);
  const mars = new Mars(age);
  const venus = new Venus(age);
  const jupiter = new Jupiter(age);
  
  mercury.mercuryAge();
  mars.marsAge();
  venus.venusAge();
  jupiter.jupiterAge();

});