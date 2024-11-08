import React, { useState, useEffect } from 'react';

export default function Api() {
    // Définir l'état initial pour stocker les données
    const [datas, setDatas] = useState([]);

    // Fonction pour récupérer les données depuis l'API
    const fetchData = () => {
        // Effectuer la requête vers l'API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(datas => {
                setDatas(datas);
            })
            };

    // Utiliser useEffect pour exécuter la fonction fetchData une fois lorsque le composant est monté
    useEffect(() => {
        fetchData();
    }, []);

    // Rendu du composant
    return (
        <>
            <div>
                <h1>Liste des produits</h1>
                {/* Condition pour afficher le tableau uniquement lorsque les données sont disponibles */}
                {datas.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titre</th>
                                <th>Prix</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {/* Mapper sur les données pour afficher chaque produit dans une ligne du tableau */}
                            {datas.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.description}</td>
                                    <td><img width={100} src={product.image} alt="image" /></td>
                            {/*dans se code la la fonction suprimer affiche toute les element qui en un id diferant de product id  */}
                            <button type="button" onClick={() => {
                                // syntaxe de filter x est un variable pour afficher 
                                            const updatedData = datas.filter(x => x.id !== product.id);
                                            // ici en affiche le array data apret la modification nome updatedData

                                            setDatas(updatedData);
                                        }}>Supprimer</button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    // Afficher un message de chargement lorsque les données sont en cours de récupération
                    <p>Chargement...</p>
                )}
            </div>
        </>
    );
}
