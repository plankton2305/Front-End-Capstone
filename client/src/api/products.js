import Api from './index.js';

class Products {

  constructor() {
    this.api = new Api('products');
  }

  getProducts() {
    return this.api.get('');
  }

  getProductById(id) {
    return this.api.get(`/${id}`);
  }

  getStyles(id) {
    return this.api.get(`/${id}/styles`);
  }

  getRelated(id) {
    return this.api.get(`/${id}/related`);
  }
};

export default new Products();