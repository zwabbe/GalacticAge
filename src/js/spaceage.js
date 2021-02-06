export default class GalaxyAge {
  constructor(age) {
    this.age = age;
    this.ageLimit = 80;
  }



  Mercury() {
    this.age = Math.floor(this.age * .24);
    this.lifeExpectency();
    return this.age;
  }
  Venus() {
    this.age = Math.floor(this.age * .62);
    return this.age;
  }
  Mars() {
    //adding in Math.floor to round down 
    this.age = Math.floor(this.age * 1.88);
    return this.age;
  }
  Jupiter() {
    this.age = Math.floor(this.age * 11.86);
    return this.age;
  }



  lifeExpectency() {
    if (this.age < this.ageLimit) {
      let posDif = (this.ageLimit - this.age);
      console.log("Do not worry spring chicken you still have "+ posDif + "years left!");
      return this.age;
    }else if (this.age > this.ageLimit) {
      let negDif = Math.abs(this.age - this.ageLimit);
      console.log("Unf you would of passsed away about "+negDif+" ago....");
      return this.age;
    }

    }
  }

// let dif = Math.abs(this.age - this.ageLimit)
// console.log(dif);