import { Request, Response } from 'express';
import { getAll as getAllService, getById as getByIdService, create as createService, update as updateService, deleteById as deleteByIdService, filterByStatus as filterByStatusService } from '../services/order.service';

export async function getAll(req: Request, res: Response) {
    try {
      const orders = await getAllService();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json(error);
    }
}
  
export async function getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const order = await getByIdService(id);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
}
  
export async function create(req: Request, res: Response) {
    try {
      const order = req.body;
      const createdOrder = await createService(order);
      return res.status(201).json(createdOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
}

export async function update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const order = req.body;
      const updatedOrder = await updateService(id, order);
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
}


export async function deleteById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await deleteByIdService(id);
      return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function filterByStatus(req: Request, res: Response) {
    try {
      const status = req.params.status;
      const filteredOrders = await filterByStatusService(status);
      return res.status(200).json(filteredOrders);
    } catch (error) {
      return res.status(500).json(error);
    }
}