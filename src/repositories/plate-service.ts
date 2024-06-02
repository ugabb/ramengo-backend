import { Plate, Prisma } from "@prisma/client";
import { CreatePlateReq, PlateRepository } from "./plate-repository";
import { prisma } from "src/lib/prisma";

export class PlateService implements PlateRepository {
  async createPlate({
    brothId,
    description,
    iamge,
    name,
    proteinId,
  }: CreatePlateReq): Promise<Plate> {
    const plate = await prisma.plate.create({
      data: {
        name: name,
        description: description,
        iamge: iamge,
        broth: {
          connect: {
            id: brothId,
          },
        },
        protein: {
          connect: {
            id: proteinId,
          },
        },
      },
    });

    return plate;
  }

  async getAllPlates(): Promise<Plate[]> {
    const plates = await prisma.plate.findMany();

    return plates;
  }

  async getPlateByIngredients(
    brothId: number,
    proteinId: number
  ): Promise<Plate | null> {
    const plate = await prisma.plate.findFirst({
      where: {
        brothId,
        proteinId,
      },
    });

    return plate;
  }
}
