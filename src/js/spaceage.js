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

}