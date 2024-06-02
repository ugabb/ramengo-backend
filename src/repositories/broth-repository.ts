import { Broth, Prisma } from "@prisma/client";

export interface BrothRepository {
    createBroth(brothData: Prisma.BrothCreateInput): Promise<Broth>;
    getAvailableBroths(): Promise<Broth[]>;
    getBrothById(brothId: number): Promise<Broth | null>;
}