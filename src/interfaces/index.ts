// ISP — розділяємо на маленькі інтерфейси
export interface IDiscount {
  calculate(total: number): number;
}

export interface IPayment {
  pay(amount: number): void;
}

export interface IStorage {
  save(orderId: number, total: number): void;
}

export interface INotification {
  send(userId: number, message: string): void;
}