import React, { Component } from 'react';
import data from "../../../exercise-2/mockups/data.json";


class ProductDetail extends Component {
    state = {
        productDetail:[],
    }

    componentDidMount() {
        const productID = parseInt(this.props.match.url.split("/")[2]);
        for (const key in data) {
          if (data[key].id === productID) {
            this.setState({
              productDetail: data[key],
            });
          }
        }
      }

    render() {
        return (
            <div>
                <h2>Product Details:</h2>
                <h3>Name: {this.state.productDetail.name}</h3>
                <h3>Id: {this.state.productDetail.id}</h3>
                <h3>Price: {this.state.productDetail.price}</h3>
                <h3>Quantity: {this.state.productDetail.quantity}</h3>
                <h3>Desc: {this.state.productDetail.desc}</h3>
                <h3>URL: {this.props.match.url}</h3>
            </div>
        )
    };
}

export default ProductDetail;
