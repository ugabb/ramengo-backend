import { Prisma, Protein } from "@prisma/client";
import { ProteinRepository } from "./protein-repository";
import { prisma } from "src/lib/prisma";

export class ProteinService implements ProteinRepository {
  async createprotein(
    proteinData: Prisma.ProteinCreateInput
  ): Promise<Protein> {
    const protein = await prisma.protein.create({
      data: proteinData,
    });

    return protein;
  }
  async getAvailableProteins(): Promise<Protein[]> {
    const proteins = await prisma.protein.findMany();

    return proteins;
  }

  async getProteinById(proteinId: number): Promise<Protein | null> {
    const protein = await prisma.protein.findUnique({
      where: {
        id: proteinId,
      },
    });

    return protein;
  }
}
