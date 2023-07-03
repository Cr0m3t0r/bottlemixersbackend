export class NewBeverageDto {
    name: string;
    image: string;
    liter: number;
    price: number;
    quantity: number;
    description: string;

    constructor(
        name: string,
        image: string,
        liter: number,
        price: number,
        quantity: number,
        description: string,
    ) {
        this.name = name;
        this.image = image;
        this.liter = liter;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
