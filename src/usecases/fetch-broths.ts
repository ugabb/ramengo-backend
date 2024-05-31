import { Broth } from "@prisma/client";
import { BrothRepository } from "src/repositories/broth-repository";


export class FetchAvailableBrothsUseCase {
  constructor(private brothService: BrothRepository) {}

  async execute(): Promise<Broth[]> {
    const broths = await this.brothService.getAvailableBroths();

    return broths;
  }
}
