# JBPHH Ohana

This guide will help you run the JBPHH Ohana project on your local machine. Follow these steps to set up your environment and dependencies.

## Prerequisites

Ensure you have these prerequisites installed on your machine:

- **Git**: Version control for managing the codebase.
- **Node.js (>= 12.x)**: JavaScript runtime for running the frontend.
- **Docker**: Containerization platform for managing services like the database.

## Getting Started

1. **Clone the Repository**

   Clone the project repository to your local machine. Replace `<repository-url>` with the URL of the project repository.

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm ci --legacy-peer-deps
   ```

   Use the `--legacy-peer-deps` flag if you encounter dependency errors.

## Initializing the Database (First-time Setup)

If setting up the project for the first time, initialize and start the database container and the Directus backend using:

```bash
npm run createDevDatabase
```

## Running the Frontend

Start the frontend of the JBPHH Ohana project with:

```bash
npm run dev
```

This will launch the development server and make the application accessible at the provided URL.

## Running the Backend (Directus)

To run the Directus backend, use:

```bash
npx directus start
```

## Managing the Database

For database management, use the following scripts:

- **Start the Database**:

  ```bash
  npm run db:start
  ```

- **Stop the Database**:

  ```bash
  npm run db:stop
  ```

- **Check Database Status**:

  ```bash
  npm run db:status
  ```

- **View Database Tables**:

  ```bash
  npm run db:studio
  ```

- **Reset the Database**:

  ```bash
  npm run db:reset
  ```

- **Seed the Database**:

  ```bash
  npm run db:seed
  ```

Please ensure the database is running before starting Directus.

## Creating Snapshots

When modifying the data model, create a snapshot for consistent changes:

```bash
npm run createSnapshot
```

## Testing

To ensure project stability, run tests:

- **Run Unit Tests**:

  ```bash
  npm run test:unit
  ```

- **Run Tests with Code Coverage**:

  ```bash
  npm run test
  ```

These commands facilitate database management and testing for your project. Happy coding!