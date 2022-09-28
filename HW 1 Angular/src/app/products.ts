export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    cat: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
      cat: "XL",
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
      cat: "Mini",
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'A basic phone with all facilities',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
      cat: "Standard",
    }
  ];