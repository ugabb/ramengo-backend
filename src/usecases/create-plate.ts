import { Prisma, Plate } from "@prisma/client";
import { CreatePlateReq, PlateRepository } from "src/repositories/plate-repository";

interface CreatePlateUseCaseResponse {
  plate: Plate;
}

export class CreatePlateUseCase {
  constructor(private plateService: PlateRepository) {}

  async execute({
    description,
    brothId,
    iamge,
    name,
    proteinId,
  }: CreatePlateReq): Promise<CreatePlateUseCaseResponse> {
    const plate = await this.plateService.createPlate({
      brothId,
      description,
      iamge,
      name,
      proteinId,
    });

    return { plate };
  }
}
