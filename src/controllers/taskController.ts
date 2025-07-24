import { Request, Response } from 'express';
import { prisma } from '../utils/db';
import { v4 as uuidv4 } from 'uuid';

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;
    const task = await prisma.task.create({
      data: {
        id: uuidv4(),
        title,
        description,
        status: status || 'PENDING',
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error });
  }
};

// Get all tasks (with optional pagination, search, filter)
export const getTasks = async (req: Request, res: Response) => {
  try {
    const { status, title, page = 1, limit = 10 } = req.query;
    const where: any = {};
    if (status) where.status = status;
    if (title) where.title = { contains: String(title), mode: 'insensitive' };
    const total = await prisma.task.count({ where });
    const tasks = await prisma.task.findMany({
      where,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    });
    res.json({ total, page: Number(page), limit: Number(limit), tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error });
  }
};

// Get a task by ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch task', error });
  }
};

// Update a task by ID
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = await prisma.task.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(status && { status }),
        updatedAt: new Date(),
      },
    });
    res.json(task);
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as any).code === 'P2025'
    ) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(500).json({ message: 'Failed to update task', error });
  }
};

// Delete a task by ID
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id } });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as any).code === 'P2025'
    ) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(500).json({ message: 'Failed to delete task', error });
  }
};
