import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ProductInfo = () => {
    const [product, setProduct]= useState({})

    const { productId } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();

            setProduct(data)
        }
        fetchData()

    }, [productId])

    return (
        <>
            <h1>{ product.title }</h1>
            <h4>£{ product.price }</h4>
            <p>{ product.description }</p>
        </>
    )
}

export default ProductInfo;