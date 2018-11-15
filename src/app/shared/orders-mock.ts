import { Ordenes } from "./models/ordenes";

export const OrdersMock : Ordenes[] = [
    { orderID: 1, client: "Victor Sandoval",dish: "Chicken Salad", totalDue: 25.50, delivered: "Yes" },
    { orderID: 2, client: "Francisco Ayala",dish: "T-Bone Steak", totalDue: 34.20, delivered: "Yes" },
    { orderID: 3, client: "James Guerrero",dish: "Club Sandwich", totalDue: 10.40, delivered: "No" },
    { orderID: 4, client: "Jesus Sarmiento",dish: "Bacon Burger", totalDue: 21.90, delivered: "No" },
]
