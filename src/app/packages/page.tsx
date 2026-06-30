  'use client';

import { useModal } from '@/src/context/ModalContext';
import Image from 'next/image';
import Link from 'next/link';

// Data structure for the packages to keep the JSX clean
const publishingPackages = [
  {
    name: "Standard Package",
    price: "299",
    oldPrice: "598",
    features: [
      "Manuscript Formatting",
      "Cover Design",
      "ISBN & Barcode Allocation",
      "Amazon Publishing (Kindle + Print)",
      "Dedicated Project Manager",
      "Author Dashboard Access"
    ],
    valueAdded: [
      "100% Royalties to Author",
      "Full Ownership Rights",
      "Lifetime Distribution",
      "100% Customer Satisfaction"
    ]
  },
  {
    name: "Silver Package",
    price: "699",
    oldPrice: "1398",
    features: [
      "Advanced Layout Formatting",
      "Custom Cover Design",
      "ISBN & Barcode Allocation",
      "Multi-Platform Publishing (Amazon, B&N)",
      "Dedicated Project Manager",
      "Basic Marketing Assets (3D Cover)",
      "Author Dashboard Access"
    ],
    valueAdded: [
      "100% Royalties to Author",
      "Full Ownership Rights",
      "Lifetime Distribution",
      "100% Customer Satisfaction"
    ]
  },
  {
    name: "Gold Package",
    price: "1299",
    oldPrice: "2598",
    features: [
      "Professional Editing & Formatting",
      "Premium Cover Design",
      "ISBN & Barcode Allocation",
      "Global Distribution (Amazon, B&N, Ingram)",
      "Dedicated Project Manager",
      "Advanced Marketing Assets (Video Trailer)",
      "Author Website (1 Page)"
    ],
    valueAdded: [
      "100% Royalties to Author",
      "Full Ownership Rights",
      "Lifetime Distribution",
      "100% Customer Satisfaction"
    ]
  }
];

const premiumPackages = [
  {
    name: "Platinum Package",
    price: "2999",
    oldPrice: "5998",
    features: [
      "Master Editing & Formatting",
      "Premium Custom Cover Design",
      "Global Distribution Setup",
      "Copyright Registration",
      "Dedicated Project Manager",
      "Comprehensive Marketing Campaign (1 Month)",
      "Author Website (3 Pages)",
      "Social Media Setup & Optimization"
    ],
    valueAdded: [
      "100% Royalties to Author",
      "Full Ownership Rights",
      "Lifetime Distribution",
      "100% Customer Satisfaction"
    ]
  },
  {
    name: "Bestseller Package",
    price: "4999",
    oldPrice: "9998",
    features: [
      "Elite Editing & Formatting",
      "Premium Custom Cover Design",
      "Global Distribution Setup",
      "Copyright Registration & Library of Congress",
      "Dedicated Project Manager",
      "Aggressive Marketing Campaign (3 Months)",
      "Custom Author Website (5 Pages)",
      "Press Release & Media Outreach",
      "Bestseller Strategy Session"
    ],
    valueAdded: [
      "100% Royalties to Author",
      "Full Ownership Rights",
      "Lifetime Distribution",
      "100% Customer Satisfaction"
    ]
  }
];

// Simple Checkmark SVG Component
const CheckIcon = () => (
  <svg className="w-4 h-4 text-np-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function PackagesPage() {
  const { openModal } = useModal();
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-medium mb-6 leading-tight">
              Choose the Perfect Publishing <br /> Package for Your Author Journey
            </h1>
            <p className="text-gray-300 mb-8 text-lg">
              At Professional Book Publishers, we understand that every book is unique. That's why we offer tailored publishing packages designed to fit your specific needs and budget. Choose the right package and let's turn your manuscript into a masterpiece.
            </p>
            <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition">
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Packages Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 text-center">
            Publishing Packages
          </h2>

          {/* Top Row: 3 Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {publishingPackages.map((pkg, i) => (
              <div key={i} className="border border-gray-200 bg-white shadow-lg flex flex-col h-full">
                <div className="bg-np-gold text-white text-center py-4 font-serif text-xl tracking-wider uppercase">
                  {pkg.name}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-serif font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">Was ${pkg.oldPrice}</span>
                  </div>
                  
                  <p className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Package Includes:</p>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <CheckIcon /> {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Value Added Services:</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.valueAdded.map((service, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <CheckIcon /> {service}
                      </li>
                    ))}
                  </ul>

                  <button onClick={openModal} className="w-full bg-np-gold hover:bg-np-gold-hover text-white py-3 font-bold uppercase tracking-widest transition mt-auto">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Premium Packages Centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {premiumPackages.map((pkg, i) => (
              <div key={i} className="border border-gray-200 bg-white shadow-lg flex flex-col h-full">
                <div className="bg-np-gold text-white text-center py-4 font-serif text-xl tracking-wider uppercase">
                  {pkg.name}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-serif font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">Was ${pkg.oldPrice}</span>
                  </div>
                  
                  <p className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Package Includes:</p>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <CheckIcon /> {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Value Added Services:</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.valueAdded.map((service, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <CheckIcon /> {service}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-np-gold hover:bg-np-gold-hover text-white py-3 font-bold uppercase tracking-widest transition mt-auto">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Still Unsure CTA */}
      <section className="py-16 bg-np-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Still unsure?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation call with our publishing experts to find the best fit for your journey. Let's make the right choice together!
          </p>
          <button className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md">
            Chat With a Publishing Consultant
          </button>
        </div>
      </section>

      {/* 4. Life Upgrade Section */}
      <section className="py-24 bg-np-beige border-t border-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Why This Isn't Just a <br/> Publishing Package — It's a Life <br/> Upgrade
            </h2>
            <p className="text-gray-600 mb-8">
              Publishing with Professional Book Publishers isn't just about printing a book—it's about transforming your author career. When you partner with us, you gain more than a published book; you gain an entire team dedicated to your success.
            </p>
            <ul className="space-y-4">
              {[
                "Save Time: We handle the heavy lifting so you can focus on writing your next book.",
                "Keep 100% Royalties: You earned it, you keep it. Period.",
                "Expert Guidance: Navigate the publishing landscape with a team of seasoned professionals.",
                "Professional Quality: Your book will look and feel like a traditional bestseller.",
                "Peace of Mind: We treat your manuscript with the care and respect it deserves.",
                "A True Partnership: Your success is our success."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <CheckIcon /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] w-full shadow-2xl">
             {/* Replace 1.jpeg with your 'Blackfeet Pete' cover or preferred image */}
            <Image 
              src="/Book/Book1.jpg" 
              alt="Book Showcase" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Rewards Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Join the Author Movement + <br/> Earn Rewards
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            At Professional Book Publishers, we value our community. Help us empower other authors and earn rewards when you refer someone to our programs!
          </p>
          <ul className="space-y-6 text-left max-w-2xl mx-auto">
            <li className="flex gap-4">
              <span className="text-2xl">🎁</span>
              <div>
                <p className="font-bold text-gray-900">Refer a Friend:</p>
                <p className="text-gray-600 text-sm">Know someone with a great manuscript? Refer them to us, and when they sign up, you earn a $100 bonus.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🤝</span>
              <div>
                <p className="font-bold text-gray-900">Become an Ambassador:</p>
                <p className="text-gray-600 text-sm">Join our ambassador program and earn recurring commissions for every successful referral.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold text-gray-900">Exclusive Discounts:</p>
                <p className="text-gray-600 text-sm">Our published authors receive a 20% discount on all future publishing packages and marketing services.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Final Call Strip */}
      <section className="py-20 bg-np-beige text-center border-b-[20px] border-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block px-12 py-10 bg-[#f9f7f1] shadow-sm border border-gray-200 w-full max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Final Call</h2>
            <p className="text-gray-600 mb-8">
              Your story deserves to be heard. <br/> Don't wait another day to make it a reality. <br/> <strong>Pick your package and start your journey.</strong>
            </p>
            <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md w-full">
              Start Your Professional Publishing Journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
}