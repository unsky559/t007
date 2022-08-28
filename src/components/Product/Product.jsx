import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Product.module.css";
import {product} from "./Product.type";
import coverImage from "../../static/img404.jpg";

const Product = props => {
    const imageError = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = coverImage;
    };

    return (
        <div className={styles.product}>
            <div className={styles.productImageContainer}>
                <img className={styles.productImage} src={props.product.img} alt={props.product.name} onError={imageError}/>
            </div>
            <div className={styles.productCategory}>
                <span>
                    {props.product.bsr_category}
                </span>
            </div>
            <div className={styles.productHeader}>
                <h3 className={styles.productTitle}>
                    <a href={props.product.link}>
                        {props.product.name}
                    </a>
                </h3>
                <span className={styles.price}>
                    <strong>
                         ${props.product.price}
                    </strong>
                </span>
            </div>
            <span className={styles.secondary}>{props.product.asin}</span>
        </div>
    );
};

Product.propTypes = {
    product: product
};

export default Product;
