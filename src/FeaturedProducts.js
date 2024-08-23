import React from 'react';
import './FeaturedProducts.css'; // Import your CSS file for styling

const FeaturedProducts = () => {
  // Example product data (replace with your actual data)
  const products = [
    { id: 1, name: "Product 1", description: "Description of Product 1", imgSrc: "https://via.placeholder.com/150", link: "/products/1" },
    { id: 2, name: "Product 2", description: "Description of Product 2", imgSrc: "https://via.placeholder.com/150", link: "/products/2" },
    { id: 3, name: "Product 3", description: "Description of Product 3", imgSrc: "https://via.placeholder.com/150", link: "/products/3" },
    { id: 4, name: "Product 4", description: "Description of Product 4", imgSrc: "https://via.placeholder.com/150", link: "/products/4" },
    { id: 5, name: "Product 5", description: "Description of Product 5", imgSrc: "https://via.placeholder.com/150", link: "/products/5" },
    { id: 6, name: "Product 6", description: "Description of Product 6", imgSrc: "https://via.placeholder.com/150", link: "/products/6" },
    { id: 7, name: "Product 7", description: "Description of Product 7", imgSrc: "https://via.placeholder.com/150", link: "/products/7" },
    { id: 8, name: "Product 8", description: "Description of Product 8", imgSrc: "https://via.placeholder.com/150", link: "/products/8" },
    { id: 9, name: "Product 9", description: "Description of Product 9", imgSrc: "https://via.placeholder.com/150", link: "/products/9" }
  ];

  return (
    <section className="featured-products-section">
      <h2 className="featured-products-heading">Featured Products</h2>
      <div className="featured-products-grid">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
          >
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </a>
        ))}
      </div>
      <div className="view-all-container">
        <a href="/products" className="view-all-button">View All Products</a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
