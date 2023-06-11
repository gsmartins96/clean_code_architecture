import Order from "../src/Order";
import Product from "../src/Product";

test("Should create one Order and calculate his value", function() {
    const product: Product[] = []
    product.push(new Product('Proteina Isolada', 98, 1))

    let order = new Order(product);

    expect(order.totalValue()).toBe(98);
});

test("Should create 3 Orders and calculate the total value without discount", function() {
    const products: Product[] = []
    products.push(new Product('Proteina Isolada', 98, 1));
    products.push(new Product('Creatina', 40, 1));
    products.push(new Product('Manipulado', 320, 1));

    let order = new Order(products);

    expect(order.totalValue()).toBe(458);
})

test("Should calculate total value of Order with coupon of discount", function() {
    const products: Product[] = []
    products.push(new Product('Creatina', 40, 1));
    products.push(new Product('Manipulado', 320, 1));

    let order = new Order(products);

    expect(order.totalValue('primeira_compra')).toBe(252);
});
