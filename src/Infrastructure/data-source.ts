import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./Entitties/User/User.js"
import { Initial1716368716817 } from "./migration/1716368716817-Initial.js"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "anbuibz54",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [Initial1716368716817],
    subscribers: [],
})
