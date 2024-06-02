import { PlateService } from "src/repositories/plate-service";
import { CreatePlateUseCase } from "../create-plate";


export function makeCreatePlate(){
    const plateService = new PlateService();
    const useCase = new CreatePlateUseCase(plateService);

    return useCase;
}