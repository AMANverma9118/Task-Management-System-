# Task Management System API

A simple RESTful API for managing tasks (To-Do app) built with Node.js, Express, and TypeScript.

## Features
- CRUD operations for tasks
- In-memory data store
- Input validation (Joi)
- Pagination, search, and filter
- Swagger/OpenAPI documentation
- ESLint and Prettier for code quality

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the server (development):**
   ```sh
   npm run dev
   ```
3. **Build and start (production):**
   ```sh
   npm run build
   npm start
   ```
4. **API Docs:**
   Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) for Swagger UI.

## API Endpoints

### Create a Task
`POST /api/tasks`
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "PENDING"
}
```

### Get All Tasks
`GET /api/tasks?page=1&limit=10&status=PENDING&title=groceries`

### Get Task by ID
`GET /api/tasks/:id`

### Update Task
`PUT /api/tasks/:id`
```json
{
  "title": "Buy groceries and fruits",
  "status": "IN_PROGRESS"
}
```

### Delete Task
`DELETE /api/tasks/:id`

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

## License
MIT
