import Coupon from "./Coupon";
import Product from "./Product";

export default class Order {
    constructor (readonly products: Product[]) {}

    totalValue(couponName?: string): number {
        let total = 0;
        let products = this.products;
        
        for (let product of products) {
            total += (product.getPrice() * product.getAmount());
        }

        total = this.calculateDiscount(total, couponName ?? 'invalid')

        return total;
    }

    calculateDiscount(total: number, couponName: string): number {
        const coupon = new Coupon(couponName);
        const discountValue = coupon.getDiscountValue();

        return total - (total * discountValue);
    }
}
