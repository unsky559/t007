import React, {useEffect, useState} from 'react';
import ProductList from "../components/ProductList/ProductList";
import Preloader from "../components/Preloader/Preloader";

const ProductPage = props => {
    const [products, updateProducts] = useState([]);
    const [isLoading, updateLoading] = useState(true);

    useEffect(() => {
        const request = fetch(`${window.origin}/products.json`);

        request
            .then((req) => {
                return req.json();
            }).then(data => {
                updateProducts(data.products);
                updateLoading(false);
            });

    }, []);

    return (
        <div className="container">
            <h2>Products</h2>
            {isLoading && <Preloader/>}
            <ProductList products={products}></ProductList>
        </div>
    );
};

export default ProductPage;
