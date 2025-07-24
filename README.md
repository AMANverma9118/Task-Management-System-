
# Task Management System API

A simple RESTful API for managing tasks (To-Do app) built with Node.js, Express, TypeScript, PostgreSQL, and Prisma ORM.

## Features
- CRUD operations for tasks
- PostgreSQL database (via Prisma ORM)
- Input validation (Joi)
- Pagination, search, and filter
- Swagger/OpenAPI documentation
- ESLint and Prettier for code quality


## Hosted API

The API is deployed and available at: [https://task-management-system-36ub.onrender.com](https://task-management-system-36ub.onrender.com)

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


## API Documentation with Example Requests/Responses

### Create a Task
**POST** `/api/tasksInput`
**Request:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "PENDING"
}
```
**Response:**
```json
{
  "id": "c1a2b3c4-d5e6-7890-1234-56789abcdef0",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "PENDING",
  "createdAt": "2025-07-24T12:34:56.789Z",
  "updatedAt": "2025-07-24T12:34:56.789Z"
}
```

### Get All Tasks (with pagination, search, filter)
**GET** `/api/tasksGetByFilter?page=1&limit=10&status=PENDING&title=groceries`
**Response:**
```json
{
  "total": 1,
  "page": 1,
  "limit": 10,
  "tasks": [
    {
      "id": "c1a2b3c4-d5e6-7890-1234-56789abcdef0",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": "PENDING",
      "createdAt": "2025-07-24T12:34:56.789Z",
      "updatedAt": "2025-07-24T12:34:56.789Z"
    }
  ]
}
```

### Get Task by ID
**GET** `/api/tasksGetByID/{id}`
**Response:**
```json
{
  "id": "c1a2b3c4-d5e6-7890-1234-56789abcdef0",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "PENDING",
  "createdAt": "2025-07-24T12:34:56.789Z",
  "updatedAt": "2025-07-24T12:34:56.789Z"
}
```
If not found:
```json
{
  "message": "Task not found"
}
```

### Update Task
**PUT** `/api/tasksUpdate/{id}`
**Request:**
```json
{
  "title": "Buy groceries and fruits",
  "status": "IN_PROGRESS"
}
```
**Response:**
```json
{
  "id": "c1a2b3c4-d5e6-7890-1234-56789abcdef0",
  "title": "Buy groceries and fruits",
  "description": "Milk, Bread, Eggs",
  "status": "IN_PROGRESS",
  "createdAt": "2025-07-24T12:34:56.789Z",
  "updatedAt": "2025-07-24T13:00:00.000Z"
}
```
If not found:
```json
{
  "message": "Task not found"
}
```

### Delete Task
**DELETE** `/api/tasksDelete/{id}`
**Response:**
```json
{
  "message": "Task deleted successfully"
}
```
If not found:
```json
{
  "message": "Task not found"
}
```


## Task Object Structure
```
{
  "id": "uuid", // All task IDs are generated using UUID (universally unique identifier)
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
