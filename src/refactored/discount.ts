import { IDiscount } from "../interfaces";

// OCP: Нова знижка = Новий клас. Старий код не чіпаємо.

export class NoDiscount implements IDiscount {
    calculate(total: number): number {
        return total;
    }
}

export class VipDiscount implements IDiscount {
    calculate(total: number): number {
        return total * 0.8; // 20% знижки
    }
}

export class NewCustomerDiscount implements IDiscount {
    calculate(total: number): number {
        return total * 0.9; // 10% знижки
    }
}