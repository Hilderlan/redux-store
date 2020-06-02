import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import logo from '../../assets/book.png';
import './styles.css';

const Header = () => {
  return(
    <header className="header">
      <Link to="/" className="logo">
        <img src={ logo } alt="Logo" className="logo-icon" />
        <span className="logo-text">Redux store</span>
      </Link>

      <Link to="/cart" className="header-cart" >
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>4</strong> livros
          </span>
        </div>
        <FiShoppingBag size={ 36 } color="#FFF" />
      </Link>
    </header>
  );
}

export default Header;