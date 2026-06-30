'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- Import useRouter
import { useModal } from '../context/ModalContext';

export default function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const router = useRouter(); // <-- Initialize router
  
  // State management for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ success: false, text: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ success: false, text: '' });

    const formData = new FormData(e.target);

    // Append Web3Forms access key
    formData.append("access_key", "690d1d34-92cb-4394-822a-0a778ce4c0fd");
    formData.append("subject", "New Lead From Book Publishing Modal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        e.target.reset(); // Clear the form
        closeModal(); // Close the modal before navigating
        router.push('/thank-you'); // <-- Navigate to thank-you page
      } else {
        setSubmitMessage({ success: false, text: data.message || "Something went wrong. Please try again." });
        setIsSubmitting(false); // Re-enable button on fail
      }
    } catch (error) {
      setSubmitMessage({ success: false, text: "Network error. Please try again later." });
      setIsSubmitting(false); // Re-enable button on fail
    } 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-200 transition"
        >
          ✕
        </button>

        {/* LEFT COLUMN: Gold Info Section */}
        <div className="w-full md:w-5/12 bg-[#cda049] p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
            Publish Your Book <br/> Today
          </h2>

          <div className="w-full space-y-4">
            {/* Stat Box */}
            <div className="bg-[#b38b3c] p-4 rounded-xl text-white">
              <p className="text-4xl font-bold mb-1">1678</p>
              <p className="text-sm">Total Books Published</p>
            </div>

            {/* BBB Badge Box */}
            <div className="bg-[#b38b3c] p-4 rounded-xl flex items-center justify-center gap-4 text-white">
              <div className="bg-white text-black p-2 rounded w-16 h-16 flex flex-col items-center justify-center font-bold leading-tight">
                <span className="text-2xl border-b-2 border-black pb-1 mb-1">BBB</span>
                <span className="text-[8px] uppercase">Accredited Business</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">BBB ACCREDITED</p>
                <p className="text-sm">Scam Shield:</p>
                <p className="text-sm">0 Complaints</p>
              </div>
            </div>

            {/* Trustpilot Box */}
            <div className="bg-[#b38b3c] p-4 rounded-xl flex flex-col items-center justify-center text-white">
              <p className="font-bold text-lg flex items-center gap-2 mb-1">
                <span className="text-green-500 text-xl">★</span> Trustpilot
              </p>
              <div className="flex gap-1 text-green-500 text-xl">
                ★★★★★
              </div>
            </div>

            {/* Promo Box */}
            <div className="bg-black/90 p-6 rounded-xl text-white mt-4 relative overflow-hidden text-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">PUBLISHING ONLY PACKAGE – JUST <span className="text-[#cda049]">$299!</span></h3>
                <p className="text-xs mb-3 italic">For authors who want to keep it simple and get published quickly.</p>
                <ul className="text-[10px] space-y-1 text-left list-disc list-inside">
                  <li>Guaranteed eBook Publication Approval</li>
                  <li>Paperback & Hardcover (if page count allows)</li>
                  <li>Publishing on Amazon Kindle & Barnes & Noble</li>
                  <li>100% Ownership Rights</li>
                  <li>Platform Account Setup (Amazon & B&N)</li>
                  <li>Author Retains Full Royalties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Lead Form Section */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-white mb-4">
              Ready to Publish <span className="text-[#cda049] font-bold">Your<br/>Book?</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
              We help authors publish with confidence. Whether it's your <strong className="text-[#cda049]">first book or your next bestseller</strong>, we provide expert publishing solutions tailored for success.
            </p>
            <div className="w-16 h-1 bg-[#cda049] mx-auto mt-6"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot Spam Protection (Invisible to users) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {/* Name Input */}
            <input 
              type="text" 
              name="name"
              placeholder="Your Full Name*" 
              className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#cda049]"
              required 
            />
            
            {/* Email Input */}
            <input 
              type="email" 
              name="email"
              placeholder="Email Address*" 
              className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#cda049]"
              required 
            />
            
            {/* Simplified US Phone Input */}
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number* (e.g., +1 234-567-8900)" 
              className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#cda049]"
              required 
            />

            {/* Genre Input */}
            <textarea 
              name="genre"
              placeholder="Book Genre" 
              rows={2}
              className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#cda049]"
            ></textarea>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#fbbc24] hover:bg-[#e0a81d] text-black font-bold text-lg py-4 rounded transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Get Started Now!'}
            </button>

            {/* Status Feedback Messages (Errors Only) */}
            {submitMessage.text && !submitMessage.success && (
              <div className="text-center text-sm font-semibold p-2 rounded mt-2 text-red-400 bg-red-950/30">
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}