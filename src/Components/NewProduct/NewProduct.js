import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewProduct = () => {

    const [brand, setBrand] = useState('');
    const [title, setTitle] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(null);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    console.log(history);

    const brandHandler = (e) => {
        setBrand(e.target.value);
    }

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const discountpercentageHandler = (e) => {
        setDiscountPercentage(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        const product = { brand, title, discountPercentage, description, image };
        axios.post('http://localhost:3001/products/', product)
            .then(response => {
                setLoading(false);
                history.push('/');
            })
            setDescription('');
            setBrand('');
            setDiscountPercentage('');
            setImage('');
            setTitle('');
    }

    return (
        <div className="new">
            <h2>Add a new Product!</h2>
            <form className="new__form" onSubmit={submitHandler}>
                <div className="new__form-row">
                    <label>Product Brand:</label>
                    <input
                        type="text"
                        required
                        value={brand}
                        onChange={brandHandler}
                    />
                </div>
                <div className="new__form-row">
                    <label>Product Model:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={titleHandler}
                    />
                </div>
                <div className="new__form-row">
                    <label>Product discount:</label>
                    <input
                        type="number"
                        required
                        value={discountPercentage}
                        onChange={discountpercentageHandler}
                    />
                </div>
                <div className="new__form-row">
                    <label>Product description:</label>
                    <textarea
                        required
                        value={description}
                        onChange={descriptionHandler}
                    ></textarea>
                </div>
                <div className="new__form-row">
                    <label>Product image    :</label>
                    <input
                        type="text"
                        required
                        value={image}
                        onChange={imageHandler}
                    />
                </div>
                {!loading && <button className="nav__btn btn">Submit new product</button>}
                {loading && <button className="nav__btn btn" disabled>Adding new product...</button>}
            </form>
        </div>
    );
}
 
export default NewProduct;