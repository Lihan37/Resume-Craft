export interface Pricing {
  monthly: {
    free: {
      price: number;
      download: number;
    };
    premium: {
      price: number;
      download: number;
    };
    enterprise: {
      price: number;
      download: number;
    };
    discount: {
      amount: number;
    };
  };
  yearly: {
    free: {
      price: number;
      download: number;
    };
    premium: {
      price: number;
      download: number;
    };
    enterprise: {
      price: number;
      download: number;
    };
    discount: {
      amount: number;
    };
  };
  _id: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
