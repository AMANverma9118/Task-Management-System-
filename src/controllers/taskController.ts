import { Request, Response } from 'express';
import { prisma } from '../utils/db';

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;
    const task = await prisma.task.create({
      data: {
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

