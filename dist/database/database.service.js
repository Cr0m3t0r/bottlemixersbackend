"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mssql_1 = require("mssql");
const database_config_1 = require("../config/database.config");
let DatabaseService = class DatabaseService {
    constructor() {
        const connectionConfig = {
            user: database_config_1.databaseConfig.user,
            password: database_config_1.databaseConfig.password,
            server: database_config_1.databaseConfig.server,
            database: database_config_1.databaseConfig.database,
        };
        this.connectionPool = new mssql_1.ConnectionPool(connectionConfig);
    }
    async connect() {
        try {
            await this.connectionPool.connect();
            console.log('Connected to the database');
        }
        catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    }
    async query(sql) {
        try {
            const result = await this.connectionPool.request().query(sql);
            return result.recordset;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
};
DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
