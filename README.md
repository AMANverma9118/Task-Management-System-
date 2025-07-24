
# Task Management System API

A simple RESTful API for managing tasks (To-Do app) built with Node.js, Express, TypeScript, PostgreSQL, and Prisma ORM.

## Features
- CRUD operations for tasks
- PostgreSQL database (via Prisma ORM)
- Input validation (Joi)
- Pagination, search, and filter
- Swagger/OpenAPI documentation
- ESLint and Prettier for code quality

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Set up environment variables:**
   - Create a `.env` file and add your PostgreSQL connection string as `DATABASE_URL`.
3. **Generate Prisma client:**
   ```sh
   npx prisma generate
   ```
4. **Run the server (development):**
   ```sh
   npm run dev
   ```
5. **Build and start (production):**
   ```sh
   npm run build
   npm start
   ```
6. **API Docs:**
   Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) for Swagger UI.

## API Endpoints

### Create a Task
`POST /api/tasksInput`
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "PENDING"
}
```

### Get All Tasks (with pagination, search, filter)
`GET /api/tasksGetByFilter?page=1&limit=10&status=PENDING&title=groceries`

### Get Task by ID
`GET /api/tasksGetByID/{id}`

### Update Task
`PUT /api/tasksUpdate/{id}`
```json
{
  "title": "Buy groceries and fruits",
  "status": "IN_PROGRESS"
}
```

### Delete Task
`DELETE /api/tasksDelete/{id}`

## Task Object Structure
```
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "PENDING | COMPLETED | IN_PROGRESS",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## Technology Stack
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Joi (validation)

## License
MIT
