export interface OrderResponse {
  id: number;
  description: string;
  image: string;
}

export interface OrderRepository {
  createOrder(
    orderId: number,
    description: string,
    image: string
  ): Promise<OrderResponse>;
}
