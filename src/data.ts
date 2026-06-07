import { MenuItem, Review } from './types.ts';

const PANEER_IMAGE = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop";
const KEBAB_IMAGE = "https://images.unsplash.com/photo-1599487405230-6b6ae69a7c36?q=80&w=600&auto=format&fit=crop";
const DHAL_IMAGE = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop";
const BREAD_IMAGE = "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop";
const RICE_IMAGE = "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=600&auto=format&fit=crop";
const DOSA_IMAGE = "https://images.unsplash.com/photo-1610196720235-9477aa0d2cf3?q=80&w=600&auto=format&fit=crop";
const DESSERT_IMAGE = "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?q=80&w=600&auto=format&fit=crop";
const DRINK_IMAGE = "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop";
const STREET_IMAGE = "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=600&auto=format&fit=crop";

export const menuCategories = [
  "Starters", "Main Course", "Indian Breads", "Rice", "South Indian", "Street Food", "Desserts", "Beverages"
];

export const menuItems: MenuItem[] = [
  // Starters
  { id: 's1', name: 'Paneer Tikka', category: 'Starters', price: 450, rating: 4.8, description: 'Cubes of paneer marinated in yogurt and spices, grilled in tandoor.', prepTime: '15 mins', spiceLevel: 2, image: 'https://images.unsplash.com/photo-1610196720235-9477aa0d2cf3?q=80&w=600&auto=format&fit=crop', isSignature: true },
  { id: 's2', name: 'Hara Bhara Kebab', category: 'Starters', price: 350, rating: 4.5, description: 'Healthy patties made with spinach, peas, and potatoes.', prepTime: '12 mins', spiceLevel: 1, image: KEBAB_IMAGE },
  { id: 's3', name: 'Veg Spring Roll', category: 'Starters', price: 300, rating: 4.6, description: 'Crispy rolls stuffed with julienne vegetables.', prepTime: '10 mins', spiceLevel: 1, image: PANEER_IMAGE },
  { id: 's4', name: 'Dahi Kebab', category: 'Starters', price: 380, rating: 4.9, description: 'Melt-in-mouth kebabs made from hung curd and paneer.', prepTime: '15 mins', spiceLevel: 1, image: KEBAB_IMAGE, isSignature: true },
  { id: 's5', name: 'Veg Manchurian', category: 'Starters', price: 320, rating: 4.5, description: 'Deep-fried vegetable balls in a spicy, sweet and tangy sauce.', prepTime: '12 mins', spiceLevel: 2, image: STREET_IMAGE },
  { id: 's6', name: 'Crispy Corn', category: 'Starters', price: 280, rating: 4.4, description: 'Crispy fried sweet corn tossed with spices.', prepTime: '10 mins', spiceLevel: 1, image: STREET_IMAGE },
  { id: 's7', name: 'Chilli Paneer', category: 'Starters', price: 350, rating: 4.7, description: 'Crispy paneer tossed in spicy chilli sauce.', prepTime: '12 mins', spiceLevel: 3, image: PANEER_IMAGE },
  { id: 's8', name: 'Stuffed Mushroom', category: 'Starters', price: 400, rating: 4.6, description: 'Button mushrooms stuffed with cheese and spices.', prepTime: '15 mins', spiceLevel: 1, image: KEBAB_IMAGE },
  { id: 's9', name: 'Tandoori Broccoli', category: 'Starters', price: 350, rating: 4.5, description: 'Broccoli florets marinated in yogurt and grilled.', prepTime: '15 mins', spiceLevel: 1, image: KEBAB_IMAGE },
  { id: 's10', name: 'Veg Seekh Kebab', category: 'Starters', price: 380, rating: 4.8, description: 'Minced vegetable skewers cooked in tandoor.', prepTime: '18 mins', spiceLevel: 2, image: KEBAB_IMAGE },

  // Main Course (Subset representation)
  { id: 'm1', name: 'Shahi Paneer', category: 'Main Course', price: 550, rating: 4.9, description: 'Paneer in a thick, rich, creamy, and nutty gravy.', prepTime: '20 mins', spiceLevel: 1, image: PANEER_IMAGE, isSignature: true },
  { id: 'm2', name: 'Paneer Butter Masala', category: 'Main Course', price: 520, rating: 4.8, description: 'Rich & creamy curry made with paneer, spices, onions, tomatoes.', prepTime: '20 mins', spiceLevel: 2, image: PANEER_IMAGE },
  { id: 'm3', name: 'Kadai Paneer', category: 'Main Course', price: 500, rating: 4.7, description: 'Spicy paneer curry with bell peppers and tomatoes.', prepTime: '18 mins', spiceLevel: 3, image: PANEER_IMAGE },
  { id: 'm4', name: 'Palak Paneer', category: 'Main Course', price: 480, rating: 4.6, description: 'Paneer in a smooth, creamy spinach puree.', prepTime: '18 mins', spiceLevel: 1, image: PANEER_IMAGE },
  { id: 'm5', name: 'Malai Kofta', category: 'Main Course', price: 550, rating: 4.9, description: 'Potato and paneer balls in a rich mughlai gravy.', prepTime: '25 mins', spiceLevel: 1, image: DHAL_IMAGE, isSignature: true },
  { id: 'm6', name: 'Dal Makhani', category: 'Main Course', price: 450, rating: 4.9, description: 'Whole black lentils cooked overnight with butter and cream.', prepTime: '20 mins', spiceLevel: 1, image: DHAL_IMAGE, isSignature: true },
  { id: 'm7', name: 'Dal Tadka', category: 'Main Course', price: 350, rating: 4.5, description: 'Tempered yellow lentil curry.', prepTime: '15 mins', spiceLevel: 2, image: DHAL_IMAGE },
  { id: 'm8', name: 'Aloo Gobi', category: 'Main Course', price: 380, rating: 4.4, description: 'Dry curry of potatoes and cauliflower.', prepTime: '18 mins', spiceLevel: 2, image: DHAL_IMAGE },
  { id: 'm9', name: 'Bhindi Masala', category: 'Main Course', price: 380, rating: 4.5, description: 'Okra cooked with onions and tomatoes.', prepTime: '15 mins', spiceLevel: 2, image: DHAL_IMAGE },
  { id: 'm10', name: 'Rajma Masala', category: 'Main Course', price: 400, rating: 4.6, description: 'Red kidney beans cooked in a spicy onion-tomato masala.', prepTime: '20 mins', spiceLevel: 2, image: DHAL_IMAGE },

  // Indian Breads
  { id: 'b1', name: 'Butter Naan', category: 'Indian Breads', price: 120, rating: 4.9, description: 'Soft, fluffy bread baked in tandoor, brushed with butter.', prepTime: '5 mins', spiceLevel: 0, image: BREAD_IMAGE },
  { id: 'b2', name: 'Garlic Naan', category: 'Indian Breads', price: 140, rating: 4.8, description: 'Naan topped with minced garlic and cilantro.', prepTime: '5 mins', spiceLevel: 0, image: BREAD_IMAGE },
  { id: 'b3', name: 'Cheese Naan', category: 'Indian Breads', price: 180, rating: 4.7, description: 'Naan stuffed with melting cheese.', prepTime: '8 mins', spiceLevel: 0, image: BREAD_IMAGE },
  { id: 'b4', name: 'Tandoori Roti', category: 'Indian Breads', price: 60, rating: 4.5, description: 'Whole wheat bread baked in tandoor.', prepTime: '5 mins', spiceLevel: 0, image: BREAD_IMAGE },
  { id: 'b5', name: 'Lachha Paratha', category: 'Indian Breads', price: 110, rating: 4.6, description: 'Multi-layered whole wheat flatbread.', prepTime: '8 mins', spiceLevel: 0, image: BREAD_IMAGE },

  // Rice
  { id: 'r1', name: 'Jeera Rice', category: 'Rice', price: 220, rating: 4.6, description: 'Basmati rice tempered with cumin seeds.', prepTime: '10 mins', spiceLevel: 0, image: RICE_IMAGE },
  { id: 'r2', name: 'Veg Pulao', category: 'Rice', price: 280, rating: 4.5, description: 'Rice cooked with mixed vegetables and mild spices.', prepTime: '15 mins', spiceLevel: 1, image: RICE_IMAGE },
  { id: 'r3', name: 'Hyderabadi Veg Biryani', category: 'Rice', price: 450, rating: 4.8, description: 'Aromatic basmati rice cooked with vegetables and biryani spices.', prepTime: '25 mins', spiceLevel: 3, image: RICE_IMAGE, isSignature: true },
  { id: 'r4', name: 'Steamed Rice', category: 'Rice', price: 180, rating: 4.2, description: 'Plain, fluffy steamed basmati rice.', prepTime: '10 mins', spiceLevel: 0, image: RICE_IMAGE },
  
  // South Indian
  { id: 'si1', name: 'Masala Dosa', category: 'South Indian', price: 250, rating: 4.7, description: 'Crispy rice crepe filled with spiced potato curry.', prepTime: '10 mins', spiceLevel: 1, image: DOSA_IMAGE, isSignature: true },
  { id: 'si2', name: 'Idli', category: 'South Indian', price: 150, rating: 4.6, description: 'Steamed lentil and rice cakes.', prepTime: '5 mins', spiceLevel: 0, image: STREET_IMAGE },
  { id: 'si3', name: 'Mysore Dosa', category: 'South Indian', price: 280, rating: 4.8, description: 'Spicy, red garlic chutney spread inside the dosa.', prepTime: '10 mins', spiceLevel: 2, image: DOSA_IMAGE },
  
  // Street Food
  { id: 'sf1', name: 'Pani Puri', category: 'Street Food', price: 150, rating: 4.9, description: 'Crispy hollow puris filled with spicy tangy water and potatoes.', prepTime: '5 mins', spiceLevel: 3, image: STREET_IMAGE },
  { id: 'sf2', name: 'Pav Bhaji', category: 'Street Food', price: 250, rating: 4.8, description: 'Spicy mixed vegetable mash served with buttered bread rolls.', prepTime: '15 mins', spiceLevel: 2, image: STREET_IMAGE, isSignature: true },
  { id: 'sf3', name: 'Chole Bhature', category: 'Street Food', price: 300, rating: 4.8, description: 'Spicy chickpea curry served with fried bread.', prepTime: '15 mins', spiceLevel: 2, image: STREET_IMAGE },
  
  // Desserts
  { id: 'd1', name: 'Gulab Jamun', category: 'Desserts', price: 180, rating: 4.9, description: 'Deep-fried milk dumplings soaked in sugar syrup.', prepTime: '5 mins', spiceLevel: 0, image: DESSERT_IMAGE, isSignature: true },
  { id: 'd2', name: 'Rasmalai', category: 'Desserts', price: 220, rating: 4.9, description: 'Soft paneer discs soaked in sweetened, thickened milk.', prepTime: '5 mins', spiceLevel: 0, image: DESSERT_IMAGE },
  { id: 'd3', name: 'Gajar Halwa', category: 'Desserts', price: 250, rating: 4.7, description: 'Classic Indian carrot pudding made with milk and ghee.', prepTime: '10 mins', spiceLevel: 0, image: DESSERT_IMAGE },

  // Beverages
  { id: 'bv1', name: 'Mango Lassi', category: 'Beverages', price: 180, rating: 4.8, description: 'Sweet yogurt drink blended with ripe mangoes.', prepTime: '5 mins', spiceLevel: 0, image: DRINK_IMAGE },
  { id: 'bv2', name: 'Masala Chai', category: 'Beverages', price: 120, rating: 4.7, description: 'Spiced Indian tea brewed with milk.', prepTime: '8 mins', spiceLevel: 0, image: DRINK_IMAGE },
  { id: 'bv3', name: 'Virgin Mojito', category: 'Beverages', price: 200, rating: 4.6, description: 'Refreshing mocktail with lime, mint, and soda.', prepTime: '5 mins', spiceLevel: 0, image: DRINK_IMAGE },
];

export const reviews: Review[] = [
  { id: 'r1', name: 'Anjali Sharma', rating: 5, text: 'Absolutely breathtaking experience! The attention to detail in the food and the stunning interior make it worth every penny. The Dal Makhani is the best in the city.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' },
  { id: 'r2', name: 'Vikram Mehta', rating: 5, text: 'Royal Spice Garden redefines luxury vegetarian dining. The Paneer Tikka melted in my mouth, and the service was impeccable. A Michelin-star level execution.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
  { id: 'r3', name: 'Priya Desai', rating: 4, text: 'A gorgeous venue for special occasions. The Hyderabadi Veg Biryani was deeply aromatic. Only wish we had more time to soak in the beautiful ambiance. Will be returning!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop' }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", // Interior
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop", // Food
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop", // Ambience
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop", // Dining table
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop", // Plating
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop", // Details
];
