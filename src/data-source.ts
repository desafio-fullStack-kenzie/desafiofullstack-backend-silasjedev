import "reflect-metadata"
import "dotenv/config"
import path from "path"
import {DataSource, DataSourceOptions} from "typeorm"

const setDataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{js,ts}");

    const nodeEnv= process.env.NODE_ENV;

    if(nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        }

    };

    return{
        type: "postgres",
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: 5432,
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};

const AppDataSource = new DataSource(setDataSourceConfig());
export default AppDataSource