# KOA, TypeORM, Postgres. API Base

## Node version & yarn version
Yarn - `1.22.18`
Node - `16.15.0`

## Required software/services
- Postgres
- Git
- Docker (only for production, good to have)

### Download packages
`yarn`
Or with npm
`npm install`

### Copy .env.template
copy the current `.env.template` and rename it to `.env`

### Run project
`yarn add global nodemon`
Or with npm
`npm install -g nodemon`

### Migrations
`yarn migration:create` Create a empty migration
`yarn migration:generate` Create migration out from entity changes
`yarn migration:run` Run all pending migrations
