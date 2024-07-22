import { ProductModel } from "./models/product.model.js";

export default class ProductDao{
    
    async getAll() {
        try {
            return await ProductModel.find({});
        } catch (error) {
            throw new Error(error)
        }
    }
}