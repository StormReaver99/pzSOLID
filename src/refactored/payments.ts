//Різні способи оплати, які можна замінювати один на одного без помилок
import { IPayment } from "../interfaces";

export class CardPayment implements IPayment {
    pay(amount: number): void {
        console.log(`Оплата карткою: $${amount}`);
    }
}

export class CashPayment implements IPayment {
    pay(amount: number): void {
        console.log(`Оплата готівкою: $${amount}`);
    }
}