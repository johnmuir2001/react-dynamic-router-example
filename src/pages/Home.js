import { Link } from "react-router-dom";

const Home = ({ allProducts }) => {

    return (
        <>
            <h1>Home Page</h1>
            {allProducts.map((product, index) => {
                return(
                    <div key={index}>
                        <h3>{product.title}</h3>
                        <Link to={`/product/${product.id}`}>More Info</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Home;