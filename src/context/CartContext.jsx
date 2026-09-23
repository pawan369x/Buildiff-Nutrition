import React, { createContext, useState, useEffect } from 'react';
import { useCart } from './useCart';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('titan_fitness_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 1,
          name: "Gold Standard 100% Whey Protein (2kg)",
          category: "supplements",
          categoryLabel: "Supplements",
          price: 4999,
          originalPrice: 6499,
          discount: "23% OFF",
          rating: 4.8,
          reviews: 1420,
          tag: "Bestseller",
          image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=80",
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('titan_fitness_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'products'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [coupon, setCoupon] = useState({ code: '', discountPercent: 0, applied: false });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('titan_fitness_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('titan_fitness_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`⚡ Added to Cart: ${product.name.slice(0, 24)}...`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed from Wishlist`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`❤️ Saved to Wishlist: ${product.name.slice(0, 20)}...`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const applyCoupon = (code) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'FITNESS20' || trimmed === 'GYM20') {
      setCoupon({ code: trimmed, discountPercent: 20, applied: true });
      showToast('🎉 Coupon FITNESS20 applied! 20% OFF');
      return { success: true, message: '20% Discount applied!' };
    } else if (trimmed === 'TITAN10') {
      setCoupon({ code: trimmed, discountPercent: 10, applied: true });
      showToast('🎉 Coupon TITAN10 applied! 10% OFF');
      return { success: true, message: '10% Discount applied!' };
    } else {
      showToast('❌ Invalid coupon code. Try FITNESS20', 'error');
      return { success: false, message: 'Invalid coupon code. Try FITNESS20' };
    }
  };

  const removeCoupon = () => {
    setCoupon({ code: '', discountPercent: 0, applied: false });
    showToast('Coupon removed', 'info');
  };

  // Select category and switch to products page
  const navigateToCategory = (catId) => {
    setActiveCategory(catId);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculations
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round((subtotal * coupon.discountPercent) / 100);
  const deliveryFee = subtotal > 1500 || subtotal === 0 ? 0 : 99;
  const gst = Math.round((subtotal - discount) * 0.18);
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAccountModalOpen,
        setIsAccountModalOpen,
        activeTab,
        setActiveTab,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        navigateToCategory,
        coupon,
        applyCoupon,
        removeCoupon,
        totalItems,
        subtotal,
        discount,
        deliveryFee,
        gst,
        finalTotal,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart };
