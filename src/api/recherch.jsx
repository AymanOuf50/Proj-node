import React, { useState, useEffect } from 'react';

export default function Rechercheapi() {
    const [datas, setDatas] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const [searchval, setSearchval] = useState('');

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json()) 
            .then(data => {
                setDatas(data);
                setFilterdata(data); // Initialize filterdata with all data
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    };

    const searchvalue = (e) => {
        setSearchval(e.target.value);
    }

    const rechercher = () => {
        const filteredData = datas.filter(product => {
            return product.title.toLowerCase().includes(searchval.toLowerCase());
        });
        setFilterdata(filteredData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <form action="">
                <input type="text" id='search' onChange={searchvalue} />
                <button type="button" onClick={rechercher}>Rechercher</button>
            </form>
            <div>
                <h1>Liste des produits</h1>
                {filterdata.length > 0 ? (
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
                            {filterdata.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.description}</td>
                                    <td><img width={100} src={product.image} alt="image" /></td>
                                    <td>
                                        <button type="button" onClick={() => {
                                            const updatedData = filterdata.filter(x => x.id !== product.id);
                                            setDatas(updatedData);
                                            setFilterdata(updatedData); // Update filterdata after removing an item
                                        }}>Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun produit trouvé.</p>
                )}
            </div>
        </>
    );
}
