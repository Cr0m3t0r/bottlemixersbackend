"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageService = void 0;
const common_1 = require("@nestjs/common");
let BeverageService = class BeverageService {
    constructor(beverageRepository) {
        this.beverageRepository = beverageRepository;
    }
    async getAllBeveragesS() {
        console.log("Checkpoint 1");
        return this.beverageRepository.getAllBeveragesR();
    }
    async getBeverageByIdS(id) {
        return this.beverageRepository.getBeverageByIdR(id);
    }
    async createS(newBeverageDto) {
        return this.beverageRepository.createBeverageR(newBeverageDto);
    }
    async deleteBeverageByIdS(id) {
        return this.beverageRepository.deleteBeverageByIdR(id);
    }
};
BeverageService = __decorate([
    (0, common_1.Injectable)()
], BeverageService);
exports.BeverageService = BeverageService;
