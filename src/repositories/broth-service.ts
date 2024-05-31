import { Broth, Prisma } from "@prisma/client";
import { BrothRepository } from "./broth-repository";
import { prisma } from "src/lib/prisma";

export class BrothService implements BrothRepository {
  async createBroth(brothData: Prisma.BrothCreateInput): Promise<Broth> {
    const broth = await prisma.broth.create({
      data: brothData,
    });

    return broth;
  }
  async getAvailableBroths(): Promise<Broth[]> {
    const broths = await prisma.broth.findMany();

    return broths;
  }
}
