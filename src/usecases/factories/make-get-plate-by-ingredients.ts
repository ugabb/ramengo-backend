import { PlateService } from "src/repositories/plate-service";
import { GetPlateByIngredientsUseCase } from "../get-plate-by-ingredients";

export function makeGetPlateByIngredients() {
  const plateService = new PlateService();
  const useCase = new GetPlateByIngredientsUseCase(plateService);

  return useCase;
}
