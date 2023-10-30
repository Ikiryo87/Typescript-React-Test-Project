# Fivano Stack Overview

At Fivano, we use the following stack for our development:

- **TypeScript (JavaScript) with React**: We use TypeScript in combination with React for our application's front-end.

- **HTML and CSS**: We use HTML and CSS to create and style components and make changes as needed.

- **Next.js**: Next.js is the framework we use to run our project. It serves as both the front-end and the server/backend API. This allows us to share TypeScript types between the front-end and back-end. You can find more information about Next.js in the [official documentation](https://nextjs.org/docs).

- **MUI (Material-ui)**: Material-UI (MUI) is used to set up the entire front-end. It provides a set of standard components that adhere to Google Material Design standards, forming a solid foundation for our application. You can explore Material-UI [here](https://mui.com/).

- **Mongoose and MongoDB**: We use [Mongoose](https://mongoosejs.com/) for database schema handling and MongoDB as our database.

- **Firebase**: Firebase is employed for user authentication. More details can be found [here](https://firebase.google.com/).

## Base App Details

The base app incorporates code from two Next.js and Material-UI examples:

- [Example with Mongoose](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)
- [Example with Material-UI](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)

To get started with a new task, refer to the Tasks page. You can add a new task using Mongoose with MongoDB. The Task entity includes a schema model in `[root]/models` and an API in `[root]/src/app/api/tasks`. You can use this as an example to work on your assignment.

The base app is designed to make it easy to start without having to configure components like MUI or Mongoose. Here are the steps to get started:

1. Clone the base app repository with `git clone`.
2. Open the directory with your code editor (we recommend using VS Code).
3. Run `npm install` in the terminal to install the dependencies.
4. Create a free MongoDB cluster by following the steps 1 untill 4 (skip the 5 and upwards) in "Create a database user for your cluster" from [MongoDB's official documentation](https://www.mongodb.com/docs/atlas/getting-started/).
5. Copy the MongoDB database connection string from [MongoDB Compass](https://www.mongodb.com/docs/compass/current/connect/).
6. Create a file in the root directory named `.env` and add the MongoDB connection string as 'MONGODB_URI'. It should look something like this (replace the string with your own connection string): `MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.dawef.mongodb.net/DATABASENAME?retryWrites=true&w=majority"`
7. Run `npm run dev` to start the development server.
8. Visit http://localhost:3000/ in your browser to view the app.

For more information on how Next.js works, you can refer to the provided links.

## App Objectives

The goal is to build a simple app with the following capabilities:

### Companies CRUD List

- Create, Read, Update, Delete (CRUD) functionality for a list of companies. Each company has a name and address information.
- The list should be able to:
- Display a list of companies.
- Add new companies to the list with a form.
- Edit existing companies with a form.
- Delete existing companies.

### People CRUD List

- Create, Read, Update, Delete (CRUD) functionality for a list of people. Each person has name, address, and a company associated with them.
- The list should be able to:
- Display a list of people along with their associated company names.
- Add new people to the list with a form.
- Edit existing people with a form.
- Delete existing people.
- Bonus: Implement search functionality to search for people by first name and last name.
- Bonus: Implement the ability to sort the list alphabetically by last name, both A-Z and Z-A.

The lists are built using MUI components. For more details, refer to the [MUI documentation](https://mui.com/material-ui/getting-started/).
