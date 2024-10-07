# Nx Monorepo with Angular and React Apps

This monorepo is built using [Nx](https://nx.dev/), and includes both an **Angular** and a **React** app. The apps are deployed on **Vercel** for easy deployment and scalability.

## Deployed Apps

[Angular App](https://explorejsonplaceholder-react-app.vercel.app/)
[React App](https://explorejsonplaceholder-react-app.vercel.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Apps](#running-the-apps)
- [Building the Apps](#building-the-apps)
- [Deployment](#deployment)
- [Links to Deployed Apps](#links-to-deployed-apps)

---

## Project Overview

This monorepo is designed to handle multiple projects in one repository, with shared libraries and tools for development, testing, and deployment. It uses Nx to manage both an Angular and React app, providing a modern developer experience with fast builds and a flexible structure.

### Technology Stack:

- **Angular**: A front-end web framework for building single-page applications.
- **React**: A JavaScript library for building user interfaces.
- **Vercel**: A cloud platform for deploying and hosting web applications, especially front-end projects.

---

## Folder Structure

- **`apps/explorejsonplaceholder/`**: Contains the Angular application's code.
- **`apps/my-react-app/`**: Contains the React application's code.

---

## Setup Instructions

### 1. Clone the Repository:

```bash
git clone <your-repository-url>
cd <your-repository-folder>

```

```
npm install
nx graph
```

### 2. Install Dependencies:

After cloning the repository, install all required dependencies for both apps and the Nx workspace by running:

```
npm install
```

### 3. Nx Workspace Configuration:

Nx offers a lot of tools to manage multiple applications in one repository. You can visualize the dependency graph of your apps and libraries by running:

```
nx graph
```

## Running the Apps

Once the dependencies are installed, you can start running the applications.

#### Angular App:

To run the Angular app locally, use the following command:

```
nx serve explorejsonplaceholder
```

#### React App:

To run the React app locally, use the following command:

```
nx serve my-react-app
```

## Building the Apps

To create optimized production builds for the apps, you can use the Nx build commands.

#### Angular App:

To build the Angular app, use the following command:

```
nx build angular-app
```

The production build will be created in the dist/apps/explorejsonplaceholder/browser directory.

#### React App:

To build the React app, use the following command:

```
nx build my-react-app
```

## Deployment

Both apps are deployed on Vercel. To deploy your changes or redeploy the apps, follow the instructions below.

#### 1. Vercel Account:

Ensure that you have a Vercel account and that this repository is linked to Vercel.

#### 2. Set Up Vercel for Angular and React Apps:

For each app, configure separate Vercel projects and link them to the appropriate app directories in your Nx workspace:

- Angular App: Link Vercel to apps/explorejsonplaceholder/, and ensure the build output uses the dist/apps/explorejsonplaceholder/browser directory.
- React App: Link Vercel to apps/my-react-app/, and ensure the build output uses the dist/apps/react-app directory.

#### 3. Deploying to Vercel:

Once connected to Vercel, every push to the main branch (or the default branch) will trigger a new deployment. You can also deploy manually using the Vercel CLI or via the Vercel Dashboard.

To trigger a manual deployment from the terminal, use:

```bash

vercel --prod
```

This command deploys the app in production mode.

## Links to Deployed Apps

Once the apps are deployed, you can access them via the following links:

[Angular App](https://explorejsonplaceholder-react-app.vercel.app/)
[React App](https://explorejsonplaceholder-react-app.vercel.app/)
