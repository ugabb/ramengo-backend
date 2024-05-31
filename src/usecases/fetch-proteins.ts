import { Protein } from "@prisma/client";
import { ProteinRepository } from "src/repositories/protein-repository";

export class FetchAvailableProteinsUseCase {
  constructor(private proteinservice: ProteinRepository) {}

  async execute(): Promise<Protein[]> {
    const proteins = await this.proteinservice.getAvailableProteins();

    return proteins;
  }
}
