import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    {
      id: '',
      title: '',
      price: 0,
      image: ''
    }
  ]
}

const books = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return { ...state, data: [...state.data, action.payload] }
    default:
      return state;
  }
}

const store = createStore(books);

export default store;