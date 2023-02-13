const ProductModel = require('../Models/ProductModel');

class ProductController {
    async store(req, res) {
        const { id, title, brand, price, image, reviewScore } = req.body;

        const ProductAlreadyExists = await ProductModel.findOne({ title });

        if (ProductAlreadyExists) {
            return res.status(400).json({ message: 'Product already exists!'});
        }

        const createdProduct = await ProductModel.create(req.body);

        return res.status(200).json(createdProduct);
    }


    async index(req, res) {
        const products = await ProductModel.find();

        return res.status(200).json(products);
    }

    async update(req, res) {
        try {
        const { id } = req.params;

        await ProductModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({ message: 'Product updated'});
        } catch (error) {
          return res.status(400).json({ message: 'Failed to update product'});
        }
    }
}

module.exports = new ProductController();