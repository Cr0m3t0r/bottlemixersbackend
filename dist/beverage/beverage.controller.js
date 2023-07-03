"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageController = void 0;
const common_1 = require("@nestjs/common");
const BeverageDto_1 = require("./dto/BeverageDto");
let BeverageController = class BeverageController {
    constructor(beverageService) {
        this.beverageService = beverageService;
    }
    async getAllBeveragesC() {
        return this.beverageService.getAllBeveragesS();
    }
    async getBeverageByIdC(id) {
        return this.beverageService.getBeverageByIdS(id);
    }
    async createBeverageC(newBeverageDto) {
        const beverage = await this.beverageService.createS(newBeverageDto);
        return new BeverageDto_1.BeverageDto(beverage.id, beverage.name, beverage.image, beverage.liter, beverage.price, beverage.quantity, beverage.description);
    }
    async deleteBeverageByIdC(id) {
        return this.beverageService.deleteBeverageByIdS(id);
    }
};
__decorate([
    (0, common_1.Get)()
], BeverageController.prototype, "getAllBeveragesC", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id'))
], BeverageController.prototype, "getBeverageByIdC", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)())
], BeverageController.prototype, "createBeverageC", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id'))
], BeverageController.prototype, "deleteBeverageByIdC", null);
BeverageController = __decorate([
    (0, common_1.Controller)('beverages')
], BeverageController);
exports.BeverageController = BeverageController;
