import { PlateService } from "src/repositories/plate-service";

interface PlateRequestProps {
  brothId: number;
  proteinId: number;
}

export class GetPlateByIngredientsUseCase {
  constructor(private plateService: PlateService) {}

  async execute({ brothId, proteinId }: PlateRequestProps) {
    const plate = await this.plateService.getPlateByIngredients(
      brothId,
      proteinId
    );

    if (!plate) {
      throw new Error("Invalid brothId and proteinId combination");
    }

    return plate;
  }
}
