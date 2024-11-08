import React, { useState } from "react";

const listStagiaires = [
  { nom: "CHAKIRI", prenom: "Laila", Ville: "Fes", Fil: "Web et full stack", photo: "photo2.jpg" },
  { nom: "OUAFI", prenom: "Aanss", Ville: "Tanger", Fil: "Web désigner", photo: "photo1.jpg" },
  { nom: "BADRAOUI", prenom: "ikram", Ville: "meknes", Fil: "Dev Mobile", photo: "photo4.jpg" },
  { nom: "NACIRI", prenom: "Hassan", Ville: "CASABLANCA", Fil: "Web et full stack", photo: "photo3.jpg" }
];

export default function Suprimmer() {
  const [stagiaires, setStagiaires] = useState(listStagiaires);
  const [supVal, setSupVal] = useState('');

  const handleChange = (e) => {
    setSupVal(e.target.value);
  }

  const supprimerStagiaire = () => {
    const filteredStagiaires = stagiaires.filter(stagiaire => stagiaire.nom.toLowerCase() !== supVal.toLowerCase());
    console.log(supVal)
    setStagiaires(filteredStagiaires);
    setSupVal(''); 
  }

  return (
    <div>
      <label htmlFor="suprimer">Supprimer par nom</label>
      <input 
        type="text" 
        id="suprimer" 
        name="nom" 
        value={supVal} 
        onChange={handleChange} 
      />
      <button onClick={supprimerStagiaire}>Supprimer</button>
      
      <ul>
        {stagiaires.map((stagiaire, index) => (
          <li key={index}>
            {stagiaire.nom} <br />
            {stagiaire.prenom} <br />
            {stagiaire.Ville} <br />
            {stagiaire.Fil} <br />
            <button onClick={() => {
              const updatedData = stagiaires.filter((x, i) => i !== index);
              setStagiaires(updatedData);
            }}>Remove</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
