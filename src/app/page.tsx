'use client';

import Image from "next/image";
import Link from "next/link";
import { useModal } from "../context/ModalContext";

export default function Home() {
  const { openModal } = useModal();

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 bg-[#151515]/90 border border-gray-700 p-12 md:p-16 text-center max-w-4xl shadow-2xl backdrop-blur-sm">
          <p className="text-np-gold uppercase tracking-[0.2em] text-sm mb-4">
            Expert Book Publishing Services in the USA
          </p>
          <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
            We Help Writers Become <br /> Bestselling Authors
          </h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            With the right support, strategy, and publishing process, your story
            can go farther than you ever imagined. We're here to guide you,
            step-by-step, and help you make your mark in the book world.
          </p>
          
          {/* TRIGGERS MODAL */}
          <button 
            onClick={openModal}
            className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-10 py-4 transition"
          >
            Let's Get Started
          </button>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="About Us" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-np-gold uppercase tracking-widest text-sm font-semibold mb-2">
              About Us
            </p>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Friendly, Professional Support <br /> for Every Author
            </h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Founded in 2021, Professional Book Publishers was built with one
              goal in mind — to make publishing more personal, more
              approachable, and more empowering for every writer.
            </p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Since then, we've helped authors from all walks of life turn their
              stories into professionally published books. From heartfelt
              memoirs to powerful how-to guides, we're proud to be part of every
              author's journey.
            </p>
            <div className="flex items-center gap-6">
              {/* TRIGGERS MODAL */}
              <button 
                onClick={openModal}
                className="bg-np-gold hover:bg-np-gold-hover text-white px-8 py-3 uppercase tracking-wide font-semibold text-sm transition"
              >
                Available 24/7
              </button>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">
                  Chat With Us
                </span>
                <span className="font-bold text-gray-900">
                  +1 (833) 501-7080
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 bg-np-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-np-gold uppercase tracking-widest text-sm font-semibold mb-2">
            Book Publishing Experts
          </p>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Professional Book Publishing Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you need help with book writing, editing, or marketing, our
            team has you covered. We provide tailored services to match your
            unique needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Ghostwriting", desc: "Our ghostwriters collaborate with you to craft your book, capturing your voice." },
              { title: "Book Cover Design", desc: "Our talented designers create eye-catching, professional covers." },
              { title: "Book Illustration", desc: "We offer custom illustrations that bring your book's characters to life." },
              { title: "Book Marketing", desc: "Our marketing team helps promote your book using proven strategies." },
              { title: "Book Coaching", desc: "Expert guidance on writing, publishing, and marketing." },
              { title: "Editing and Formatting", desc: "Meticulous editing and formatting that guarantees readability." },
              { title: "Book Publishing", desc: "From print to digital, we handle all aspects of publishing." },
              { title: "Author Website", desc: "Custom websites that reflect your brand and book to connect with readers." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-transparent hover:border-np-gold transition-all shadow-sm">
                <h3 className="text-xl font-serif text-np-gold mb-3 font-bold">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="py-16 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-white mb-10">
            Numbers That Tell a Story of Success
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "5+", label: "Years of Experience" },
              { num: "120+", label: "Expert Team" },
              { num: "1678+", label: "Books Published" },
              { num: "1000+", label: "Happy Authors" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-serif text-np-gold font-bold mb-2">{stat.num}</p>
                <p className="text-white text-sm tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Categories Section (Images Fixed) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-np-gold uppercase tracking-widest text-sm font-semibold mb-2">
            What Kind Of Book Are You Writing?
          </p>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Explore Our Publishing Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-np-beige flex items-center justify-center h-48 font-serif text-lg font-bold">Photography</div>
            <div className="bg-np-beige flex items-center justify-center h-48 font-serif text-lg font-bold">Cookbook</div>
            <div className="bg-np-beige flex items-center justify-center h-48 font-serif text-lg font-bold">Travel Books</div>
            <div className="bg-np-beige flex items-center justify-center h-48 font-serif text-lg font-bold">Children's Books</div>
            
            {/* Added real images for the bottom row */}
            <div className="relative h-48 w-full"><Image src="/Book/Book1.jpg" fill className="object-cover border border-gray-200" alt="Category 1"/></div>
            <div className="relative h-48 w-full"><Image src="/Book/Book2.jpg" fill className="object-cover border border-gray-200" alt="Category 2"/></div>
            <div className="relative h-48 w-full"><Image src="/Book/Book3.jpg" fill className="object-cover border border-gray-200" alt="Category 3"/></div>
            <div className="relative h-48 w-full"><Image src="/Book/Book4.jpg" fill className="object-cover border border-gray-200" alt="Category 4"/></div>
          </div>

          <div className="flex justify-center gap-4">
            {/* TRIGGERS MODAL */}
            <button onClick={openModal} className="bg-black text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-gray-800 transition">
              Let's Get Started
            </button>
            {/* NAVIGATES TO CONTACT PAGE */}
            <Link href="/contact-us" className="bg-np-gold text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-np-gold-hover transition inline-block">
              Consult An Expert
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Or call us at <span className="font-bold text-np-gold">+1 (833) 501-7080</span>
          </p>
        </div>
      </section>

      {/* 6. NEW: Published Books Portfolio Section (Missing in original) */}
      <section className="py-24 bg-np-beige text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-np-gold uppercase tracking-widest text-sm font-semibold mb-2">
            Our Successful Collaborations
          </p>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Published Books We're Proud Of
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {/* Maps exactly 10 images from your public folder */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="relative aspect-[2/3] shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image src={`/Book/Book${num}.jpg`} alt={`Published Book ${num}`} fill className="object-cover border border-gray-200 bg-white" />
              </div>
            ))}
          </div>

          {/* NAVIGATES TO PORTFOLIO PAGE */}
          <Link href="/portfolio" className="bg-black text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-gray-800 transition inline-block">
            View All Work
          </Link>
        </div>
      </section>

      {/* 7. Testimonial Banner */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-np-gold uppercase tracking-widest text-sm font-semibold mb-2">
            Hear Directly From Our
          </p>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Happy Clients
          </h2>

          <div className="bg-np-gold p-12 relative shadow-xl">
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-black text-white p-2 cursor-pointer hover:bg-gray-800">◀</div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-black text-white p-2 cursor-pointer hover:bg-gray-800">▶</div>
            <p className="text-white text-lg font-serif italic leading-relaxed">
              "Professional Book Publishers did a great job designing my new
              author website! They made the entire process so easy, and the
              final result was better than I imagined. The design is sleek, the
              navigation is simple, and I love the personal touch it brings to
              my online presence."
            </p>
          </div>
        </div>
      </section>

      {/* 8. NEW: Commonly Asked Questions Section (Missing in original) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Commonly Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-200">
              <h4 className="font-bold text-lg mb-2 text-gray-900">What is the process for publishing my book with you?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Our process starts with understanding your vision. We guide you through ghostwriting, editing, formatting, cover design, and publishing. We'll also provide support with marketing and distribution to ensure your book reaches your target audience.</p>
            </div>
            <div className="pb-6 border-b border-gray-200">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Do I need to provide a completed manuscript to get started?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Yes, we typically work with completed manuscripts. However, if you need help with writing, our ghostwriting services can assist in bringing your ideas to life.</p>
            </div>
            <div className="pb-6 border-b border-gray-200">
              <h4 className="font-bold text-lg mb-2 text-gray-900">What genres do you specialize in?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We work with a broad range of genres, including fiction, non-fiction, memoirs, self-help, business, children's books, and poetry.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            {/* NAVIGATES TO FAQ PAGE */}
            <Link href="/faq" className="text-np-gold font-bold uppercase tracking-widest text-sm hover:underline">
              Read All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA & Footer Strip */}
      <section className="py-16 bg-np-beige text-center border-b-[20px] border-black">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Partner with the Top Book <br /> Publishing Company in the USA
        </h2>
        <p className="text-gray-600 mb-8">
          From manuscript to marketplace, we handle everything.
        </p>
        
        {/* TRIGGERS MODAL */}
        <button 
          onClick={openModal} 
          className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold transition shadow-md"
        >
          Consult An Expert
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Or call us at{" "}
          <span className="font-bold text-np-gold">+1 (833) 501-7080</span> for
          quick support.
        </p>
      </section>
    </>
  );
}