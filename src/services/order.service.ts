import { PrismaClient } from '@prisma/client';
import { Order } from '../models/order.model';

const prisma = new PrismaClient();

export const getAll = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany();
  return orders;
};

export const getById = async (id: number): Promise<Order> => {
  const order = await prisma.order.findOne({ where: { id } });
  return order;
};

export const create = async (order: Order): Promise<Order> => {
  const newOrder = await prisma.order.create({ data: order });
  return newOrder;
};

export const update = async (id: number, order: Order): Promise<Order> => {
  const updatedOrder = await prisma.order.update({
    where: { id },
    data: order,
  });
  return updatedOrder;
};

export const deleteById = async (id: number): Promise<void> => {
  await prisma.order.delete({ where: { id } });
};

export const filterByStatus = async (status: string): Promise<Order[]> => {
  const ordersFilterByStatus = await prisma.order.findMany({ where: { status } });
  return ordersFilterByStatus;
};

export default {
    getAll,
    getById,
    create,
    update,
    deleteById,
    filterByStatus,
};