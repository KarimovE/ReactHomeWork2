import { HttpClient } from "../HttpClient";

class ProductsService extends HttpClient {
  constructor() {
    super("https://624bc93f44505084bc557516.mockapi.io/ReactPractice/");
  }

  getAllProducts() {
    return this.get("products");
  }
   getProductsById(id) {
     return this.getById("products", id);
   }
}

export const productsService = new ProductsService();
