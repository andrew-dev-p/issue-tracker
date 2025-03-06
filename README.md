# Description

This is an **Issue Tracker** built with **Next.js** and **TypeScript**, designed to help teams efficiently manage and track software issues, feature requests, and bug reports.

## Features

- **Issue Management**: Create, edit, assign, and track issues with relevant metadata such as status and assignees.
  
- **Filtering & Sorting**: Easily filter and sort issues based on status and labels users for better organization.
  
- **User Authentication**: Secure login and authentication system using **NextAuth.js** to manage user permissions.

- **Markdown Support**: Issues and comments support **Markdown formatting** for better readability and structuring.

- **Responsive Design**: Fully responsive layout, optimized for both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for building fast and scalable applications with server-side rendering (SSR) and static site generation (SSG).

- **TypeScript**: A strongly typed superset of JavaScript to improve code quality and maintainability.

- **Prisma**: A modern database ORM for seamless interaction with databases like PostgreSQL and MySQL.

- **NextAuth.js**: A robust authentication library to handle user authentication and session management.

- **React Query**: A powerful data-fetching library for handling API requests, caching, and background updates efficiently.

- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive UI development.

- **React Icons**: A collection of customizable icons for better UI representation.

- Radix UI: A set of accessible, unstyled components for building high-quality UI experiences with flexibility and customization.

- Sentry: A performance monitoring and error tracking tool that helps identify and fix application issues in real time.

- NeonDB: A serverless, fully managed PostgreSQL database designed for modern web applications, offering high availability and scalability.

## Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/your-repo/issue-tracker.git
$ cd issue-tracker
$ npm install
```

## Running the App

Start the development server:

```bash
$ npm run dev
```

## Set up your .env file

Before running the app, create a `.env.local` file in the root directory and configure the following environment variables:

```bash
DATABASE_URL=your_database_url
AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Usage

Once the app is running, open your browser and navigate to **http://localhost:3000** to start tracking issues effectively.

