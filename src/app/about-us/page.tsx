'use client';

import { useModal } from '@/src/context/ModalContext';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const { openModal } = useModal();
  
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-np-gold uppercase tracking-[0.2em] text-sm font-semibold">
            The Story Behind Professional Book Publishers
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full shadow-2xl">
             {/* Office/Team placeholder image */}
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Our Publishing Team" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-np-gold mb-3 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Friendly, Professional <br/> Support for Every Author
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2021, Professional Book Publishers was built with one goal in mind — to make publishing more personal, more approachable, and more empowering for every writer. 
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The publishing industry can often feel cold and difficult to navigate. We saw countless talented authors get lost in the shuffle of traditional publishing or overwhelmed by the technicalities of self-publishing. We created this company to bridge that gap.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since then, we've helped authors from all walks of life turn their stories into professionally published books. From heartfelt memoirs to powerful how-to guides, we're proud to be part of every author's journey.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Beige Section) */}
      <section className="py-24 bg-np-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Why Authors Choose Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Royalties & Ownership",
                desc: "We believe you should reap the rewards of your hard work. You keep full copyright ownership and 100% of your net royalties."
              },
              {
                title: "Uncompromising Quality",
                desc: "From developmental editing to premium cover design, our in-house experts ensure your book rivals anything on a traditional bookstore shelf."
              },
              {
                title: "Total Transparency",
                desc: "No hidden fees, no confusing contracts, and no vanishing acts. We keep you informed and involved at every single step of the process."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border-t-4 border-transparent hover:border-np-gold transition-all duration-300">
                <div className="text-np-gold text-3xl mb-4 font-serif font-bold">0{i + 1}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-white mb-16">Numbers That Tell a Story of Success</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { num: "5+", label: "Years of Experience" },
              { num: "120+", label: "Expert Team" },
              { num: "1678+", label: "Books Published" },
              { num: "1000+", label: "Happy Authors" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl md:text-6xl font-serif text-np-gold font-bold mb-3">{stat.num}</p>
                <p className="text-white text-sm tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Strip */}
      <section className="py-20 bg-np-beige text-center border-b-[20px] border-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Partner with the Top Book <br/> Publishing Company in the USA
          </h2>
          <p className="text-gray-600 mb-8">
            From manuscript to marketplace, we handle everything.
          </p>
          <button onClick={openModal} className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md">
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