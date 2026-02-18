export class BadOrder {
  process(order: any) {
    // 1. Рахує суму (SRP порушено: бізнес-логіка в перемішку з іншим)
    let total = 0;
    for (const item of order.items) {
      total += item.price * item.qty;
    }

    // 2. Знижка (OCP порушено: треба змінювати код для нових знижок)
    if (order.customer === "vip") {
      total = total * 0.8;
    } else if (order.customer === "new") {
      total = total * 0.9;
    }

    // 3. Оплата (OCP + ISP порушено: жорстка прив'язка до типів)
    if (order.payment === "card") {
      console.log("Pay by card: $" + total);
    } else if (order.payment === "cash") {
      console.log("Pay by cash: $" + total);
    }

    // 4. Збереження (DIP порушено: залежність від консолі/конкретики)
    console.log("Save to DB: order " + order.id);

    // 5. Email (SRP порушено: сповіщення не має бути тут)
    console.log("Send email to user " + order.userId);

    return total;
  }
}