import { IStorage } from "../interfaces";

export class OrderStorage implements IStorage {
    save(orderId: number, total: number): void {
        console.log(`Замовлення #${orderId} збережено в БД. Сума: $${total}`);
    }
}