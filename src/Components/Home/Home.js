import BlogList from "../BlogList/BLogList";
import useFetch from "../useFetch/useFetch";
import Loader from "../Helpers/Loader";

const Home = () => {

    const { products, error, fetched } = useFetch('http://localhost:3001/products')


    
    return (  
        <div className="home">
            {fetched && <Loader />}
            {products && <BlogList products={products} title="All Products!" />}
        </div>
    );
}
 
export default Home;