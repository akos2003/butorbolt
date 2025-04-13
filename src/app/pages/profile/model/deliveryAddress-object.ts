export class DeliveryAddress {
    id: number;
    street: string;
    city: string;
    postal: number;
  
    constructor();
    constructor(id: number, street: string, city: string, postal: number);
    constructor(id?: number, street?: string, city?: string, postal?: number) {
      this.id = typeof id === 'number' ? id : 0;
      this.street = street || '';
      this.city = city || '';
      this.postal = typeof postal === 'number' ? postal : 0;
    }
  }
  