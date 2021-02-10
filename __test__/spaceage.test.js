import { TestScheduler } from "jest";
import GalaxyAge from '../src/js/spaceage.js';

describe('GalaxyAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalaxyAge(32);
  });

  test('should return the age entered into field', () => {
    expect(galacticAge.age).toEqual(32);
  });
  
  test('should take galacticAge and modify it with Mercury equation', () => {
    expect(galacticAge.Mercury()).toEqual(7);
  });

  test('should take age and modify it again the Venus equation', () => {
    expect(galacticAge.Venus()).toEqual(19);
  });
  test('should take age and modify it against Mars() equation', () => {
    expect(galacticAge.Mars()).toEqual(60);
  });
  test('should take age and modify it against Jupiter() equation', () => {
    expect(galacticAge.Jupiter()).toEqual(379);
  });

});
