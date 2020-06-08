import React, { useState, useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then((res) => {
      setBooks(res.data);
    });
  }, []);

  return(
    <main className="container">
      <ul className="book-catalog">
        { books.map(book => (
          <li key={book.id} className="book-container">
            <img src={ book.image } alt={ book.title } />
            <strong> { book.title } </strong>
            <span>R$ { book.price } </span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
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