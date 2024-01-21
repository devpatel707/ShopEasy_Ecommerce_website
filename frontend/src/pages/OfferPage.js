import React, { useState } from 'react';

const offers = [
  // { id: 1, title: 'Offer 1', description: 'Description of offer 1', category: 'Electronics' },
  // { id: 2, title: 'Offer 2', description: 'Description of offer 2', category: 'Clothing' },
  // { id: 3, title: 'Offer 3', description: 'Description of offer 3', category: 'Home' },
    {
      id: 1,
      title: 'Summer Sale!',
      description: 'Enjoy our summer sale with up to 40% off on selected items.',
      category: 'General',
    },
    {
      id: 2,
      title: 'Buy 1, Get 1 Free - Tops',
      description: 'Buy one top and get another one for free. Limited stock available!',
      category: 'Apparel',
    },
    {
      id: 3,
      title: 'Weekend Special: 30% Off Electronics',
      description: 'Exclusive weekend offer! Grab your favorite electronics at discounted prices.',
      category: 'Electronics',
    },
    {
      id: 4,
      title: 'Back-to-School Deals',
      description: 'Get ready for school with our special back-to-school offers on stationery and accessories.',
      category: 'School Supplies',
    },
    {
      id: 5,
      title: 'Home Refresh Sale: 15% Off Furniture',
      description: 'Upgrade your home with new furniture and enjoy a 15% discount on your purchase.',
      category: 'Furniture',
    },
    {
      id: 6,
      title: 'Flash Sale: 50% Off Beauty Products',
      description: 'Hurry! Limited-time offer on beauty and skincare products. Save big today.',
      category: 'Beauty',
    },
    {
      id: 7,
      title: 'Tech Bonanza: Up to 25% Off Laptops and Tablets',
      description: 'Explore our tech bonanza and grab amazing discounts on laptops and tablets.',
      category: 'Electronics',
    },
    {
      id: 8,
      title: 'Buy 2, Get 1 Free - Books',
      description: 'Expand your library with our buy 2 books, get 1 free offer. Don\'t miss out!',
      category: 'Books',
    },
    {
      id: 9,
      title: 'Kitchen Essentials Sale: 20% Off Cookware',
      description: 'Upgrade your kitchen with our high-quality cookware at a 20% discount.',
      category: 'Kitchen',
    },
    {
      id: 10,
      title: 'Fitness Gear Sale: 30% Off Selected Items',
      description: 'Achieve your fitness goals with our discounted fitness gear. Limited stock available.',
      category: 'Fitness',
    },
    {
      id: 11,
      title: 'Year-End Clearance: Up to 60% Off Everything',
      description: 'Say goodbye to the year with huge discounts across all categories. Shop now!',
      category: 'General',
    },
    {
      id: 12,
      title: 'Outdoor Adventure Sale: 15% Off Camping Gear',
      description: 'Gear up for your outdoor adventures with our discounted camping gear.',
      category: 'Outdoor',
    },
    {
      id: 13,
      title: 'Gaming Extravaganza: Up to 40% Off Games and Consoles',
      description: 'Level up your gaming experience with our amazing gaming deals.',
      category: 'Gaming',
    },
    {
      id: 14,
      title: 'Pet Lovers Special: 20% Off Pet Supplies',
      description: 'Show some love to your pets with discounted pet supplies. Limited time offer!',
      category: 'Pets',
    },
    {
      id: 15,
      title: 'Art and Craft Sale: Buy 2, Get 1 Free',
      description: 'Unleash your creativity with our art and craft supplies. Special offer for artists!',
      category: 'Art and Craft',
    },
    {
      id: 16,
      title: 'Fashion Frenzy: Buy 3, Get 2 Free - Accessories',
      description: 'Enhance your style with our fashionable accessories. Grab this amazing offer now!',
      category: 'Fashion',
    },
    {
      id: 17,
      title: 'Home Entertainment Sale: 25% Off TVs and Sound Systems',
      description: 'Upgrade your home entertainment with our discounted TVs and sound systems.',
      category: 'Electronics',
    },
    {
      id: 18,
      title: 'DIY Enthusiast Deals: 20% Off Tools and Supplies',
      description: 'Empower your DIY projects with our high-quality tools and supplies at a discount.',
      category: 'Tools',
    },
    {
      id: 19,
      title: 'Car Accessories Sale: Up to 30% Off',
      description: 'Enhance your driving experience with discounted car accessories.',
      category: 'Automotive',
    },
    {
      id: 20,
      title: 'Luxury Watches: Limited Time Offer',
      description: 'Indulge in luxury with our limited time offer on exquisite watches. Shop now!',
      category: 'Watches',
    }
  
  // Add more offers as needed
];

const OfferPage = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOfferClick = (offerId) => {
    setSelectedOffer(offerId === selectedOffer ? null : offerId);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredOffers = selectedCategory
    ? offers.filter(offer => offer.category === selectedCategory)
    : offers;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Special Offers</h1>
      
      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter by Category:</label>
        <select id="category" onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      <ul>
        {filteredOffers.map((offer) => (
          <li key={offer.id} className="mb-4 p-4 bg-white shadow rounded hover:cursor-pointer">
            <div onClick={() => handleOfferClick(offer.id)}>
              <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
              <p className="text-gray-500">{offer.category}</p>
            </div>
            {selectedOffer === offer.id && (
              <p className="text-gray-700">{offer.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferPage;
