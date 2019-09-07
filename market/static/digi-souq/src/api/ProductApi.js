import Axios from './BaseApi';
import axios from 'axios';


const auth_token = localStorage.getItem('auth_token'); 

let RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'content-type': 'application/json',
    'Authorization': `Token ${auth_token}`
}
const axiosInstance = axios.create({
    headers: RequestHeaders
})


class ProductApi {
    constructor(){}

    static getAllProducts(){
        return Axios.get(`/products/`);
    }

    static getSingleProduct(product_link){
        return Axios.get(`/products/${product_link}/`);
    }

    static newProduct(product_obj){
        return Axios.post(`/products/`, product_obj);
    }

    static updateProduct(product_link, updated_product){
        return Axios.patch(`/products/${product_link}/`, updated_product);
    }

    static getProductsBySeller(sellerLink){
        return Axios.get(`/products/?seller=${sellerLink}`);
    }

    static getProductByFullUrl(product_url){
        return axiosInstance.get(`${product_url}`);
    }

    static deleteProduct(product_link){
        return Axios.delete(`/products/${product_link}`);
    }

    static getProductsByBidder(bidder_link){
        return Axios.get(`/products/?buyer=${bidder_link}`);
    }

    
}

export default ProductApi;