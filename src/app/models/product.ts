export class Product {
    sku: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    status: string;
    date: string;
    image1: string;
    image2: string;
    image3: string;
    brand: string;

    constructor({ sku, title, description, price, discount, status, date, image1, image2, image3, brand }) {
        this.sku = sku;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.status = status;
        this.date = date;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.brand = brand;
    }
}
