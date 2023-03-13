const asyncHandle = require('express-async-handler');
const productModel = require('../models/productModel');



const getProducts = asyncHandle(async (req, res) => {
    
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword;
    const searchQuery = keyword ? { name: { $regex: keyword } } : {};
    const totalProduct = await productModel.countDocuments({ ...searchQuery });
    const products = await productModel.find({ ...searchQuery }).limit(pageSize).skip(pageSize * (page - 1));
    res.json({
        products,
        totalProduct,
        page
    });
});

module.exports = {
    getProducts
}