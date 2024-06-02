import { prisma } from "src/lib/prisma";
import { OrderRepository, OrderResponse } from "./order-repository";

export class OrderService implements OrderRepository {
  async createOrder(
    orderId: number,
    description: string,
    image: string
  ): Promise<OrderResponse> {
    const order = await prisma.order.create({
      data: {
        id: Number(orderId),
        description,
        image,
      },
    });

    return order;
  }
}
