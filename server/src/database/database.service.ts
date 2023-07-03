import {Injectable} from '@nestjs/common';
import {ConnectionPool} from 'mssql';
import {databaseConfig} from '../config/database.config';

@Injectable()
export class DatabaseService {
    private connectionPool: ConnectionPool;

    constructor() {
        const connectionConfig = {
            user: databaseConfig.user,
            password: databaseConfig.password,
            server: databaseConfig.server,
            database: databaseConfig.database,
        };
        this.connectionPool = new ConnectionPool(connectionConfig);
    }

    async connect(): Promise<void> {
        try {
            await this.connectionPool.connect();
            console.log('Connected to the database');
        } catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    }

    async query(sql: string): Promise<any> {
        try {
            const result = await this.connectionPool.request().query(sql);
            return result.recordset;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}
