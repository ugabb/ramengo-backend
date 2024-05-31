import { BrothService } from "src/repositories/broth-service";
import { FetchAvailableBrothsUseCase } from "../fetch-broths";

export function makeFetchAvailableBroth() {
  const brothService = new BrothService();
  const useCase = new FetchAvailableBrothsUseCase(brothService);

  return useCase;
}
