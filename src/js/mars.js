import $ from 'jquery';

export default class Mars {
    constructor(age){
        this.age= age;
        this.ageLimit= 70;
    }
    

marsAge() {
    const ageMars = Math.floor(this.age * 1.88);
    if(ageMars < this.ageLimit){
      let postResult= (this.ageLimit-ageMars);
      $("#mars").text(`You would have ${ postResult } year's left on Mars!`)
    }
    else {
      let postResult = (ageMars-this.ageLimit);
      $("#mars").text(`you would of died ${ postResult } years ago on Mars`)
  }
    return ageMars;
  }
}