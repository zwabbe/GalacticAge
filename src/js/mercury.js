import $ from 'jquery';

export default class Mercury {
constructor(age){
    this.age= age;
    this.ageLimit= 70;
}

mercuryAge(){

    const ageMercury = Math.floor(this.age * .24);
    if(ageMercury < this.ageLimit){
      let postResult= (this.ageLimit - ageMercury);
      $("#mercury").text(`Your current lifestyle would put your avg life span at ${ this.ageLimit }, You would have ${ postResult } year's left on Mercury!`)
    }
    else {
      let postResult = (ageMercury-this.ageLimit);
      $("#mercury").text(`you would of died ${ postResult } years ago on Mercury`);
  }
    return ageMercury;
  }
}
