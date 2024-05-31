import { Broth, Prisma } from "@prisma/client";
import { BrothRepository } from "src/repositories/broth-repository";

interface CreateBrothUseCaseResponse {
  broth: Broth;
}

export class CreateBrothUseCase {
  constructor(private brothService: BrothRepository) {}

  async execute({
    description,
    imageActive,
    imageInactive,
    name,
    price,
  }: Prisma.BrothCreateInput): Promise<CreateBrothUseCaseResponse> {
    const broth = await this.brothService.createBroth({
      description,
      imageActive,
      imageInactive,
      name,
      price,
    });

    return { broth };
  }
}
