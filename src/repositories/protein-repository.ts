import { Protein, Prisma } from "@prisma/client";

export interface ProteinRepository {
  createprotein(proteinData: Prisma.ProteinCreateInput): Promise<Protein>;
  getAvailableProteins(): Promise<Protein[]>;
  getProteinById(proteinId: number): Promise<Protein | null>;
}
