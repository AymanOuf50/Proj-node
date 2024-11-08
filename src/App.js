// import logo from './logo.svg';
// import './App.css';
import Afficher from './regio/afficher';
import Ajouter from './regio/Ajouter';
import Rechercher from './regio/rechercher';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Routage from './regio/Layoute';
import Suprimmer from './regio/Suprimer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Routage/>}>
          <Route path="Afficher" element={<Afficher />}/>
          <Route path="Ajouter" element={<Ajouter />}/>
          <Route path="Suprimer" element={<Suprimmer />}/>
          <Route path="Rechercher" element={<Rechercher />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
