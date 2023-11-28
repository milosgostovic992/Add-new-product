import useFetch from "../useFetch/useFetch";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "../Helpers/Loader";
import { useState } from "react";

const ProductDetails = () => {

    const [loading, setLoading] = useState(false);

const { id } = useParams();
const history = useHistory();

const { products, error, fetched } = useFetch('http://localhost:3001/products/' + id);

    const deleteHandler = () => {
        setLoading(true);
        axios.delete("http://localhost:3001/products/" + products.id, {

        })
            .then(response => {
                history.push("/")
                setLoading(false);
            })
    };



    return ( 
       <>
        {fetched && <Loader />}
                {products && (
                    <article>
                        <img src={products.image} alt="" />
                        <h2>{products.title}</h2>
                        <p> {products.description}</p>
                    {!loading && <button onClick={deleteHandler} className="nav__btn btn">Delete Product</button>}
                    {loading && <button className="nav__btn btn disabled" disabled>Deleting product...</button>}
                    </article>
                )}
       </>
     );
}
 
export default ProductDetails;