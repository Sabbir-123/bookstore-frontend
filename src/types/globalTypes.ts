export interface IBooks {
  _id: string;
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  email?: string;
  price: number;
  wishlist?: any[];
  coverImage: string;
  finishedBooks?: any[];
  reviews?: any[];
  comments?: any[];
  quantity?: number;
}
