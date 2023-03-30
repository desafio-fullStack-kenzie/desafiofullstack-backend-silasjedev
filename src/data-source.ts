import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Image } from "./entities/image.entity";
import { Contact } from "./entities/contact.entity";
import {initialmigration1680143077408} from "./migrations/1680143077408-initialmigration"

const setDataSourceConfig = (): DataSourceOptions => {

    const nodeEnv = process.env.NODE_ENV;

    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [User, Address, Image, Contact],
            migrations: [initialmigration1680143077408],
        }
    }

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [User, Address, Image, Contact],
        };
    }

    return {
        type: "postgres",
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT),
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [User, Address, Image, Contact],
        migrations: [initialmigration1680143077408],
    };
};

const AppDataSource = new DataSource(setDataSourceConfig());
export default AppDataSource