export const storeState = () => {  // food //
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }; //creates things that will accept different abilities (made below)
};

// start of Change State

export const changeState = (prop) => { //adds abilities to the things (made with code above) // property //
  // soil is property
  return (value) => {
    // 5 is passed in here
    return (state) => ({
      //
      ...state, // spread operator, creating a new version, state -
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const durian = storeState();
// durian = food, and the properites are "stinky"
export const isStinky = changeState("stinky")("yes.");
export const notStinky = changeState("stinky")("nope");

export const stinkyDurian = durian(isStinky);
export const notStinkyDurian = stinkyDurian(notStinky);
