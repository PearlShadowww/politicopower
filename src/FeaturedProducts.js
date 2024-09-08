import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { id: 1, title: 'HALF SLEEVES COTTON TSHIRT', description: 'Available in every Size and Color', imageUrl: 'https://www.imghost.net/ib/6rZnM9Yt1VYSnfs_1725175174.png' },
    { id: 2, title: 'FULL SLEEVES COTTON TSHIRT', description: 'This is another great product.', imageUrl: 'https://www.imghost.net/ib/gOovTMlUSTSrWMv_1725217091.png' },
    { id: 3, title: 'POLO TSHIRTS', description: 'This product is also great.', imageUrl: 'https://www.imghost.net/ib/MACuwxB1NMUqbSr_1725217093.png' },
    { id: 4, title: 'SWEAT-SHIRT WITHOUT HOOD', description: 'You will love this product.', imageUrl: 'https://www.imghost.net/ib/emJnLgtJHJDru1d_1725217093.png' },
    { id: 5, title: 'HOODIE', description: 'Best product in the market.', imageUrl: 'https://www.imghost.net/ib/3VK0vXG2yapREvc_1725217206.png' },
    { id: 6, title: 'LARGE CLOTH BANNER', description: 'Highly recommended product.', imageUrl: 'https://www.imghost.net/ib/2UTtrCcSx4TZXCM_1725217205.png' },
    { id: 7, title: 'TABLE FLAGS', description: 'Must have product.', imageUrl: 'https://www.imghost.net/ib/pvEoNnO1FEAHOgU_1725217203.png' },
    { id: 8, title: 'BANNER', description: 'Top quality product.', imageUrl: 'https://www.imghost.net/ib/ZhCwcGIIBqk93mH_1725217228.png' },
    { id: 9, title: 'MUGS', description: 'Excellent product.', imageUrl: 'https://www.imghost.net/ib/3SZWuPGJLCPAw48_1725218089.png' },
    { id: 10, title: 'MUGS', description: 'Excellent product.', imageUrl: 'https://www.imghost.net/ib/3SZWuPGJLCPAw48_1725218089.png' },
    { id: 11, title: 'MUGS', description: 'Excellent product.', imageUrl: 'https://www.imghost.net/ib/3SZWuPGJLCPAw48_1725218089.png' },
    { id: 12, title: 'MUGS', description: 'Excellent product.', imageUrl: 'https://www.imghost.net/ib/3SZWuPGJLCPAw48_1725218089.png' },

  ];

  return (
    <section className="featured-products">
      <h2 className="heading">Fully Customisable Products</h2>
      <p className="custom-line">Every product mentioned is available in every SIZE and COLOR</p> {/* Custom p tag between heading and product cards */}
      <div className="grid-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.imageUrl} alt={product.title} className="image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
