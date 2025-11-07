# Deployment

To deploy the frontend app you need to install Node.JS on your operating system and clone the project.

```bash
git clone url
```

Go to the conned project folder and execute the dependencies install command.

```bash
npm install
```

If you don't have any database server you can use docker to run the postgres database server (to run this command is required to have docker installed on your system).

This command creates a database server opened on the port 5432, you need to change the value of POSTGRES_PASSWORD to your deserved database password.

The default user of this database is postgres.

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

To run the database using postgres you need to use those SQL sentences.

Create database, change the value of database_name :

```sql
CREATE DATABASE database_name;
```

Create required tables:

```sql
CREATE TABLE public.duty (
	id varchar NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT duty_pk PRIMARY KEY (id)
);
```

Create a file called .env on the project root folder with all the variables (this data is an example, use your own values for each variable).

```env
DB_HOST = localhost
DB_PORT = 5432
DB_USER = postgres
DB_PASSWORD = m68ys0ZcYwFkzz73kRrE
DB_NAME = npx_tech_test
APP_PORT = 3000
```

With the install of the dependencies and the env variables you can be able to run the project with the next command.

```bash
npm run dev
```

If you want to run the tests use the next command.

```bash
npm run test
```