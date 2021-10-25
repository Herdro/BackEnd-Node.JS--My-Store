const faker = require('faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        Image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
    ...data};
    this.products.push(newProduct);
    return newProduct;
  };

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })
  }

  async findOne(id) {
    return this.products.find(product => product.id === id);
  };

  async update(id, data) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      return new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data
    };
    return this.products[index];
  };

  async delete(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      return new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id  };

  };
};

module.exports = ProductsService;
