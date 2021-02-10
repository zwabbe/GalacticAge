import $ from 'jquery';

export default class Venus {
    constructor(age){
        this.age= age;
        this.ageLimit= 70;
    }
    

venusAge() {
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
}