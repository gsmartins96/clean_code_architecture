import Product from "../src/Product";

test("Should create a product with description", function() {
    const product = new Product('Description', 10, 1);

    expect(product.getDescription()).toBe('Description');
});
