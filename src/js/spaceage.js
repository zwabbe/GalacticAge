export default class GalaxyAge {
  constructor(age) {
    this.age = age;
  }

  Mercury() {
    this.age = (this.age * .24)
    return this.age;
  }


}