import Coupon from "../src/Coupon"

test("Should return correct value from a coupon", function() {
    const coupon = new Coupon('primeira_compra');

    expect(coupon.getDiscountValue()).toBe(0.3);
});

test("Should return 0 if is a invalid coupon", function(){
    const coupon = new Coupon('invalid');

    expect(coupon.getDiscountValue()).toBe(0);
});