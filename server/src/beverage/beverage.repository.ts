import {Injectable} from '@nestjs/common';
import {DatabaseService} from '../database/database.service';
import {BeverageDto} from "./dto/BeverageDto";
import {NewBeverageDto} from "./dto/NewBeverageDto";


@Injectable()
export class BeverageRepository {
    constructor(private dbService: DatabaseService) {
    }

    async getAllBeveragesR(): Promise<BeverageDto[]> {
        console.log("Checkpoint 2");
        const query = 'SELECT * FROM beverages';
        try {
            return await this.dbService.query(query);
        } catch (error) {
            console.error('Error fetching beverages:', error);
            throw error;
        }
    }

    async getBeverageByIdR(id: number): Promise<BeverageDto> {
        const query = 'SELECT * FROM beverages WHERE id = @id';
        try {
            return await this.dbService.query(query);
        } catch (error) {
            console.error('Error fetching beverages:', error);
            throw error;
        }
    }

    async createBeverageR(newBeverageDto: NewBeverageDto) {
        const query = 'EXEC dbo.InsertBeverage ' + newBeverageDto.name + ', ' + newBeverageDto.image + ', ' + newBeverageDto.liter + ', ' + newBeverageDto.price + ', ' + newBeverageDto.quantity + ', ' + newBeverageDto.description;
        try {
            return await this.dbService.query(query);
        } catch (error) {
            console.error('Error creating beverage:', error);
            throw error;
        }
    }

    async deleteBeverageByIdR(id: number) {
        const query = 'DELETE FROM beverages WHERE id = @Id';
        try {
            return await this.dbService.query(query);
        } catch (error) {
            console.error('Error deleting beverage:', error);
            throw error;
        }
    }
}
