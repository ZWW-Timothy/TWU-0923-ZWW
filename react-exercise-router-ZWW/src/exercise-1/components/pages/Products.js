import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import '../../styles/Products.css';

const Products = (props) => {
    return (
        <Fragment>
            <h1>All Products:</h1>
            <Link to="/products/1" className="p-link">Bicycle</Link><br />
            <Link to="/products/2" className="p-link">TV</Link><br />
            <Link to="/products/3" className="p-link">Pencil</Link><br />
            <Route exact path='/products/:id' component={ProductDetail} />
        </Fragment>
    )
};

export default Products;
