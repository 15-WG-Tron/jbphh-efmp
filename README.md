# AlohaCommunity or OhanaOutreach - Local Development Setup

This guide will walk you through the steps to run the project locally on your machine. Follow these instructions to set up the project environment and dependencies.

## Prerequisites

- Git
- Node.js (>= 12.x)
- Docker

## Getting Started

### 1. Clone the Repository

```
git clone <repository-url>
```

### 2. Install Dependencies

```
npm ci --legacy-peer-deps
```

This command will perform a clean install of the project dependencies. If you encounter any dependency errors, try running the command with the `--legacy-peer-deps` flag.

### 3. Invoke Prisma Client

```
npx prisma
```

This command invokes the Prisma Client and allows you to interact with the database.

### 4. Generate Prisma Client

```
npx prisma generate
```

Running this command will generate the Prisma Client, which enables database access from the code.

### 5. Set Up Local Supabase Instance

Ensure that Docker is running on your machine before proceeding with the following steps.

```
npm run createDevDatabase
```

This command sets up a local instance of Supabase by creating a Docker container with the required database. You only need to run this command once unless you want to recreate the database.

To start the database, use the following command:

```
npm run db:start
```

To stop the database, use the following command:

```
npm run db:stop
```

Once the Docker container is up and running, if the `.env` file does not exist, create a new one. Otherwise, skip this step.

### 6. Update the Database URL

If you created a new `.env` file, add the following line and replace `<database-url>` with the copied database URL:

```
DATABASE_URL=<database-url>
```

Make sure to replace `<database-url>` with the actual database URL.

## Running the Project

You are now ready to run the project locally. Use the following command to start the application:

```
npm run dev
```

This will start the development server and make the application accessible at the provided URL.

## Testing

To run unit tests, use the following command:

```
npm run test:unit
```

This command will execute all unit tests and provide the test results.

To run tests with code coverage, use the following command:

```
npm run test
```

Running this command will execute all tests and generate a code coverage report.

To test a specific file, use the following command:

```
npm run test:unit "test-name"
```

Replace `"test-name"` with the actual name of the test file.

To run a specific test with code coverage, use the following command:

```
npm run test "test-name"
```

Replace `"test-name"` with the actual name of the test.

## Additional Notes

Feel free to reach out to the project maintainers if you encounter any issues or have any questions.
