export const addToCart = (book) => (
  {
    type: 'ADD_TO_CART',
    payload: book
  }
)

export const removeFromCart = (bookId) => (
  {
    type: 'REMOVE_FROM_CART',
    payload: bookId
  }
)

export const updateAmount = ({id, amount}) => (
  {
    type: 'UPDATE_AMOUNT',
    payload: { id, amount}
  }
)