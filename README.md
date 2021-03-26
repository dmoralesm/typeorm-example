# TypeORM example

TypeORM example using Active Record

Run dev
```
npm start
```

Create and run production build
```
npm run build
node dist/index.js
```

## Migrations
[If entities files are in typescript](https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#if-entities-files-are-in-typescript)

Generate
```
npm run typeorm migration:generate -- -n MigrationName
```

Run migration
```
npm run typeorm migration:run
```

