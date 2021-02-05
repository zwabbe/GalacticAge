import { TestScheduler } from "jest";
import GalaxyAge from '../src/js/spaceage.js';

describe('GalaxyAge', () => {

  let GalaxyAges;

  beforeEach(() => {
    age = new GalaxyAge(10);
  });

  test('should return the age entered into field', () => {
    expect(GalaxyAge.age).toEqual(10);
  });
});