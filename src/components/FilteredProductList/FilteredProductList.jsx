import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductList from "../ProductList/ProductList";
import {product} from "../Product/Product.type";

const FilteredProductList = props => {
    const [searchQ, updateSearchQ] = useState("");

    const updateSearch = (e) => {
        updateSearchQ(e.target.value);
    }

    const filteredArray = (query) => {
        return props.products.filter((current) => {
            return current.name.toLowerCase().includes(query.toLowerCase())
        });
    }

    return (
        <>
            <input type="text" placeholder="search..." onChange={updateSearch}/>
            <ProductList products={filteredArray(searchQ)}></ProductList>
        </>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(product)
};

export default FilteredProductList;
