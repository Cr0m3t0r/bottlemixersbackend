import {Injectable} from '@nestjs/common';
import {BeverageRepository} from './beverage.repository';
import {BeverageDto} from "./dto/BeverageDto";
import {NewBeverageDto} from "./dto/NewBeverageDto";


@Injectable()
export class BeverageService {
    constructor(private beverageRepository: BeverageRepository) {
    }

    async getAllBeveragesS(): Promise<BeverageDto[]> {
        console.log("Checkpoint 1");
        return this.beverageRepository.getAllBeveragesR();
    }

    async getBeverageByIdS(id: number): Promise<BeverageDto> {
        return this.beverageRepository.getBeverageByIdR(id);
    }

    async createS(newBeverageDto: NewBeverageDto) {
        return this.beverageRepository.createBeverageR(newBeverageDto);
    }

    async deleteBeverageByIdS(id: number) {
        return this.beverageRepository.deleteBeverageByIdR(id);
    }
}
