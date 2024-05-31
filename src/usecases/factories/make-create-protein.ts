import { ProteinService } from "src/repositories/protein-service";
import { CreateProteinUseCase } from "../create-protein";


export function makeCreateProtein(){
    const proteinService = new ProteinService();
    const useCase = new CreateProteinUseCase(proteinService);

    return useCase;
}