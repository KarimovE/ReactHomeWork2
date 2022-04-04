import { HttpClient } from "../HttpClient";

class ProductsService extends HttpClient {
  constructor() {
    super("localhost:3000");
  }

  getAllProducts() {
    return this.get("products");
  }
  // getProductsById(id) {
  //   return this.getById("products", id);
  // }
}

export const productsService = new ProductsService();