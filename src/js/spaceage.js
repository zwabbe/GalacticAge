import $ from 'jquery';



export default class GalaxyAge {
  constructor(age) {
    this.age = age;
    this.ageLimit = 70;
  }

  Venus() {
    const ageVenus = Math.floor(this.age * .62);
    if(ageVenus < this.ageLimit){
      let postResult= (this.ageLimit-ageVenus);
      $("#venus").text(`You would have ${ postResult } year's left on Venus!`);
    }
    else {
      let postResult = (ageVenus-this.ageLimit);
      $("#venus").text(`you would of died ${ postResult } years ago on Venus`);
  }
    return ageVenus;
  }
  Mercury() {

    const ageMercury = Math.floor(this.age * .24);
    if (ageMercury < this.ageLimit) {
      let postResult = (this.ageLimit - ageMercury);
      $("#mercury").text(`Your current lifestyle would put your avg life span at ${this.ageLimit}, You would have ${postResult} year's left on Mercury!`)
    }
    else {
      let postResult = (ageMercury - this.ageLimit);
      $("#mercury").text(`you would of died ${postResult} years ago on Mercury`);
    }
    return ageMercury;
  }

  Mars() {
    const ageMars = Math.floor(this.age * 1.88);
    if (ageMars < this.ageLimit) {
      let postResult = (this.ageLimit - ageMars);
      $("#mars").text(`You would have ${postResult} year's left on Mars!`)
    }
    else {
      let postResult = (ageMars - this.ageLimit);
      $("#mars").text(`you would of died ${postResult} years ago on Mars`)
    }
    return ageMars;
  }


  Jupiter() {
    const ageJupiter = Math.floor(this.age * 11.86);
    if (ageJupiter < this.ageLimit) {
      let postResult = (this.ageLimit - ageJupiter);
      $("#jupiter").text(`You would have ${postResult} year's left on Jupiter!`)
    }
    else {
      let postResult = (ageJupiter - this.ageLimit);
      $("#jupiter").text(`you would of died ${postResult} years ago on Jupiter`)
    }
    return ageJupiter;
  }
}





