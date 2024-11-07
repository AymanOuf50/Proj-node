import React, { useState } from "react";
import Ajouter from "./Ajouter";
import Rechercher from "./rechercher";
import Routage from "./Layoute";

const listStagiaires = [
  { nom: "CHAKIRI", prenom: "Laila", Ville: "Fes", Fil: "Web et full stack", photo: "photo2.jpg" },
  { nom: "OUAFI", prenom: "Aanss", Ville: "Tanger", Fil: "Web désigner", photo: "photo1.jpg" },
  { nom: "BADRAOUI", prenom: "ikram", Ville: "meknes", Fil: "Dev Mobile", photo: "photo4.jpg" },
  { nom: "NACIRI", prenom: "Hassan", Ville: "CASABLANCA", Fil: "Web et full stack", photo: "photo3.jpg" }
];

export default function Afficher() {
  const [stagiaires, setStagiaires] = useState(listStagiaires);
  const [searchVal, setSearchVal] = useState('');
  const [panier, setPanier]=useState([]);
  
  
  const handleAdd = (newStagiaire) => {
    setStagiaires([...stagiaires, newStagiaire]);
  };
  
  const handleSearch = (filteredData) => {
    setStagiaires(filteredData);
  };

  //fonction pour ajouter un stagiaire au panier

  const ajouterPanier = (index) => {
    const stagiaireToAdd = listStagiaires[index];
    setPanier([...panier, stagiaireToAdd]);
  };
  
  return (
    <>
      <div>
        <ul>
          {stagiaires.map((stagiaire, index) => (
            <li key={index}>
              {stagiaire.nom} <br />
              {stagiaire.prenom} <br />
              {stagiaire.Ville} <br />
              {stagiaire.Fil} <br />
              <button
                onClick={() => {
                  const updatedData = stagiaires.filter((x, i) => i !== index);
                  setStagiaires(updatedData);
                }}
              >
                Remove
              </button>
              <button onClick={()=>ajouterPanier(index)} >ajouter au panier</button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <Ajouter onSubmit={handleAdd} />
      <div>
        <h1>Panier : </h1>
        <ul>
          
          {panier.map((prod,index)=>(
                        <li key={index}>
                        {prod.nom} <br />
                        {prod.prenom} <br />
                        {prod.Ville} <br />
                        {prod.Fil} <br />
                        <button
                onClick={() => {
                  const updatedData2 = stagiaires.filter((x, i) => i !== index);
                  setPanier(updatedData2);
                }}
              > 
                Remove
              </button>

                        </li>))}
          
        </ul>
      </div>
    </>
  );
}
