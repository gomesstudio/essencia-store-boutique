import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Principles } from './components/Principles';
import { Showroom } from './components/Showroom';
import { ConciergeBanner } from './components/ConciergeBanner';
import { FooterContact } from './components/FooterContact';
import { ProductModal } from './components/ProductModal';
import { ShowroomModal } from './components/ShowroomModal';
import { FloatingConcierge } from './components/FloatingConcierge';
import { StoreDemoBar } from './components/StoreDemoBar';
import { BoutiqueBagDrawer, BagItem } from './components/BoutiqueBagDrawer';
import { Product } from './types';
import { PRODUCTS } from './data/catalog';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [showroomModalOpen, setShowroomModalOpen] = useState<boolean>(false);
  const [bagDrawerOpen, setBagDrawerOpen] = useState<boolean>(false);

  // Boutique Bag state (persisted)
  const [bagItems, setBagItems] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem('essencia_store_bag') || localStorage.getItem('maison_jardins_bag');
      if (saved) return JSON.parse(saved);
      // Default 1 item in bag for realistic boutique demo
      const initialProd = PRODUCTS[0];
      return initialProd
        ? [{ product: initialProd, size: initialProd.sizes?.[0] || 'M', quantity: 1 }]
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('essencia_store_bag', JSON.stringify(bagItems));
    } catch (e) {
      // Ignore storage errors in restricted contexts
    }
  }, [bagItems]);

  const handleAddToBag = (product: Product, size: string) => {
    setBagItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.size === size
      );
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setBagDrawerOpen(true);
  };

  const handleUpdateBagQuantity = (productId: string, size: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((it) => {
          if (it.product.id === productId && it.size === size) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean) as BagItem[]
    );
  };

  const handleRemoveFromBag = (productId: string, size: string) => {
    setBagItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.size === size))
    );
  };

  // Wishlist state (persisted in localStorage for authentic real UX)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('essencia_store_wishlist') || localStorage.getItem('maison_jardins_wishlist') || localStorage.getItem('nova_concept_wishlist');
      return saved ? JSON.parse(saved) : ['prod-1', 'prod-2'];
    } catch {
      return ['prod-1', 'prod-2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('essencia_store_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      // Ignore storage errors in restricted contexts
    }
  }, [wishlist]);

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWishlistFilter = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalBagItemsCount = bagItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#FBF9F5] text-[#1C1C1A] flex flex-col font-sans selection:bg-[#1C1C1A] selection:text-white">
      {/* Top Header & Announcements */}
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={handleOpenWishlistFilter}
        bagCount={totalBagItemsCount}
        onOpenBag={() => setBagDrawerOpen(true)}
      />

      {/* Main Editorial Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Category Curations */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Featured Products Active Catalog */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onProductClick={(product) => setActiveProduct(product)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* Editorial Principles & Philosophy */}
        <Principles />

        {/* São Paulo Physical Showroom */}
        <Showroom onScheduleVisit={() => setShowroomModalOpen(true)} />

        {/* Direct Atendimento Banner */}
        <ConciergeBanner />
      </main>

      {/* Contact Form & Footer Section */}
      <FooterContact />

      {/* Modals & Overlays */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        isWishlisted={activeProduct ? wishlist.includes(activeProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToBag={handleAddToBag}
      />

      <ShowroomModal
        isOpen={showroomModalOpen}
        onClose={() => setShowroomModalOpen(false)}
      />

      <BoutiqueBagDrawer
        isOpen={bagDrawerOpen}
        onClose={() => setBagDrawerOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateBagQuantity}
        onRemoveItem={handleRemoveFromBag}
        onClearBag={() => setBagItems([])}
        onOpenShowroomModal={() => {
          setBagDrawerOpen(false);
          setShowroomModalOpen(true);
        }}
      />

      {/* Persistent Floating Atendimento CTA */}
      <FloatingConcierge />

      {/* Persuasive Demo Badge / Pitch Bar for prospective store owners */}
      <StoreDemoBar />
    </div>
  );
}
