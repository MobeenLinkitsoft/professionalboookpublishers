'use client';


import { useModal } from '@/src/context/ModalContext';
import Link from 'next/link';

// Expanded services list with deep sub-fields for a premium offering
const servicesList = [
  {
    title: "Ghostwriting",
    subheadings: [
      "Script Writing", 
      "Non-Fiction Writing", 
      "Fiction Writing", 
      "eBook Writing",
      "Memoir & Autobiography",
      "Speech Writing",
      "Business Book Ghostwriting",
      "Article & Blog Content"
    ]
  },
  {
    title: "Editing & Formatting",
    subheadings: [
      "Book Editing", 
      "Developmental Editing",
      "Structural Editing", 
      "Line Editing",
      "Copyediting",
      "Proofreading",
      "Formatting & Typesetting",
      "Back-of-Book Indexing"
    ]
  },
  {
    title: "Publishing",
    subheadings: [
      "Standard Book Publishing",
      "Amazon KDP Publishing", 
      "eBook & Digital Publishing", 
      "Print-on-Demand (POD) Setup",
      "Audiobook Production",
      "Full Color Publishing", 
      "Comic Book & Graphic Novels", 
      "Children's Book Publishing", 
      "Global Retail Distribution"
    ]
  },
  {
    title: "Design & Illustrations",
    subheadings: [
      "Premium Book Cover Design", 
      "Custom Book Illustration", 
      "Interior Layout Design",
      "Cartography & Map Design",
      "Typography & Styling",
      "3D Book Mockups",
      "Promotional Graphics & Banners"
    ]
  },
  {
    title: "Book Marketing",
    subheadings: [
      "Author Website Development", 
      "Targeted Book Marketing",
      "Social Media Management & Ads",
      "Amazon Ads & SEO Optimization",
      "Press Releases & Media Outreach",
      "Email Marketing & Newsletters",
      "Book Trailer Video Production",
      "Influencer & Blogger Outreach",
      "Bestseller Launch Strategy"
    ]
  },
  {
    title: "Book Coaching",
    subheadings: [
      "Manuscript Evaluation", 
      "Editorial Reviews",
      "Author Branding Consultation",
      "Publishing Path Strategy",
      "Bestseller Strategy Sessions",
      "Accountability & Writing Sprints"
    ]
  }
];

// Simple SVG Checkmark for the subheadings
const CheckIcon = () => (
  <svg className="w-4 h-4 text-np-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function ServicesPage() {
      const { openModal } = useModal();
  
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <p className="text-np-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Professional Book Publishers
          </p>
          <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
            Our Publishing Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From the first word to the final print, we offer a comprehensive suite of services tailored to bring your literary vision to life.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-600">
              Explore our core areas of expertise below. To find out exactly how these services can be customized for your specific manuscript, reach out to our consulting team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="bg-np-beige p-10 border-t-4 border-transparent hover:border-np-gold transition-all duration-300 flex flex-col shadow-sm hover:shadow-md"
              >
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b border-gray-300">
                  {service.title}
                </h3>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.subheadings.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 font-medium text-sm lg:text-base">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact-us" 
                  className="inline-block text-sm font-bold uppercase tracking-widest text-np-gold hover:text-np-gold-hover transition-colors"
                >
                  Request Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lead Generation CTA Strip */}
      <section className="py-20 bg-[#111] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to Discuss Your Book?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Our publishing executives are on standby to map out a tailored strategy for your manuscript. Let's talk about timelines, formatting, and how to make your book a bestseller.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md w-full sm:w-auto">
              Consult An Expert
            </button>
            <p className="text-white font-medium">
              or call <span className="text-np-gold">+1 (833) 501-7080</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}