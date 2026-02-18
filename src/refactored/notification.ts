import { INotification } from "../interfaces";

export class EmailNotification implements INotification {
    send(userId: number, message: string): void {
        console.log(`Email для користувача ${userId}: ${message}`);
    }
}