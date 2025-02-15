import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Boxes, Shield, Star, HeadsetIcon, Key, Zap, Flame } from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import PurchaseButton from './components/PurchaseButton';
import { products } from './data/products';

function App() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <NetworkBackground />
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-2">
          <div className="max-w-[2560px] mx-auto flex justify-between items-center">
            <Link to="/" className="h-12">
              <img 
                src="https://i.imgur.com/5bn3ZTG.png" 
                alt="Cosmic Cheats" 
                className="h-full w-auto"
              />
            </Link>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-white hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-white hover:text-purple-300 transition-colors">
                Products
              </Link>
              <a 
                href="https://discord.gg/cosmic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-white hover:text-purple-300 transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-[2560px] mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-500/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-purple-500/20">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold tracking-widest uppercase text-sm">
                Military-Grade Kernel Security
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <h1 className="text-5xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
                <span>COSMIC</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">CHEATS</span>
              </h1>
              <p className="text-purple-300/60 text-sm font-medium tracking-wide">
                Providing high quality cheats since 2021
              </p>
            </div>

            <div className="flex gap-3 mb-12">
              <Link
                to="/products"
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 flex items-center gap-2 text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              >
                <Boxes size={18} className="text-purple-200" />
                View Products
              </Link>
              <a
                href="https://discord.gg/cosmic"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 text-white px-6 py-2.5 rounded-md font-medium hover:bg-purple-500/10 transition-colors duration-200 flex items-center gap-2 text-sm shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
              >
                <svg className="w-[18px] h-[18px] text-purple-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </a>
            </div>

            {/* Products Section */}
            <div className="mt-12 text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/20 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                <Flame className="text-purple-400" size={18} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold tracking-widest uppercase text-sm">
                  Best Selling Products
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto product-grid">
              {Object.entries(products).map(([id, product]) => (
                <div key={id} className="product-card bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.07)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-xl font-bold text-white mb-1">{product.name}</h2>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-purple-200/80 text-sm">
                        <Zap size={16} className="text-purple-400" />
                        <span>Instant Updates</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-200/80 text-sm">
                        <Shield size={16} className="text-purple-400" />
                        <span>Undetectable</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-200/80 text-sm">
                        <Key size={16} className="text-purple-400" />
                        <span>Instant Delivery</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-200/80 text-sm">
                        <HeadsetIcon size={16} className="text-purple-400" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                    <PurchaseButton
                      to={`/products/${id}`}
                      className="price-button h-12 bg-purple-600 hover:bg-purple-500 text-white rounded-md font-medium transition-all duration-200 flex items-center justify-center px-6 text-sm w-full"
                    >
                      View Details
                    </PurchaseButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <section className="mt-32 mb-24">
              <h3 className="text-center text-purple-400 text-2xl font-semibold mb-2">Advanced Precision Systems</h3>
              <p className="text-center text-purple-300/60 text-sm mb-12">Quantum-level accuracy with military-grade protection</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <Shield className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">Kernel Protection</h4>
                  <p className="text-purple-200/60 text-sm">Military-grade kernel-level obfuscation with quantum encryption.</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <Zap className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">Instant Updates</h4>
                  <p className="text-purple-200/60 text-sm">Real-time updates and patches for continuous protection.</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <Key className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">Instant Delivery</h4>
                  <p className="text-purple-200/60 text-sm">Automated delivery system for immediate access to your purchase.</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <HeadsetIcon className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">24/7 Support</h4>
                  <p className="text-purple-200/60 text-sm">Round-the-clock access to our dedicated support team.</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <Star className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">Premium Quality</h4>
                  <p className="text-purple-200/60 text-sm">Industry-leading solutions with proven reliability.</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <Boxes className="text-purple-400 mb-3" size={20} />
                  <h4 className="text-white font-medium mb-2">Multiple Products</h4>
                  <p className="text-purple-200/60 text-sm">Comprehensive suite of security solutions for all needs.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;