export interface Inventory {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  price: number;
  title: string;
  year: number;
  description: string;
}

export enum InventoryActionTypes {
  FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
  FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
  FETCH_ERROR = "@@inventory/FETCH_ERROR"
}

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly errors?: string;
}
