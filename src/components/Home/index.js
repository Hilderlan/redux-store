import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/actions/cart';
import { FiShoppingBag } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/books').then((res) => {
      setBooks(res.data);
    });
  }, []);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, book) => {      
      sumAmount[book.id] = book.amount;
  
      return sumAmount;
    }, [])
  );

  function handleAddBook(book) {
    dispatch(CartActions.addToCart(book));
  }

  return(
    <main className="container">
      <ul className="book-catalog">
        { books.map(book => (
          <li key={book.id} className="book-container">
            <img src={ book.image } alt={ book.title } />
            <strong> { book.title } </strong>
            <span>R$ { book.price } </span>

            <button type="button" onClick={() => handleAddBook(book)}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                { amount[book.id] || 0 }
              </div>

              <span>Adiconar</span>
            </button>
          </li>
        ))}
      </ul>
   </main>
  );
}

export default Home;