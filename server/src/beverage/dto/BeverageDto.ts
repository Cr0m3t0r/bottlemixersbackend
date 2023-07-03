export class BeverageDto {
    id: number;
    name: string;
    image: string;
    liter: number;
    price: number;
    quantity: number;
    description: string;

    constructor(
        id: number,
        name: string,
        image: string,
        liter: number,
        price: number,
        quantity: number,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.liter = liter;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
