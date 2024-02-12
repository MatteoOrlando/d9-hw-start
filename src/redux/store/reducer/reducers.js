// creo la funzione con il nuovo stato dell'applicativo
const initialState = {
  favourite: {
    // array di professioni preferite
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
