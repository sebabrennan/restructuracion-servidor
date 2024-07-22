import ProductDao from "../daos/product.dao.js";
const productDao = new ProductDao();

export const productsResponse = async (req, res, next) => {
    try {
        const products = await productDao.getAll();
        res.json({ products });
    } catch (error) {
        next(error);
    }
}