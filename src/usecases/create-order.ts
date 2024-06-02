import { BrothService } from "src/repositories/broth-service";
import {
  OrderRepository,
  OrderResponse,
} from "src/repositories/order-repository";
import { OrderService } from "src/repositories/order-service";
import { PlateService } from "src/repositories/plate-service";
import { ProteinService } from "src/repositories/protein-service";

import { orderMap } from "src/util/order-map";

interface OrderRequest {
  brothId: number;
  proteinId: number;
}

export class CreateOrderUseCase {
  constructor(
    private orderService: OrderService,
    private brothService: BrothService,
    private proteinService: ProteinService,
    private plateService: PlateService
  ) {}

  async execute({ brothId, proteinId }: OrderRequest): Promise<OrderResponse> {
    // Verificar se brothId e proteinId são válidos
    const broth = await this.brothService.getBrothById(brothId);
    const protein = await this.proteinService.getProteinById(proteinId);

    if (!broth || !protein) {
      throw new Error("Invalid brothId or proteinId");
    }

    const plate = await this.plateService.getPlateByIngredients(
      broth.id,
      protein.id
    );

    if (!plate) {
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

      const order = await this.orderService.createOrder(
        orderId,
        plate?.name,
        plate?.iamge
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
