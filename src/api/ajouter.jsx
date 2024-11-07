import React, { useState, useEffect } from 'react';

export default function Ajouterapi() {
    const [data, setData] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
                    //se code est pour ajouter le name et le value 
                    //had l code bache ikhdem f ga3 les inputs 
    const handleChange = e => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const updatedData = [...data, newProduct];
        setData(updatedData);
        setNewProduct({
            title: '',
            price: '',
            description: ''
        });
    };

    return (
        <>
            <div>
                <h2>Ajouter un produit</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre"
                        value={newProduct.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Prix"
                        value={newProduct.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={handleChange}
                    />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </>
    );
}
