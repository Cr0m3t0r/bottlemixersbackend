import {Module} from '@nestjs/common';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {BeverageController} from "./beverage/beverage.controller";
import {BeverageService} from "./beverage/beverage.service";

@Module({
    imports: [],
    controllers: [AppController, BeverageController],
    providers: [AppService, BeverageService]
})
export class AppModule {
}
