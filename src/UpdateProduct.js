import Header from './Header';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/edit/" + id);
                result = await result.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            console.log('Cleaning up...');
        };
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h1>Update Product</h1>
            <p>Product ID: {id}</p>
            <p>Product Name: {data.name}</p>
            <p>Product Description: {data.description}</p>
        </div>
    );
}

export default UpdateProduct;
