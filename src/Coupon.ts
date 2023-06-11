export default class Coupon {
    coupons: Array<{
        name: string;
        value: number;
    }>

    constructor(readonly couponName: string) {
        this.coupons = [
            {name: "primeira_compra", value: 30},
            {name: "amigo", value: 10},
            {name: "yasmin", value: 80},
        ]
    }

    getDiscountValue(): number {
        const coupon = this.coupons.find(coupon => coupon.name === this.couponName)

        return coupon ? coupon.value / 100 : 0;
    }
}
