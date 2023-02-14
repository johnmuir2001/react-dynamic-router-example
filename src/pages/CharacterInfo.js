import { useParams } from "react-router-dom";
import { useEffect } from "react";


const CharacterInfo = () => {

    const { productId } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();

            console.log(data)
        }
        fetchData()

    }, [productId])

    return (
        <h1>{ productId }</h1>
    )
}

export default CharacterInfo;