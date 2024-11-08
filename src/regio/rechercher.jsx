import React, { useState } from 'react';

const listStagiaires = [
    { nom: "CHAKIRI", prenom: "Laila", Ville: "Fes", Fil: "Web et full stack", photo: "photo2.jpg" },
    { nom: "OUAFI", prenom: "Aanss", Ville: "Tanger", Fil: "Web désigner", photo: "photo1.jpg" },
    { nom: "BADRAOUI", prenom: "ikram", Ville: "meknes", Fil: "Dev Mobile", photo: "photo4.jpg" },
    { nom: "NACIRI", prenom: "Hassan", Ville: "CASABLANCA", Fil: "Web et full stack", photo: "photo3.jpg" }
];

export default function Rechercher() {
    const [data, setData] = useState(listStagiaires);
    const [rech, setRech] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleInput = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setRech(searchValue);
        const filteredData = data.filter(stagiaire =>
            stagiaire.nom.toLowerCase().includes(searchValue)
        );
        setFilteredData(filteredData);
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="searchVal" value={rech} onChange={handleInput} />
                    <select>
                                {filteredData.map((stagiaire, index) => (
                                    <option key={index} value={stagiaire.nom}>{stagiaire.nom}</option>
                                ))}
                    </select>
                <button type="submit">Rechercher</button>
            </form>
            
            <div>
                <ul>
                    {filteredData.map((stagiaire, index) => (
                        <li key={index}>
                            {stagiaire.nom} <br />
                            {stagiaire.prenom} <br />
                            {stagiaire.Ville} <br />
                            {stagiaire.Fil} <br />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
