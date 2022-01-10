const Product = require('../models/Product')


class ProductController {

  static newProductForm(req, res) {
    res.render('products/newProduct')
  }


  static async newProductSave(req, res) {

    const { name, image, price, description } = req.body

    const product = new Product({ name, image, price, description })

    await product.save()

    res.redirect('/products')
  }


  static async readAllProducts(req, res) {

    const products = await Product.find().lean()

    res.render('products/showAll', { products })
  }


  static async readOneProduct(req, res) {

    const { id } = req.params

    const product = await Product.findById(id).lean()

    res.render('products/showOne', { product })
  }


  static async editProductForm(req, res) {
      
    const { id } = req.params

    const product = await Product.findById(id).lean()

    res.render('products/editProduct', { product })
  }


  static async editProductSave(req, res) {
      
    const { id, name, image, price, description } = req.body

    await Product.findByIdAndUpdate(id, { name, image, price, description })

    res.redirect('/products')
  }


  static async deleteOneProduct(req, res) {

    const { id } = req.params

    await Product.findByIdAndDelete(id)

    res.redirect('/products')
  }
}


module.exports = ProductController