"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "../../context/ModalContext";

export default function ContactPage() {
  const { openModal } = useModal();
  const router = useRouter();

  // State management for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ success: false, text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ success: false, text: "" });

    const formData = new FormData(e.target);

    // Append Web3Forms access key
    formData.append("access_key", "690d1d34-92cb-4394-822a-0a778ce4c0fd");
    // Optional: Sets the subject line of the email you receive
    formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        e.target.reset(); // Clear the form
        router.push("/thank-you"); // Navigate to thank-you page
      } else {
        setSubmitMessage({
          success: false,
          text: data.message || "Something went wrong. Please try again.",
        });
        setIsSubmitting(false); // Re-enable button on fail
      }
    } catch (error) {
      setSubmitMessage({
        success: false,
        text: "Network error. Please try again later.",
      });
      setIsSubmitting(false); // Re-enable button on fail
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        {/* Dark Gradient Overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
              Get in Touch with <br /> Us Today
            </h1>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you have a question, feedback, or want to say hi, our team
              is here to help. We aim to respond within 1 business day.
            </p>
            <button
              onClick={openModal}
              className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition"
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Contact Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: Contact Information */}
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-6 leading-tight">
              We're Looking Forward to <br className="hidden lg:block" />{" "}
              Hearing From You!
            </h2>
            <p className="text-gray-700 mb-10 leading-relaxed font-medium">
              We want to make it easy for you to contact us, in whatever way is
              most comfortable for you. Here are all the ways you can reach us:
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">
                  Phone:
                </h3>
                <p className="font-bold text-gray-900">+1 (833) 501-7080</p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">
                  Email:
                </h3>
                <p className="font-bold text-gray-900">
                  support@professionalbookpublishers.com
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-lg tracking-tighter">
                  bark
                </span>
                <span className="text-np-gold text-sm tracking-widest">
                  ★★★★★
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-green-500 text-xl leading-none">✪</span>{" "}
                  REVIEWS.io
                </span>
                <span className="text-np-gold text-sm tracking-widest">
                  ★★★★★
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 flex items-center gap-1">
                  <span className="text-green-500 text-xl leading-none">★</span>{" "}
                  Trustpilot
                </span>
                <span className="bg-green-500 text-white text-xs tracking-widest px-1">
                  ★★★★★
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800">Google</span>
                <span className="text-np-gold text-sm tracking-widest">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-4 leading-tight">
              Tell Us What You're <br /> Looking For
            </h2>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              The more we know, the better we can help. Share a few details
              about your request below, and our team will reach out to discuss
              how we can best assist you.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Honeypot Spam Protection (Invisible to users) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Your Full Name*"
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-np-gold"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-np-gold"
                required
              />

              {/* Simplified Phone Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number* (e.g., +1 234-567-8900)"
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-np-gold"
                required
              />

              <textarea
                name="genre"
                placeholder="Book Genre"
                rows={3}
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-np-gold"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-np-gold hover:bg-np-gold-hover text-white font-bold text-lg py-4 rounded transition-colors mt-2 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Get Started Now!"}
              </button>

              {/* Status Feedback Messages (Errors Only) */}
              {submitMessage.text && !submitMessage.success && (
                <div className="text-center text-sm font-semibold p-2 rounded mt-2 text-red-500 bg-red-50">
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section className="py-20 bg-np-beige text-center border-b-[20px] border-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Partner with the Top Book <br /> Publishing Company in the USA
          </h2>
          <p className="text-gray-600 mb-8">
            From manuscript to marketplace, we handle everything.
          </p>
          <button
            onClick={openModal}
            className="bg-np-gold hover:bg-np-gold-hover text-white px-10 py-4 uppercase tracking-widest font-bold text-sm transition shadow-md"
          >
            Consult An Expert
          </button>
          <p className="mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
            Or call us at{" "}
            <span className="font-bold text-np-gold">+1 (833) 501-7080</span>{" "}
            for quick support.
           
          </p>
        </div>
      </section>
    </>
  );
}