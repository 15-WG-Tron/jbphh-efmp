# Project Name - Local Development Setup

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

This command sets up a local instance of Supabase by creating a Docker container with the required database.

Once the Docker container is up and running, copy the database URL and update the `.env` file. If the `.env` file doesn't exist, create a new one and add the following line:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:54322/postgres"
```

Make sure to replace the URL with the copied database URL.

## Running the Project

You are now ready to run the project locally. Use the following command to start the application:

```
npm run dev
```

This will start the development server and make the application accessible at the provided URL.

## Additional Notes

Feel free to reach out to the project maintainers if you encounter any issues or have any questions.
