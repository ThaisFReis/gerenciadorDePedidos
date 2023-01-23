import { Order } from '../models/order.model';
import db from '../database/database';
import moment from 'moment';

const getAll = (): Promise<Order[]> => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM orders', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows);
      });
    });
}
  
const getById = (id: number): Promise<Order | undefined> => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows[0]);
      });
    });
}
  
const create = (order: Order): Promise<Order> => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO orders (customer_name, customer_email, status, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [order.customer_name, order.customer_email, order.status, moment().toISOString()],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
}

const update = (id: number, order: Order): Promise<Order | undefined> => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
        [order.status, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.rows[0]);
        }
      );
    });
}
  
const deleteById = (id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM orders WHERE id = $1', [id], (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
}
  
const filterByStatus = (status: string): Promise<Order[]> => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM orders WHERE status = $1', [status], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows);
      });
    });
}

export { getAll, getById, create, update, deleteById, filterByStatus };