# SUMSUE Backend

### Environment
Create a `.env` file containing

```
PORT=6969
TEST_USER=email@example.com
TEST_PASSWORD=1234567890
DB_DEV_NAME=dbname
DB_DEV_USER=dbuser
DB_DEV_PASSWORD=dbpassword
DB_DEV_HOST=localhost
```

### Database
Create migration

```
knex migrate:make migration_name
```

Create schema

```
knex migrate:latest
knex migrate:up
```

Drop schema

```
knex migrate:down
```

Create data value
```
knex seed:run
```
### Run 
```
yarn 
yarn dev
```
