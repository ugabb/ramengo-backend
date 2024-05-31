import { ProteinService } from "src/repositories/protein-service";
import { FetchAvailableProteinsUseCase } from "../fetch-proteins";

export function makeFetchAvailableProtein() {
  const proteinService = new ProteinService();
  const useCase = new FetchAvailableProteinsUseCase(proteinService);

  return useCase;
}
