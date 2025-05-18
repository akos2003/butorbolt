import { DeliveryAddress } from './deliveryAddress-object';

export class Customer {
  id: string;
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
    id: string,
    address: DeliveryAddress
  );
  constructor(
    name?: string,
    email?: string,
    password?: string,
    phone?: string,
    id?: string,
    address?: DeliveryAddress
  ) {
    this.id = id || '';
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.phone = phone || '';
    this.address = address || new DeliveryAddress();
  }
}
