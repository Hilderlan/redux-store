import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={ store } >
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App;