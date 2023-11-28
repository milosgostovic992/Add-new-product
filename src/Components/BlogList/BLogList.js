import Search from "../Search/Search";
import { useState } from "react";
import { Link } from "react-router-dom";


    const BlogList = ({ products, title, handleDelete }) => {

        const [searchQuery, setSearchQuery] = useState('');

        // Filter products based on the search query
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            String(product.discountPercentage).includes(searchQuery)
        );
        
        return (
            <div className="card__holder">
                <h2>{title}</h2>
                <Search onChange={(value) => setSearchQuery(value)} />
                <ul className="card__list">
                    {filteredProducts?.map((product) =>
                        <Link className="card" to={`/products/${product.id}`} key={product.id}>
                           <div className="card__details">
                                <p className="card__text card__text--heading">Brand: {product.brand}</p>
                                <p className="card__text card__text--model">Model: {product.title}</p>
                                <p className="card__text card__text--discount">Discount: {product.discountPercentage}$</p>
                           </div>
                            <img className="card__img" alt="" src={product.image}/>
                            <p>{product.description}</p>
                            {/* <button onClick={() => handleDelete(product.id)}>Delete blog</button> */}
                        </Link>
                    )}
                </ul>
            </div>
        );
}
 
export default BlogList;