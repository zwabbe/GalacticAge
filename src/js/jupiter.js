import $ from 'jquery';


export default class Jupiter {
    constructor(age) {
      this.age = age;
      this.ageLimit = 70;
    }
   
  
jupiterAge() {
    const ageJupiter = Math.floor(this.age * 11.86);
    if(ageJupiter < this.ageLimit){
      let postResult= (this.ageLimit-ageJupiter);
      $("#jupiter").text(`You would have ${ postResult } year's left on Jupiter!`)
    }
    else {
      let postResult = (ageJupiter-this.ageLimit);
      $("#jupiter").text(`you would of died ${ postResult } years ago on Jupiter`)
  }
    return ageJupiter;
  }
}