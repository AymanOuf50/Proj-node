import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './state/counter';
import Forme from './state/Forme';
import Api from './api/api';
import Ajouter from './api/ajouter';
import Recherche from './api/recherch';
import Forme2 from './state/Forme-2';
import Modifier from './api/Modifier';
import Afficher from './regio/afficher';
import Suprimmer from './regio/Suprimer';
import Exemple from './redux/Exemple';
import Couterredux from './redux/counter';
import { Provider } from 'react-redux';
import Ajoutere from './regio/Ajouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ajoutere />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
