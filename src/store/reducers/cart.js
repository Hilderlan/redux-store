const INITIAL_STATE = []

const cart = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const bookExists = state.find(book => book.id === action.payload.id);

      if(bookExists) {
        bookExists.amount += 1;
        return state;
      }
      else {
        return [ ...state, { ...action.payload, amount: 1} ];
      }
    case 'REMOVE_FROM_CART':
      const productIndex = state.findIndex(book => book.id === action.payload);      
 
      if (productIndex >= 0) {
        state.splice(productIndex, 1);
        return state;
      }
      break

    case 'UPDATE_AMOUNT':
      const { id, amount } = action.payload;
      const bookIndex = state.findIndex(book => book.id === id);
 
      if (bookIndex >= 0 && amount > 0) {
        state[bookIndex].amount = Number(amount);
      }

      return state;
    default:
      return state;
  }
}

export default cart;