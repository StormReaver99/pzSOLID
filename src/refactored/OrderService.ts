import { IDiscount, IPayment, IStorage, INotification } from "../interfaces";

export class OrderService {
    // DIP: Ми залежимо від Інтерфейсів, а не від конкретних класів.
    // Це дозволяє легко замінювати деталі (наприклад, замінити Email на SMS).
    constructor(
        private discount: IDiscount,
        private payment: IPayment,
        private storage: IStorage,
        private notification: INotification
    ) {}

    process(order: { id: number; userId: number; items: { price: number; qty: number }[] }) {
        // 1. Рахуємо суму
        const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);

        // 2. Застосовуємо знижку (через інтерфейс)
        const finalTotal = this.discount.calculate(total);

        // 3. Проводимо оплату
        this.payment.pay(finalTotal);

        // 4. Зберігаємо
        this.storage.save(order.id, finalTotal);

        // 5. Сповіщаємо
        this.notification.send(order.userId, `Ваше замовлення на суму $${finalTotal} успішне!`);

        return finalTotal;
    }
}