"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const appController = new app_controller_1.AppController(new app_service_1.AppService());
console.log(appController.getHello());
