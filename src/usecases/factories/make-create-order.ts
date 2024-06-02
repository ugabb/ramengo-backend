import { OrderService } from "src/repositories/order-service";
import { CreateOrderUseCase } from "../create-order";

export function makeCreateOrder(){
    const orderService = new OrderService();
    const useCase = new CreateOrderUseCase(orderService);

    return useCase;
}