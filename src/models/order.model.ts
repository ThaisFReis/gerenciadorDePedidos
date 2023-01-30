export class Order {
    id: string;
    customer: string;
    items: Array<{
      product: string;
      quantity: number;
      price: number;
    }>;
    total: number;
    date: Date;
  
    constructor(id: string, customer: string, items: Array<{ product: string; quantity: number; price: number }>, total: number, date: Date) {
      this.id = id;
      this.customer = customer;
      this.items = items;
      this.total = total;
      this.date = date;
    }
  }