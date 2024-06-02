import { Plate } from "@prisma/client";
import { PlateService } from "src/repositories/plate-service";

export class FetchAvailablePlateUseCase {
  constructor(private plateService: PlateService) {}

  async execute(): Promise<Plate[]> {
    const plate = await this.plateService.getAllPlates();

    return plate;
  }
}
