import React, { useState, useMemo } from 'react';
import { Star, ShoppingBag, Check, Zap, SlidersHorizontal, ArrowUpDown, Heart, Sparkles, Shield } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const {
    addToCart,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    toggleWishlist,
    isInWishlist
  } = useCart();

  const [sortBy, setSortBy] = useState('featured');
  const [addedIds, setAddedIds] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section className="products-section" id="products-catalog">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <div className="section-subtitle">
              <Zap size={16} className="icon-pulse text-neon-volt" />
              <span>TITAN PRO LABS • CERTIFIED GEAR</span>
            </div>
            <h2 className="section-title">
              HEAVY IRON <span className="highlight-text">& SUPPLEMENTS</span>
            </h2>
          </div>

          <div className="sort-wrapper">
            <span className="sort-label"><ArrowUpDown size={15} /> Sort By:</span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills with Glowing Active State */}
        <div className="category-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
              {activeCategory === cat.id && <span className="pill-dot"></span>}
            </button>
          ))}
        </div>

        {/* Search status if searching */}
        {searchQuery && (
          <div className="search-status-bar">
            <span>Showing results for "<strong>{searchQuery}</strong>" ({filteredProducts.length} items found)</span>
            <button
              className="btn-clear-search-pill"
              onClick={() => setSearchQuery('')}
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => {
              const isAdded = addedIds[product.id];
              const isWishlisted = isInWishlist(product.id);

              return (
                <div key={product.id} className="product-card cyber-card">
                  {/* Card Image Area with Floating Wishlist */}
                  <div className="product-image-box">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      loading="lazy"
                    />

                    {/* Left Tag */}
                    <div className="card-badge-tag">{product.tag}</div>

                    {/* Discount Pill */}
                    <div className="discount-pill">{product.discount}</div>

                    {/* Wishlist Heart Button */}
                    <button
                      className={`btn-card-wishlist ${isWishlisted ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product)}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      aria-label="Wishlist toggle"
                    >
                      <Heart size={16} fill={isWishlisted ? '#ff3b30' : 'none'} stroke={isWishlisted ? '#ff3b30' : '#ffffff'} />
                    </button>
                  </div>

                  {/* Card Content Area */}
                  <div className="product-info">
                    <div className="product-top-meta">
                      <span className="product-category-text">{product.categoryLabel}</span>
                      <span className="stock-hint">
                        <Sparkles size={12} className="text-accent" /> In Stock
                      </span>
                    </div>

                    <h3 className="product-name">{product.name}</h3>

                    {/* Ratings */}
                    <div className="product-rating-row">
                      <div className="rating-pill">
                        <Star size={13} fill="#ffb703" stroke="#ffb703" />
                        <span>{product.rating}</span>
                      </div>
                      <span className="review-count">({product.reviews.toLocaleString('en-IN')} verified ratings)</span>
                    </div>

                    <p className="product-desc-short">{product.description}</p>

                    {/* Price Row */}
                    <div className="product-pricing">
                      <div className="price-stack">
                        <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                        <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <span className="tax-inclusive-tag">GST Included</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="product-actions-group">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`btn-add-cart ${isAdded ? 'added' : ''}`}
                        title="Add to Cart"
                      >
                        {isAdded ? (
                          <>
                            <Check size={18} />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={18} />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="btn-quick-buy"
                        title="Buy Now"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-products-box">
            <SlidersHorizontal size={48} className="empty-icon" />
            <h3>No products found</h3>
            <p>Try searching for something else like "Whey", "Dumbbells", or select another category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
