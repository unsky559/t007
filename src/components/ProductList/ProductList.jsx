import React from 'react';
import PropTypes from 'prop-types';
import {product} from "../Product/Product.type";
import Product from "../Product/Product";

const ProductList = props => {
    return (
        props.products.map((productData) => {
            return <Product key={productData.asin} product={productData}/>
        })
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(product)
};

export default ProductList;
