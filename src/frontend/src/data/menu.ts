export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: string;
  spiceLevel?: 'mild' | 'medium' | 'hot';
}

export const menuCategories = [
  { id: 'starters', name: 'Starters', icon: '🥟' },
  { id: 'soups', name: 'Soups', icon: '🍜' },
  { id: 'noodles', name: 'Noodles', icon: '🍝' },
  { id: 'rice', name: 'Fried Rice', icon: '🍚' },
  { id: 'manchurian', name: 'Manchurian & Gravy', icon: '🥘' },
  { id: 'beverages', name: 'Beverages & Desserts', icon: '🥤' }
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'st1',
    name: 'Veg Spring Rolls',
    description: 'Crispy rolls filled with fresh vegetables and served with sweet chili sauce',
    price: 180,
    isVeg: true,
    category: 'starters',
    spiceLevel: 'mild'
  },
  {
    id: 'st2',
    name: 'Chicken Spring Rolls',
    description: 'Golden fried rolls stuffed with minced chicken and vegetables',
    price: 220,
    isVeg: false,
    category: 'starters',
    spiceLevel: 'mild'
  },
  {
    id: 'st3',
    name: 'Chilli Paneer Dry',
    description: 'Cottage cheese cubes tossed in spicy Indo-Chinese sauce with bell peppers',
    price: 240,
    isVeg: true,
    category: 'starters',
    spiceLevel: 'hot'
  },
  {
    id: 'st4',
    name: 'Chilli Chicken Dry',
    description: 'Boneless chicken pieces in fiery chili sauce with onions and peppers',
    price: 280,
    isVeg: false,
    category: 'starters',
    spiceLevel: 'hot'
  },
  {
    id: 'st5',
    name: 'Crispy Corn',
    description: 'Sweet corn kernels coated in spiced batter and deep fried to perfection',
    price: 200,
    isVeg: true,
    category: 'starters',
    spiceLevel: 'medium'
  },
  {
    id: 'st6',
    name: 'Honey Chilli Potato',
    description: 'Crispy fried potato fingers glazed with honey and chili sauce',
    price: 190,
    isVeg: true,
    category: 'starters',
    spiceLevel: 'medium'
  },
  {
    id: 'st7',
    name: 'Dragon Chicken',
    description: 'Spicy chicken preparation with red chili sauce and aromatic spices',
    price: 300,
    isVeg: false,
    category: 'starters',
    spiceLevel: 'hot'
  },
  {
    id: 'st8',
    name: 'Veg Momos (Steamed)',
    description: 'Delicate dumplings filled with seasoned vegetables, served with spicy chutney',
    price: 160,
    isVeg: true,
    category: 'starters',
    spiceLevel: 'mild'
  },

  // Soups
  {
    id: 'sp1',
    name: 'Hot & Sour Veg Soup',
    description: 'Tangy and spicy soup with mixed vegetables and tofu',
    price: 140,
    isVeg: true,
    category: 'soups',
    spiceLevel: 'medium'
  },
  {
    id: 'sp2',
    name: 'Hot & Sour Chicken Soup',
    description: 'Classic Indo-Chinese soup with shredded chicken and vegetables',
    price: 160,
    isVeg: false,
    category: 'soups',
    spiceLevel: 'medium'
  },
  {
    id: 'sp3',
    name: 'Sweet Corn Veg Soup',
    description: 'Creamy soup with sweet corn kernels and vegetables',
    price: 130,
    isVeg: true,
    category: 'soups',
    spiceLevel: 'mild'
  },
  {
    id: 'sp4',
    name: 'Sweet Corn Chicken Soup',
    description: 'Rich and creamy soup with sweet corn and tender chicken pieces',
    price: 150,
    isVeg: false,
    category: 'soups',
    spiceLevel: 'mild'
  },
  {
    id: 'sp5',
    name: 'Manchow Soup',
    description: 'Spicy thick soup topped with crispy fried noodles',
    price: 150,
    isVeg: true,
    category: 'soups',
    spiceLevel: 'hot'
  },
  {
    id: 'sp6',
    name: 'Wonton Soup',
    description: 'Clear soup with delicate vegetable wontons',
    price: 170,
    isVeg: true,
    category: 'soups',
    spiceLevel: 'mild'
  },

  // Noodles
  {
    id: 'nd1',
    name: 'Veg Hakka Noodles',
    description: 'Stir-fried noodles with fresh vegetables and soy sauce',
    price: 180,
    isVeg: true,
    category: 'noodles',
    spiceLevel: 'mild'
  },
  {
    id: 'nd2',
    name: 'Chicken Hakka Noodles',
    description: 'Classic hakka noodles tossed with chicken and vegetables',
    price: 220,
    isVeg: false,
    category: 'noodles',
    spiceLevel: 'mild'
  },
  {
    id: 'nd3',
    name: 'Veg Schezwan Noodles',
    description: 'Spicy noodles in fiery schezwan sauce with mixed vegetables',
    price: 200,
    isVeg: true,
    category: 'noodles',
    spiceLevel: 'hot'
  },
  {
    id: 'nd4',
    name: 'Chicken Schezwan Noodles',
    description: 'Hot and spicy noodles with chicken in authentic schezwan sauce',
    price: 240,
    isVeg: false,
    category: 'noodles',
    spiceLevel: 'hot'
  },
  {
    id: 'nd5',
    name: 'Singapore Noodles',
    description: 'Thin rice noodles with curry flavor and mixed vegetables',
    price: 210,
    isVeg: true,
    category: 'noodles',
    spiceLevel: 'medium'
  },
  {
    id: 'nd6',
    name: 'Triple Schezwan Rice',
    description: 'Combination of schezwan rice, noodles and manchurian',
    price: 280,
    isVeg: true,
    category: 'noodles',
    spiceLevel: 'hot'
  },
  {
    id: 'nd7',
    name: 'American Chopsuey',
    description: 'Crispy noodles topped with sweet and sour vegetable gravy',
    price: 220,
    isVeg: true,
    category: 'noodles',
    spiceLevel: 'mild'
  },

  // Fried Rice
  {
    id: 'rc1',
    name: 'Veg Fried Rice',
    description: 'Aromatic rice stir-fried with fresh vegetables and soy sauce',
    price: 170,
    isVeg: true,
    category: 'rice',
    spiceLevel: 'mild'
  },
  {
    id: 'rc2',
    name: 'Chicken Fried Rice',
    description: 'Classic fried rice with tender chicken pieces and vegetables',
    price: 210,
    isVeg: false,
    category: 'rice',
    spiceLevel: 'mild'
  },
  {
    id: 'rc3',
    name: 'Veg Schezwan Fried Rice',
    description: 'Spicy fried rice in schezwan sauce with mixed vegetables',
    price: 190,
    isVeg: true,
    category: 'rice',
    spiceLevel: 'hot'
  },
  {
    id: 'rc4',
    name: 'Chicken Schezwan Fried Rice',
    description: 'Fiery schezwan rice with chicken and vegetables',
    price: 230,
    isVeg: false,
    category: 'rice',
    spiceLevel: 'hot'
  },
  {
    id: 'rc5',
    name: 'Burnt Garlic Fried Rice',
    description: 'Fragrant rice with burnt garlic and vegetables',
    price: 200,
    isVeg: true,
    category: 'rice',
    spiceLevel: 'mild'
  },
  {
    id: 'rc6',
    name: 'Paneer Fried Rice',
    description: 'Fried rice with cottage cheese cubes and vegetables',
    price: 220,
    isVeg: true,
    category: 'rice',
    spiceLevel: 'mild'
  },
  {
    id: 'rc7',
    name: 'Egg Fried Rice',
    description: 'Classic fried rice with scrambled eggs and vegetables',
    price: 190,
    isVeg: false,
    category: 'rice',
    spiceLevel: 'mild'
  },

  // Manchurian & Gravy
  {
    id: 'mn1',
    name: 'Veg Manchurian Gravy',
    description: 'Vegetable balls in rich Indo-Chinese gravy',
    price: 220,
    isVeg: true,
    category: 'manchurian',
    spiceLevel: 'medium'
  },
  {
    id: 'mn2',
    name: 'Chicken Manchurian Gravy',
    description: 'Chicken balls in savory manchurian sauce',
    price: 260,
    isVeg: false,
    category: 'manchurian',
    spiceLevel: 'medium'
  },
  {
    id: 'mn3',
    name: 'Paneer Chilli Gravy',
    description: 'Cottage cheese in spicy chili sauce with bell peppers',
    price: 250,
    isVeg: true,
    category: 'manchurian',
    spiceLevel: 'hot'
  },
  {
    id: 'mn4',
    name: 'Chicken Chilli Gravy',
    description: 'Boneless chicken in fiery chili gravy',
    price: 290,
    isVeg: false,
    category: 'manchurian',
    spiceLevel: 'hot'
  },
  {
    id: 'mn5',
    name: 'Veg Hakka Gravy',
    description: 'Mixed vegetables in light hakka sauce',
    price: 210,
    isVeg: true,
    category: 'manchurian',
    spiceLevel: 'mild'
  },
  {
    id: 'mn6',
    name: 'Szechuan Paneer',
    description: 'Cottage cheese in spicy szechuan sauce',
    price: 260,
    isVeg: true,
    category: 'manchurian',
    spiceLevel: 'hot'
  },
  {
    id: 'mn7',
    name: 'Szechuan Chicken',
    description: 'Chicken pieces in authentic szechuan sauce',
    price: 300,
    isVeg: false,
    category: 'manchurian',
    spiceLevel: 'hot'
  },

  // Beverages & Desserts
  {
    id: 'bv1',
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime soda with a hint of mint',
    price: 80,
    isVeg: true,
    category: 'beverages'
  },
  {
    id: 'bv2',
    name: 'Virgin Mojito',
    description: 'Classic mojito with fresh mint and lime',
    price: 120,
    isVeg: true,
    category: 'beverages'
  },
  {
    id: 'bv3',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink with fresh mango pulp',
    price: 100,
    isVeg: true,
    category: 'beverages'
  },
  {
    id: 'bv4',
    name: 'Iced Tea',
    description: 'Chilled tea with lemon and mint',
    price: 90,
    isVeg: true,
    category: 'beverages'
  },
  {
    id: 'ds1',
    name: 'Honey Noodles with Ice Cream',
    description: 'Crispy fried noodles drizzled with honey, served with vanilla ice cream',
    price: 180,
    isVeg: true,
    category: 'beverages'
  },
  {
    id: 'ds2',
    name: 'Date Pancake',
    description: 'Sweet pancake with dates and honey',
    price: 160,
    isVeg: true,
    category: 'beverages'
  }
];
