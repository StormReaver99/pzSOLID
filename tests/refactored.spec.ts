import { OrderService } from "../src/refactored/OrderService";
import { NoDiscount, VipDiscount, NewCustomerDiscount } from "../src/refactored/discount";
import { CardPayment } from "../src/refactored/payments";
import { OrderStorage } from "../src/refactored/storage";
import { EmailNotification } from "../src/refactored/notification";

// Тестове замовлення: 1 товар за $100
const order = {
    id: 1,
    userId: 10,
    items: [{ price: 100, qty: 1 }], 
};

// Допоміжна функція, щоб не дублювати код створення сервісу
function createService(discountType: any) {
    return new OrderService(
        discountType,           // Різні знижки
        new CardPayment(),      // Оплата карткою
        new OrderStorage(),     // Збереження
        new EmailNotification() // Email
    );
}

describe("SOLID Order System", () => {
    
    test("Без знижки — сума має бути 100", () => {
        const service = createService(new NoDiscount());
        const total = service.process(order);
        expect(total).toBe(100);
    });

    test("VIP клієнт — знижка 20% (сума 80)", () => {
        const service = createService(new VipDiscount());
        const total = service.process(order);
        expect(total).toBe(80);
    });

    test("Новий клієнт — знижка 10% (сума 90)", () => {
        const service = createService(new NewCustomerDiscount());
        const total = service.process(order);
        expect(total).toBe(90);
    });
});