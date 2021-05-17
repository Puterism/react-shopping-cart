export enum ButtonSize {
  SMALL = 'SMALL',
  REGULAR = 'REGULAR',
  LARGE = 'LARGE',
}

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
  checked: boolean;
};

export type Order = {
  id: number;
  items: CartItem[];
};

export enum AsyncStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
