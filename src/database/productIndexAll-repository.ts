interface IndexAllResponse {
  id: number;
  title: string;
  price: number;
  rating: number;
  rating_qty: number;
  photos: {
    url: string;
    alt_text: string;
  }[];
}

export interface ProductIndexAllRepository {
  index: () => Promise<IndexAllResponse[] | void>;
}
