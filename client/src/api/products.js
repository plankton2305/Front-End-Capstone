import Api from './index.js';

class Products {

  constructor() {
    this.api = new Api('products');
  }

  getProducts() {
    return this.api.get('/products');
  }

  getProduct(id) {
    return this.api.get(`/products/${id}`);
  }

  getStyles(id) {
    return this.api.get(`/products/${id}/styles`);
  }

  getRelated(id) {
    return this.api.get(`/products/${id}/related`);
  }
};

export default new Products();