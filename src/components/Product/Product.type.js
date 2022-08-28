import PropTypes from "prop-types";

export const product = PropTypes.exact({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    asin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bsr_category: PropTypes.string.isRequired
});
