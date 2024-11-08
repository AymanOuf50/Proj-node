import React, { useState } from 'react';

const listStagiaires = [
  { nom: "CHAKIRI", prenom: "Laila", Ville: "Fes", Fil: "Web et full stack", photo: "photo2.jpg" },
  { nom: "OUAFI", prenom: "Aanss", Ville: "Tanger", Fil: "Web désigner", photo: "photo1.jpg" },
  { nom: "BADRAOUI", prenom: "ikram", Ville: "meknes", Fil: "Dev Mobile", photo: "photo4.jpg" },
  { nom: "NACIRI", prenom: "Hassan", Ville: "CASABLANCA", Fil: "Web et full stack", photo: "photo3.jpg" }
];

export default function Modifier() {
  const [stagiaires, setStagiaires] = useState(listStagiaires);
  const [selectedStagiaireIndex, setSelectedStagiaireIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedStagiaires = stagiaires.map((stagiaire, index) =>
      index === selectedStagiaireIndex ? { ...stagiaire, [name]: value } : stagiaire
    );
    setStagiaires(updatedStagiaires);
  };

  const handleSelectStagiaire = (index) => {
    setSelectedStagiaireIndex(index);
  };

  return (
    <div>
      <h1>Modifier les informations des stagiaires</h1>
      {stagiaires.map((stagiaire, index) => (
        <div key={index} style={{ border: index === selectedStagiaireIndex ? '2px solid blue' : 'none' }}>
          <h2>Stagiaire {index + 1}</h2>
          <button onClick={() => handleSelectStagiaire(index)}>Sélectionner</button>
          {index === selectedStagiaireIndex && (
            <div>
              <input
                type="text"
                name="nom"
                value={stagiaire.nom}
                onChange={handleChange}
              />
              <input
                type="text"
                name="prenom"
                value={stagiaire.prenom}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Ville"
                value={stagiaire.Ville}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Fil"
                value={stagiaire.Fil}
                onChange={handleChange}
              />
              <input
                type="text"
                name="photo"
                value={stagiaire.photo}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
