export interface OrderRepository {
  createOrder(brothId: string, proteinId: string): void;
}
