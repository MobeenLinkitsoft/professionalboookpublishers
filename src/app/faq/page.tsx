'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useModal } from '@/src/context/ModalContext';

// Extracted exact questions from the screenshot, replacing the brand name
const faqs = [
  {
    q: "How long has Professional Book Publishers been operational?",
    a: "We have been providing dedicated publishing services for several years, helping countless authors turn their manuscripts into published successes."
  },
  {
    q: "Where is Professional Book Publishers located?",
    a: "We operate across the USA, providing comprehensive remote and digital support to authors nationwide."
  },
  {
    q: "Can I visit or ship my documents to your physical address?",
    a: "To ensure the highest security and efficiency, we handle all manuscript submissions and communications digitally through our secure author portal."
  },
  {
    q: "What services are included in your package?",
    a: "Depending on your selected package, services can include ghostwriting, developmental editing, formatting, cover design, publishing, and marketing."
  },
  {
    q: "What is your experience with publishing books in my genre?",
    a: "Our team consists of specialized editors and marketers across all major genres, including fiction, non-fiction, memoirs, children's books, and technical writing."
  },
  {
    q: "What are your distribution channels?",
    a: "We distribute globally through major platforms including Amazon, Barnes & Noble, IngramSpark, and thousands of other digital and physical retailers."
  },
  {
    q: "How do you handle marketing and promotion?",
    a: "We build customized marketing strategies that include social media campaigns, author website development, press releases, and targeted email marketing."
  },
  {
    q: "What is your royalty structure?",
    a: "We believe authors should reap the rewards of their hard work. You retain 100% of your net royalties on all book sales."
  },
  {
    q: "Can I retain my copyright?",
    a: "Absolutely. You retain 100% full copyright and ownership of your manuscript and all produced materials."
  },
  {
    q: "What are the terms of the contract?",
    a: "Our contracts are transparent and straightforward, detailing the exact scope of work, timeline, and deliverables without hidden clauses."
  },
  {
    q: "Do you have testimonials or references from authors you've worked with?",
    a: "Yes, you can view our extensive portfolio and read testimonials from our satisfied authors on our 'Our Work' and 'About Us' pages."
  },
  {
    q: "Are there any upfront fees?",
    a: "Our fees are based strictly on the specific services you require. We provide a comprehensive, transparent quote before any work begins."
  },
  {
    q: "What is the production quality of your books?",
    a: "We use industry-leading, premium print-on-demand facilities to ensure your physical books rival any traditionally published book found in a major bookstore."
  },
  {
    q: "How many of your authors have achieved significant commercial success?",
    a: "Many of our authors have become bestsellers in their respective categories. Success depends on the market, but we provide the tools to maximize your potential."
  },
  {
    q: "What is your refund policy if I am unhappy with your services or the results of my book's publication?",
    a: "We have milestone-based approvals throughout the process. You review and approve the editing, cover, and formatting before we proceed to ensure 100% satisfaction."
  },
  {
    q: "What is your policy on authors having control over the design and layout of their book? Can I provide my own team of editors and designers?",
    a: "You have final say on all creative decisions. If you have your own cover designer or editor, we can happily integrate their work into our publishing pipeline."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const { openModal } = useModal();

  return (
    <>
      {/* 1. Hero Section */}
      {/* Replace URL with your dark office/library background image */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div> {/* Dark Overlay */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
              Commonly Asked <br/> Questions
            </h1>
            <p className="text-gray-300 mb-8">
              Got more questions? We've got you covered. Reach out, and we'll make sure you have all the information you need.
            </p>
            <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition">
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive FAQ Accordion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className={`text-base font-medium pr-8 transition-colors ${isOpen ? 'text-np-gold' : 'text-gray-900 group-hover:text-np-gold'}`}>
                      {faq.q}
                    </span>
                    <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      {/* Simple SVG Caret Arrow */}
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  
                  {/* Smooth Accordion Content Dropdown */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 text-sm leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Strip (Matches the screenshot) */}
      <section className="py-20 bg-np-beige text-center border-b-[20px] border-[#111]">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Partner with the Top Book <br/> Publishing Company in the USA
        </h2>
        <p className="text-gray-600 mb-8">
          From manuscript to marketplace, we handle everything.
        </p>
        <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md">
          Consult An Expert
        </button>
        <p className="mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
          Or call us at <span className="font-bold text-np-gold">+1 (833) 501-7080</span> for quick support. 
          <span className="text-np-gold ml-2">💬 Live Chat</span>
        </p>
      </section>
    </>
  );
}