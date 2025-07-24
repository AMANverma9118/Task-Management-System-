import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().allow('').required(),
  status: Joi.string().valid('PENDING', 'COMPLETED', 'IN_PROGRESS').optional(),
});

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};