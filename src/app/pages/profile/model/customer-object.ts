import { DeliveryAddress } from './deliveryAddress-object';

export class Customer {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: DeliveryAddress;

  constructor();
  constructor(
    name: string,
    email: string,
    password: string,
    phone: string,
    id: number,
    address: DeliveryAddress
  );
  constructor(
    name?: string,
    email?: string,
    password?: string,
    phone?: string,
    id?: number,
    address?: DeliveryAddress
  ) {
    this.id = typeof id === 'number' ? id : 0;
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.phone = phone || '';
    this.address = address || new DeliveryAddress();
  }
}
