import $ from 'jquery';
import GalaxyAge from './spaceage.js';
import './spaceage.js';



$("#ageInputField").submit(function(event) {
  event.preventDefault();
  let age = $("#textField").val();
  let newAge = new GalaxyAge(age);
  newAge.Mercury();
  //   newAge.Venus();
  //   newAge.Mars();
  //   newAge.Jupiter();
});