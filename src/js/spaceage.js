export default class GalaxyAge {
  constructor(age) {
    this.age = age;
    return this.age;
  }

  Mercury() {
    this.age = (this.age * .24);
    return this.age;
  }
  Venus() {
    this.age = (this.age * .62);
    return this.age;
  }
  Mars() {
    this.age = Math.floor(this.age * 1.88); //adding in Math.floor to round down to 18
    return this.age;
  }
  Jupiter() {
    this.age = (this.age * 11.86);
    return this.age;
  }
}