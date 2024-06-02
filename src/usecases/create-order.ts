import {
  OrderRepository,
  OrderResponse,
} from "src/repositories/order-repository";

import { orderMap } from "src/util/order-map";

interface OrderRequest {
  brothId: number;
  proteinId: number;
}

export class CreateOrderUseCase {
  constructor(private orderService: OrderRepository) {}

  async execute({ brothId, proteinId }: OrderRequest): Promise<OrderResponse> {
    const orderData = orderMap.get(`${brothId},${proteinId}`);

    if (!orderData) {
      throw new Error("Invalid brothId and proteinId combination");
    }

    // Requisição para pegar o ID do pedido
    const response = await fetch(
      "https://api.tech.redventures.com.br/orders/generate-id",
      {
        method: "POST",
        headers: {
          "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf",
        },
      }
    );

    
    
    if (response.ok) {
      const { orderId } = await response.json();
      console.log(orderId);

      const order = await this.orderService.createOrder(
        orderId,
        brothId,
        proteinId,
        orderData.description,
        orderData.image
      );
      return {
        id: order.id,
        description: order.description,
        image: order.image,
      };
    } else {
      throw new Error("Failed to generate order ID");
    }
  }
}
