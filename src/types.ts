export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  prepTime: string;
  spiceLevel: 0 | 1 | 2 | 3; // 0 = none, 3 = very spicy
  image: string;
  isSignature?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
}
