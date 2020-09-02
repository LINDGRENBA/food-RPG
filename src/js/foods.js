export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }; //creates things that will accept different abilities (made below)
};

// start of Change State

export const changeState = (prop) => { //adds abilities to the things (made with code above)
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
