import { Plate, Prisma } from "@prisma/client";

export interface CreatePlateReq {
    name: string;
    description: string;
    iamge: string;
    brothId: number;
    proteinId: number;
  }
  

export interface PlateRepository{
    createPlate(plate: CreatePlateReq): Promise<Plate>
    getAllPlates(): Promise<Plate[]>
    getPlateByIngredients(brothId: number, proteinId: number): Promise<Plate | null>
}