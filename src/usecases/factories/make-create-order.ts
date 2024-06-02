import { OrderService } from "src/repositories/order-service";
import { CreateOrderUseCase } from "../create-order";
import { PlateService } from "src/repositories/plate-service";
import { ProteinService } from "src/repositories/protein-service";
import { BrothService } from "src/repositories/broth-service";

export function makeCreateOrder() {
  const orderService = new OrderService();
  const plateService = new PlateService();
  const proteinService = new ProteinService();
  const brothService = new BrothService();
  const useCase = new CreateOrderUseCase(
    orderService,
    brothService,
    proteinService,
    plateService
  );

  return useCase;
}
