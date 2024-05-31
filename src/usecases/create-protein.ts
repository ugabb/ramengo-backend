import { Prisma, Protein } from "@prisma/client";
import { ProteinRepository } from "src/repositories/protein-repository";

interface CreateProteinUseCaseResponse {
  protein: Protein;
}

export class CreateProteinUseCase {
  constructor(private proteinService: ProteinRepository) {}

  async execute({
    description,
    imageActive,
    imageInactive,
    name,
    price,
  }: Prisma.ProteinCreateInput): Promise<CreateProteinUseCaseResponse> {
    const protein = await this.proteinService.createprotein({
      description,
      imageActive,
      imageInactive,
      name,
      price,
    });

    return { protein };
  }
}
