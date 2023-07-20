# JBPHH Ohana

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

Running this command will execute all
