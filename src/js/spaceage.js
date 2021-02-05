export default class GalaxyAge {
  constructor(age) {
    this.age = age;
    this.ageLimit = 80;
  }



  Mercury() {
    this.age = Math.floor(this.age * .24);
    return this.age;
  }
  Venus() {
    this.age = Math.floor(this.age * .62);
    return this.age;
  }
  Mars() {
    this.age = Math.floor(this.age * 1.88); //adding in Math.floor to round down to 18
    return this.age;
  }
  Jupiter() {
    this.age = Math.floor(this.age * 11.86);
    return this.age;
  }



  lifeExpectency() {
    let posDif = (this.ageLimit - this.age);
    let negDif = Math.abs(this.age - this.ageLimit);

  }
}
// let dif = Math.abs(this.age - this.ageLimit)
// console.log(dif);