import { PlateService } from "src/repositories/plate-service";
import { FetchAvailablePlateUseCase } from "../fetch-plates";

export function makeFetchAvailablePlate() {
  const plateService = new PlateService();
  const useCase = new FetchAvailablePlateUseCase(plateService);

  return useCase;
}
