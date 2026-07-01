'use client';

import { useModal } from '@/src/context/ModalContext';
import Image from 'next/image';
import Link from 'next/link';

// Category list for the sidebar
const categories = [
  "Action & Adventure",
  "Biography & Memoir",
  "Business & Finance",
  "Children's Books",
  "Comic Books & Graphic Novels",
  "Cookbook",
  "History",
  "Photography",
  "Self-Help",
  "Travel Books",
];

export default function PortfolioPage() {
  // Creating an array for the 80 images
  const bookImages = Array.from({ length: 85 }, (_, i) => i + 1);

    const { openModal } = useModal();
  
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
          <div className="bg-[#1a1a1a]/90 border border-gray-700 p-10 max-w-md shadow-2xl backdrop-blur-sm">
            <h1 className="text-4xl text-white font-serif font-medium mb-6 leading-tight">
              Your Book <br /> Could Be Next
            </h1>
            <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-8 py-3 text-sm transition">
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Published Books We're <br /> Proud Of
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT SIDEBAR: Categories */}
            <aside className="lg:w-1/4">
              <div className="sticky top-28">
                <div className="bg-np-gold text-white px-6 py-3 font-serif text-lg font-bold uppercase tracking-wider mb-4">
                  Categories
                </div>
                <ul className="border border-gray-100 shadow-sm">
                  {categories.map((cat, index) => (
                    <li key={index} className="border-b border-gray-100 last:border-0">
                      <Link 
                        href="#" 
                        className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-np-beige hover:text-np-gold transition-colors"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* RIGHT CONTENT: Book Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                {bookImages.map((num) => (
                  <div key={num} className="group flex flex-col items-center text-center">
                    <div className="relative w-full aspect-[2/3] shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <Image
                        src={`/Book/Book${num}.jpg`}
                        alt={`Published Book ${num}`}
                        fill
                        className="object-cover border border-gray-200"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-serif font-bold text-gray-900 mb-1 group-hover:text-np-gold transition-colors">
                        Professional Publication
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500">
                        By Professional Book Publishers
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section className="py-20 bg-np-beige text-center border-b-[20px] border-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Partner with the Top Book <br/> Publishing Company in the USA
          </h2>
          <p className="text-gray-600 mb-8">
            From manuscript to marketplace, we handle everything.
          </p>
          <button onClick={openModal}  className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md">
            Consult An Expert
          </button>
          <p className="mt-6 text-sm text-gray-600">
            Or call us at <span className="font-bold text-np-gold">+1 (888) 919-9811</span> for quick support.
          </p>
        </div>
      </section>
    </>
  );
}