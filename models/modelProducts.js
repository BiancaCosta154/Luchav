class Product {
  constructor({
    id = null,
    name,
    description = "",
    price,
    category = "",
    stock = 0,
    image = "",
    active = true,
  }) {
    if (!name || typeof name !== "string") {
      throw new Error("O nome do produto é obrigatório.");
    }

    if (
      price === undefined ||
      Number.isNaN(Number(price)) ||
      Number(price) < 0
    ) {
      throw new Error(
        "O preço do produto deve ser um número maior ou igual a zero.",
      );
    }

    if (Number.isNaN(Number(stock)) || Number(stock) < 0) {
      throw new Error("O estoque deve ser um número maior ou igual a zero.");
    }

    this.id = id;
    this.name = name.trim();
    this.description = description;
    this.price = Number(price);
    this.category = category;
    this.stock = Number(stock);
    this.image = image;
    this.active = Boolean(active);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Product;
