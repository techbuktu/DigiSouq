import Axios from './BaseApi';


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
        return Axios.put(`/products/${product_link}/`, updated_product);
    }

}

export default ProductApi;