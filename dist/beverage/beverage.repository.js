"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageRepository = void 0;
const common_1 = require("@nestjs/common");
let BeverageRepository = class BeverageRepository {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async getAllBeveragesR() {
        console.log("Checkpoint 2");
        const query = 'SELECT * FROM beverages';
        try {
            return await this.dbService.query(query);
        }
        catch (error) {
            console.error('Error fetching beverages:', error);
            throw error;
        }
    }
    async getBeverageByIdR(id) {
        const query = 'SELECT * FROM beverages WHERE id = @id';
        try {
            return await this.dbService.query(query);
        }
        catch (error) {
            console.error('Error fetching beverages:', error);
            throw error;
        }
    }
    async createBeverageR(newBeverageDto) {
        const query = 'EXEC dbo.InsertBeverage ' + newBeverageDto.name + ', ' + newBeverageDto.image + ', ' + newBeverageDto.liter + ', ' + newBeverageDto.price + ', ' + newBeverageDto.quantity + ', ' + newBeverageDto.description;
        try {
            return await this.dbService.query(query);
        }
        catch (error) {
            console.error('Error creating beverage:', error);
            throw error;
        }
    }
    async deleteBeverageByIdR(id) {
        const query = 'DELETE FROM beverages WHERE id = @Id';
        try {
            return await this.dbService.query(query);
        }
        catch (error) {
            console.error('Error deleting beverage:', error);
            throw error;
        }
    }
};
BeverageRepository = __decorate([
    (0, common_1.Injectable)()
], BeverageRepository);
exports.BeverageRepository = BeverageRepository;
