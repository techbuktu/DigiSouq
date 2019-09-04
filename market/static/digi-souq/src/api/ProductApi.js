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

    static getProductsBySeller(sellerLink){
        return Axios.get(`/products/?seller=${sellerLink}`);
    }

    static deleteProduct(product_link){
        return Axios.delete(`/products/${product_link}`);
    }

    
}

export default ProductApi;