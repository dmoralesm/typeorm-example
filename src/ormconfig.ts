import path from 'path';
import { ConnectionOptions } from 'typeorm';

const isCompiled = path.extname(__filename).includes('.js');
const rootFolder = isCompiled ? 'dist' : 'src';
const fileExtension = isCompiled ? '.js' : '.ts';

export default {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "hellouser",
    password: "hellouser",
    database: "hellodb",
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: [
        `${rootFolder}/entity/**/*${fileExtension}`
    ],
    migrations: [
        `${rootFolder}/migration/**/*${fileExtension}`
    ],
    subscribers: [
        `${rootFolder}/subscriber/**/*${fileExtension}`
    ],
    cli: {
       "entitiesDir": `${rootFolder}/entity`,
       "migrationsDir": `${rootFolder}/migration`,
       "subscribersDir": `${rootFolder}/subscriber`
    }
 } as ConnectionOptions;