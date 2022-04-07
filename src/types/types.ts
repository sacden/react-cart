export interface IAuth {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

export interface IProduct {
  id: number;
  name: string;
  img: string;
  text: string;
  value: number;
}

export interface IProducts {
  increase: (identificator: number) => void;
  decrease: (identificator: number) => void;
  product: IProduct;
}
