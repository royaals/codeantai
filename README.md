# CodeAnt AI

CodeAnt AI, a web application that allows users to create, manage, and collaborate on code repositories. It provides a platform for developers to collaborate on projects, share code, and track progress.

## Features

- **Code Quality**
- **Adherence to Design**
- **Functionality**
- **Performance**
- **Responsiveness**

## Hosted Link

You can access the live application at [codeant.ai.devprojects.world](https://codeant.ai.devprojects.world).


## Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/royaals/codeantai.git
   cd codeantai
   ```
2. Install dependencies:
    ```sh
    npm install
    ```

3. - Rename `.env.example` to `.env` and add the following environment variables:

   - `DATABASE_URL`: This should be your PostgreSQL database URL. For example, If you're using a PostgreSQL provider like Neon.tech, Supabase, Aiven, etc., use the URL they provide.
   - `NextAuth_URL`: localhost:3000 or your domain
   - `GITHUB_ID`: Your Github ID
   - `GITHUB_SECRET`: Your Github Secret

4. Run Prisma migrations. This command will apply the database schema changes:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Generate the Prisma client. This command will generate the Prisma client code:
   ```bash
   npx prisma generate
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```
