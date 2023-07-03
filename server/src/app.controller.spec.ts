import { AppController } from './app.controller';
import { AppService } from './app.service';

const appController = new AppController(new AppService());


console.log(appController.getHello());
