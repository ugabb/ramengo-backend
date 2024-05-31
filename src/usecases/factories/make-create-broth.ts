import { BrothService } from "src/repositories/broth-service";
import { CreateBrothUseCase } from "../create-broth";


export function makeCreateBroth(){
    const brothService = new BrothService();
    const useCase = new CreateBrothUseCase(brothService);

    return useCase;
}