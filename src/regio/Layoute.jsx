import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Afficher from './afficher';

export default function Routage() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Afficher">liste des stagiaires</Link>
            </li>
            <li>
              <Link to="/Ajouter"> ajouter  stagiaires</Link>
            </li>
            <li>
              <Link to="/Suprimer"> suprimer un  stagiaires</Link>
            </li>
            <li>
              <Link to="/Rechercher"> Rechercher un stagiaires</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Outlet/>
        </div>
      </div>
  );
}
