import * as OrderService from '../services/order.service';
import joi from 'joi';

const createOrderSchema = joi.object().keys({
  customer_name: joi.string().required(),
  customer_email: joi.string().email().required(),
  status: joi.string().valid('pending', 'completed').required(),
});

const updateOrderSchema = joi.object().keys({
  customer_name: joi.string().optional(),
  customer_email: joi.string().email().optional(),
  status: joi.string().valid('pending', 'completed').optional(),
});

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
  const orders = await OrderService.getAll();
    res.status(200).send(orders);
    } catch (error) {
    res.status(500).send({ error });
  }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await OrderService.getById(req.params.id);
    if (!order) {
     res.status(404).send({ message: "Order not found" });
    } else {
      res.status(200).send(order);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const validated = await joi.validate(req.body, createOrderSchema);
    const createdOrder = await OrderService.create(validated);
    res.status(201).send(createdOrder);
    } catch (error) {
      if (error.name === "ValidationError") {
        
      } else {
      res.status(500).send({ error });
      }
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
      const validated = await joi.validate(req.body, updateOrderSchema);
      const updatedOrder = await updateService(req.params.id, validated);
      if (!updatedOrder) {
        res.status(404).send({ message: "Order not found" });
      } else {
        res.status(200).send(updatedOrder);
      }
    } catch (error) {
      if (error.name === "ValidationError") {
      res.status(400).send({ error });
      } else {
        res.status(500).send({ error });
      }
  }
};
  
  export const deleteById = async (req: Request, res: Response): Promise<void> => {
    try {
    await deleteByIdService(req.params.id);
     res.status(204).send();
    } catch (error) {
     res.status(500).send({ error });
    }
  };
  
  export const filterByStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const orders = await ordersFilterByStatus(req.params.status);
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ error });
    }
  };