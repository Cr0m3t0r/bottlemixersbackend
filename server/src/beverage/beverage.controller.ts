import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {BeverageService} from './beverage.service';
import {BeverageDto} from "./dto/BeverageDto";
import {NewBeverageDto} from "./dto/NewBeverageDto";


@Controller('beverages')
export class BeverageController {
    constructor(private beverageService: BeverageService) {
    }

    @Get()
    async getAllBeveragesC(): Promise<BeverageDto[]> {
        return this.beverageService.getAllBeveragesS();
    }

    @Get('/:id')
    async getBeverageByIdC(@Param('id') id: number): Promise<BeverageDto> {
        return this.beverageService.getBeverageByIdS(id);
    }

    @Post('/create')
    async createBeverageC(@Body() newBeverageDto: NewBeverageDto): Promise<BeverageDto> {
        const beverage = await this.beverageService.createS(newBeverageDto);
        return new BeverageDto(beverage.id, beverage.name, beverage.image, beverage.liter, beverage.price, beverage.quantity, beverage.description);
    }

    @Delete('/delete/:id')
    async deleteBeverageByIdC(@Param('id') id:number): Promise<BeverageDto> {
        return this.beverageService.deleteBeverageByIdS(id);
    }
}
