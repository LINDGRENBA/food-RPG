import { storeState } from "./../src/js/foods.js";
import { changeState } from "./../src/js/foods.js";
import { durian } from "./../src/js/foods.js";
import { chili } from "./../src/js/foods.js";
import { isStinky } from "./../src/js/foods.js";
import { notStinky } from "./../src/js/foods.js";

describe(" ", () => {
  beforeEach(() => {
    stateControl();
  });

  afterEach(() => {

  });

  test("should determine if an object is created", () => {
    expect(durian).toEqual({});
  });

  // test("should determine if an objects state is changed", () => {
  //   // const newThing = stateControl(blueFood);
  //   // expect(newThing.soil).toEqual(5);

  // });
});
